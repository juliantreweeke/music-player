import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import Tracklist from './Tracklist.js'; 
import { CenteredContainer } from "../Grid";
import { useDispatch } from "react-redux";
import { actions } from '../../redux/ducks/index.js';

export const Card = styled.div`
  min-width:80%;
  height: 500px;
  border-radius: 8px;
  background: transparent;
  border: 2px solid black;
`;

export const TracklistContainer = ({data, querySearched, tracks}) => {
  
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

   const selectTrack = (i) => {
    let trackOrder = data;
    let temp = trackOrder[0];
    trackOrder[0] = trackOrder[i];
    trackOrder[i] = temp;
    dispatch(actions.resetTracks());
    dispatch(actions.setPlay());
    dispatch(actions.setData(trackOrder));
    animateTitles();
  }
      return (
        <CenteredContainer>
          <Card>
             {tracks && <Tracklist
              querySearched={querySearched}
              tracks={tracks}
              selectTrack={selectTrack}
            />}
          </Card>
        </CenteredContainer>
      )       
}