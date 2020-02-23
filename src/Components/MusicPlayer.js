import React from "react";
import styled from 'styled-components/macro';
import {Spring} from 'react-spring/renderprops';
import Playbutton from "./Playbutton";
import { NavigationButtons } from "./NavigationButtons";
import { TrackImage } from "./TrackImage";

const OuterCard = styled.div`
  display:flex;
  flex-direction:column;
  min-width:80%;
  height: 500px;
  border-radius: 8px;
  background: #1b1d1e;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Card = styled.div`
  display:flex;
  width:100%;
  justify-content:center;
  align-items:center;
  height: 1000px;
  transform:rotate(0deg);
`;

const MusicPlayerContainer = ({ playing, togglePlay, data, selectedTrack }) => {

  return (
      <Spring
        to={{
          height: playing ? "0%" : "50%"
        }}
        togglePlay={togglePlay} 
        playing={playing}
        data={data}
        selectedTrack={selectedTrack}
      > 
      {props => ( 
        <OuterCard>
          <Card>
            <Playbutton playing={playing} togglePlay={togglePlay} /> 
            {data && data[0] && 
            <React.Fragment>
              <TrackImage image={data[selectedTrack].artwork_url} playing={playing} />
            </React.Fragment>
            }
          </Card>
          <NavigationButtons data={data} selectedTrack={selectedTrack} />
        </OuterCard>
      )}
      </Spring>
  );
};

export default MusicPlayerContainer;
