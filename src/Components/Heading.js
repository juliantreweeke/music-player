import React from "react";
import styled from "styled-components";
import { Spring } from "react-spring";

const Frame = styled.div`
  position: absolute;
  & h1 {
  }
`;

const Headingtext = ({ top, left, scale, heading }) => (
  <Frame
    style={{
      top: `${top}%`,
      left: `${left}%`,
      transform: `scale3d(${scale}, ${scale}, ${scale})`
    }}
  >
    <h1>{heading}</h1>
  </Frame>
);

const Heading = ({playing,heading}) => {
  return (
    <Spring
      to={{
        top: playing ? "10" : "30",
        left: playing ? "38" : "0",
        scale: playing ? 1 : 0.7
      }}
      children={Headingtext} // Render prop
      playing={playing}
      heading={heading}
    />
  );
};

export default Heading;
