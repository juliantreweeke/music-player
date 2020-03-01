import React from "react";
import { Tracklist } from './Tracklist.js'; 
import { selectTrack } from '../../redux/commonActions';

export const TracklistContainer = ({querySearched, selectedTrack, tracks}) => {

      return tracks && 
            <Tracklist
              querySearched={querySearched}
              tracks={tracks}
              selectTrack={selectTrack}
              selectedTrack={selectedTrack}
            />
}