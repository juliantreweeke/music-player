import React from "react";
import { Spring } from "react-spring";
import styled from 'styled-components/macro'

const PAUSE = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26";
const PLAY = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28";

const svgStyles = `
        width:100%;
        height:140%;
        position:absolute;
        z-index:5;`

const svgInnerStyles = (rotation) => `
          position:absolute;
          cursor:pointer;
          zIndex:5;
          transform:rotate(${rotation}deg);`

const Shape = ({ rotation, togglePlay, color, shape, y, x }) => (
    <svg version="1.1" viewBox={`-58 ${x} 150 160`}
      css={svgStyles}
    >
      <g  
        css={svgInnerStyles(rotation)}
        fill={color}
        fillRule="evenodd"
        onClick={togglePlay}
      >
        <path id="path-1" d={shape} />
      </g>
    </svg>
);

const Playbutton = ({
    playing,
    togglePlay
  }) => {
  return (
    <Spring
      from={{ color: "white" }}
      to={{
        color: playing ? "#79D9C9" : "#70C1B3",
        scale: playing ? 2 : 1,
        shape: playing ? PAUSE : PLAY,
        x: playing ? -65 : -147,
        rotation: playing ? "0" : "360"
      }}
      togglePlay={togglePlay}
      children={Shape}
    />
  );
};

export default Playbutton;

