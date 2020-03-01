import React, { useCallback, useEffect } from "react";
import { App } from "./App"
import { useDispatch, useSelector } from "react-redux";
import { actions } from '../../redux/ducks/index.js';

export const AppContainer = () => {

  const SOUNDCLOUD_API_KEY = process.env.REACT_APP_SOUNDCLOUD_API_KEY;
  
  const audioElement = useSelector(state => state.audioElement);
  const data = useSelector(state => state.data);
  const playing = useSelector(state => state.playing);
  const query = useSelector(state => state.query);
  const querySearched = useSelector(state => state.querySearched);
  const tracks = useSelector(state => state.tracks);
  const selectedTrack = useSelector(state => state.selectedTrack);

  const dispatch = useDispatch();

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
  }, [audioElement,data,selectedTrack, toggleAudioElement]);

  const searchTracks = () => {
    fetch(
      `https://api.soundcloud.com/tracks/?client_id=${SOUNDCLOUD_API_KEY}&q=${query}`
    ).then(response => {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then( data => {
        if (data) {
          const updatedData = data.map((trackData)=>{
            return {...trackData, stream_url:`${trackData.stream_url}?client_id=${SOUNDCLOUD_API_KEY}`}
          });
          setupPlayer(updatedData);   
        }
      });
    });
  }

  const setupPlayer = async (data) => {
    await dispatch(actions.setData(data));
    await dispatch(actions.resetSelectedTrack());
    await dispatch(actions.setQuerySearched());
    await dispatch(actions.resetTracks());
    await animateTitles(data);
  }

  const animateTitles = (data) => {
    let timeOutLength = 100;
    if (data) {
      data.forEach(track => {
        setTimeout(() => dispatch(actions.addTrack(track.title), timeOutLength));
        timeOutLength += 200;
      })
    }
  };

  const handleInputChange = (event) => {
    dispatch(actions.setQuery(event.target.value));
  }

  const togglePlay = () => dispatch(actions.togglePlay());

  return <App 
            data={data} 
            playing={playing} 
            handleInputChange={handleInputChange}
            query={query} 
            querySearched={querySearched} 
            tracks={tracks}
            searchTracks={searchTracks}
            selectedTrack={selectedTrack}
            togglePlay={togglePlay}
        />
}
