import React, { Component } from "react";
import styled from "styled-components";
import { Spring } from "react-spring";
import Playbutton from "./Playbutton";
import Cover from "./Cover";
import Header from "./Header";
import Heading from "./Heading";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Frame = styled.div`
  margin-top:150px;
  margin-bottom:150px;
  position: relative;
  width: 400px;
  height: 700px;
  border-radius: 8px;
  background: #1b1d1e;
  border: 2px solid #black;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

const Card = (props) => {
  const { playing, togglePlay, data, select } = props;
  if (data) {
    console.log();
  }


  return (
    <Container>
      <Spring
        from={{ color: "black" }}
        to={{
          color: playing ? "white" : "#70C1B3",
          scale: playing ? 1.2 : 1.2,
          rotation: playing ? "0deg" : "0deg",
          scaleX: playing ? -1 : 0,
          height: playing ? "0%" : "50%"
        }}
        togglePlay={togglePlay} // Additional props will be spread over the child
        children={Albumcard} // Render prop
        playing={playing}
        data={data}
        select={select}
      />
    </Container>
  );
};

export default Card;

const Albumcard = ({
  color,
  scale,
  rotation,
  playing,
  togglePlay,
  scaleX,
  height,
  data,
  select
}) => (
    <Frame
      style={{
        color,
        transform: `scale3d(${scale}, ${scale}, ${scale}) rotate(${rotation})`
      }}
    >
      <Playbutton playing={playing} togglePlay={togglePlay} />
      {data && data[0] && < React.Fragment >
        <Header image={data[0].artwork_url} playing={playing} />
        <Heading heading={data[0].title} playing={playing} />
        <Cover select={select} data={data} playing={playing} />
      </React.Fragment>
      }
    </Frame>
  );