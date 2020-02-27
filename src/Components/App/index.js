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
    playing ? audioElement.play() : audioElement.pause();
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
      audioElement.src = data[selectedTrack].stream_url;
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
          dispatch(actions.resetSelectedTrack());
          const updatedData = data.map((trackData)=>{
            return {...trackData, stream_url:`${trackData.stream_url}?client_id=${SOUNDCLOUD_API_KEY}`}
          });
          dispatch(actions.setData(updatedData));
          dispatch(actions.setQuerySearched());
        }
      });
    });
  }

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
