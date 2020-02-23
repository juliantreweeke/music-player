import React from "react";
import { App } from "./App"
import { useDispatch, useSelector } from "react-redux";
import { actions } from '../../redux/ducks/index.js';

export const AppContainer = () => {

  const data = useSelector(state => state.data);
  const playing = useSelector(state => state.playing);
  const query = useSelector(state => state.query);
  const querySearched = useSelector(state => state.querySearched);
  const tracks = useSelector(state => state.tracks);
  const selectedTrack = useSelector(state => state.selectedTrack);
  const dispatch = useDispatch();

  const searchTracks = () => {
    const SOUNDCLOUD_API_KEY = process.env.REACT_APP_SOUNDCLOUD_API_KEY;
    fetch(
      `https://api.soundcloud.com/tracks/?client_id=${SOUNDCLOUD_API_KEY}&q=${query}`
    ).then(response => {
      if (response.status !== 200) {
        console.log(response.status);
        return;
      }
      response.json().then(data => {
        if (data) {
          dispatch(actions.resetSelectedTrack());
          dispatch(actions.setData(data));
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
