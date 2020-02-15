import React from "react";
import styled from "styled-components";
import { Spring } from "react-spring";
import Playbutton from "./Playbutton";
import Cover from "./Cover";
import Header from "./Header";
import Heading from "./Heading";
import { CenteredContainer } from "./Grid";

export const Card = styled.div`
  min-width:80%;
  height: 400px;
  border-radius: 8px;
  background: #1b1d1e;
  border: 2px solid #black;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const MusicPlayerContainer = ({ playing, togglePlay, data }) => {
  return (
    <CenteredContainer>
      <Spring
        from={{ color: "black" }}
        to={{
          color: playing ? "white" : "#70C1B3",
          scale: playing ? 1.2 : 1.2,
          rotation: playing ? "0deg" : "0deg",
          scaleX: playing ? -1 : 0,
          height: playing ? "0%" : "50%"
        }}
        togglePlay={togglePlay} 
        children={MusicPlayer} 
        playing={playing}
        data={data}
      />
    </CenteredContainer>
  );
};

export default MusicPlayerContainer;

const MusicPlayer = ({
  color,
  scale,
  rotation,
  playing,
  togglePlay,
  data,
}) => (
    <Card
      style={{
        color,
        transform: `scale3d(${scale}, ${scale}, ${scale}) rotate(${rotation})`
      }}
    >
      <Playbutton playing={playing} togglePlay={togglePlay} />
      {data && data[0] && < React.Fragment >
        <Header image={data[0].artwork_url} playing={playing} />
        <Heading heading={data[0].title} playing={playing} />
        <Cover data={data} playing={playing} />
      </React.Fragment>
      }
    </Card>
  );