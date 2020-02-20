import React from "react";
import styled from "styled-components";
import { Spring } from "react-spring";
import Playbutton from "./Playbutton";
import { NavigationButtons } from "./NavigationButtons";
import { TrackImage } from "./TrackImage";

const Card = styled.div`
  display:flex;
  min-width:80%;
  justify-content:center;
  align-items:center;
  height: 500px;
  border-radius: 8px;
  background: #1b1d1e;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const MusicPlayerContainer = ({ playing, togglePlay, data, selectedTrack }) => {
  return (
      <Spring
        to={{
          rotation: playing ? "0deg" : "0deg",
          height: playing ? "0%" : "50%"
        }}
        togglePlay={togglePlay} 
        children={MusicPlayer} 
        playing={playing}
        data={data}
        selectedTrack={selectedTrack}
      />
  );
};

export default MusicPlayerContainer;

const MusicPlayer = ({
  color,
  rotation,
  playing,
  togglePlay,
  data,
  selectedTrack,
}) => (
    <Card
      style={{
        color,
        transform: `rotate(${rotation})`
      }}
    >``
      <Playbutton playing={playing} togglePlay={togglePlay} />
      {/* <NavigationButtons /> */}
      {data && data[0] && <React.Fragment>
        <TrackImage image={data[selectedTrack].artwork_url} playing={playing} />
      </React.Fragment>
      }
    </Card>
  );
