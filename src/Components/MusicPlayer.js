import React from "react";
import styled from 'styled-components/macro';
import {Spring} from 'react-spring/renderprops';
import Playbutton from "./Playbutton";
import { NavigationButtons } from "./NavigationButtons/NavigationButtons";
import { TrackImageContainer } from "./TrackImage/index.js";
import { DEFAULT_IMAGE_URL } from '../constants';
import { media } from "../Grid";

const OuterCard = styled.div`
  display:flex;
  flex-direction:column;
  min-width:80%;
  height: 500px;
  border-radius: 8px;
  background: #1b1d1e;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  ${media['md'](`
  border-bottom-left-radius:0px;
  border-bottom-right-radius:0px;
  `)};
  ${media['sm'](`
  border-radius:0px;
  `)};
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

  const image = data && data[selectedTrack] && data[selectedTrack].artwork_url;
  const imageUrlEdit = image ? image.replace("large", "t500x500") : DEFAULT_IMAGE_URL;

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
              <TrackImageContainer image={imageUrlEdit} playing={playing} />
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
