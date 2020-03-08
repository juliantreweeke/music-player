import React, { useCallback, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import MusicPlayer from "../MusicPlayer";
import SearchBar from "../SearchBar/SearchBar";
import { Tracklist } from "../Tracklist/Tracklist.js";
import { Col, Layout, Row} from "../../Grid";
import { theme } from '../../themeStyles';
import { usePlaying } from '../../Hooks/usePlaying.js';
import { useData } from '../../Hooks/useData.js';
import { useTracks } from '../../Hooks/useTracks.js';
import { useQuerySearched } from '../../Hooks/useQuerySearched.js';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: #d2d8db;
  overflow-x: scroll;
`;

export const App = () => {

  const SOUNDCLOUD_API_KEY = process.env.REACT_APP_SOUNDCLOUD_API_KEY;

  const { audioElement, playing, togglePlay } = usePlaying();
  const { data, setData } = useData();
  const { addTrack, tracks, selectedTrack, resetSelectedTrack, resetTracks } = useTracks();
  const { querySearched, setQuerySearched } = useQuerySearched();

  const toggleAudioElement = useCallback(() => {
    if(playing) {
      const playPromise = audioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          audioElement.pause();
        });
      }
    } else {
      audioElement.pause();
    }
  },[audioElement, playing]);
  
  useEffect(() => {
    const watchPlaying = () => {
      toggleAudioElement();
    };
    watchPlaying()
  }, [playing,toggleAudioElement]);
  
  useEffect(() => {
    const watchSelectedTrack = () => {
      if(!audioElement || !data) return;
      audioElement.src = data[selectedTrack] && data[selectedTrack].stream_url;
      toggleAudioElement();
    };
    watchSelectedTrack()
  }, [audioElement,data,selectedTrack,toggleAudioElement]);
  
  const searchTracks = (query) => {
    fetch(
      `https://api.soundcloud.com/tracks/?client_id=${SOUNDCLOUD_API_KEY}&q=${query}`
    ).then(response => {
      if (response.status !== 200) {
        return;
      }
      response.json().then( data => {
        if (data) {
          const updatedData = data.map((trackData)=>{
            return {...trackData, stream_url:`${trackData.stream_url}?client_id=${SOUNDCLOUD_API_KEY}`}
          });
          setupPlayer(query, updatedData);   
        }
      });
    });
  }
  
  const setupPlayer = async (query, data) => {
    await setData(data);
    await resetSelectedTrack();
    await setQuerySearched(query);
    await resetTracks();
    await animateTitles(data);
  }
  
  const animateTitles = (data) => {
    let timeOutLength = 100;
      data.forEach((track, index) => {
        setTimeout(() => addTrack({title:track.title, index}), timeOutLength);
        timeOutLength += 200;
      })
  };

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Layout margin="15">
          <Row>
            <Col marginLeftRight="30" size="1"> 
              <SearchBar
              searchTracks={searchTracks} />
            </Col>
            <Col marginLeftRight="30" size="1" collapse="md"></Col>
          </Row>
          <Row wrap="true">
            <Col marginLeftRight="30" size="1">  
              <MusicPlayer data={data} playing={playing} selectedTrack={selectedTrack} togglePlay={togglePlay}/>
            </Col>
            <Col marginLeftRight="30" size="1" >
              <Tracklist data={data} querySearched={querySearched} tracks={tracks} selectedTrack={selectedTrack} />
            </Col> 
          </Row>
        </Layout>
      </Background>
      </ThemeProvider>
  );
}
