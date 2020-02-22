import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import Tracklist from './Tracklist.js'; 
import { useDispatch } from "react-redux";
import { actions } from '../../redux/ducks/index.js';
import { selectTrack } from '../../redux/commonActions';

export const Card = styled.div`
  min-width:80%;
  height: 500px;
  border-radius: 8px;
  background: transparent;
  border: 2px solid black;
`;

export const TracklistContainer = ({data, querySearched, selectedTrack, tracks}) => {
  
  const dispatch = useDispatch();

  const animateTitles = useCallback(() => {
    let timeOutLength = 100;
    if (data) {
      data.forEach(track => {
        setTimeout(() => dispatch(actions.addTrack(track.title), timeOutLength));
        timeOutLength += 200;
      })
    }
  },[data, dispatch]);

  useEffect(() => {
    const initTrackList = () => {
      dispatch(actions.resetTracks());
      animateTitles();
    };
    initTrackList()
  }, [animateTitles, data, dispatch]);

      return (
          <Card>
             {tracks && <Tracklist
              querySearched={querySearched}
              tracks={tracks}
              selectTrack={selectTrack}
              selectedTrack={selectedTrack}
            />}
          </Card>
      )       
}