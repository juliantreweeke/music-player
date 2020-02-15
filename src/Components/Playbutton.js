import React from "react";
import { Spring } from "react-spring";

const PAUSE = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26";
const PLAY = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28";

const Shape = ({ rotation, togglePlay, color, shape, y, x }) => (
  <div>
    <svg version="1.1" viewBox={`${y} ${x} 150 160`}>
    {/* <svg version="1.1" viewBox={`${y} ${x} 150 160`}> */}

      <g
        style={{
          position: "absolute",
          cursor: "pointer",
          zIndex: "5",
          transform: `rotate(${rotation}deg)`
        }}
        fill={color}
        fillRule="evenodd"
        onClick={togglePlay}
      >
        <path id="path-1" d={shape} />
      </g>
    </svg>
  </div>
);

const Playbutton = ({
    playing,
    togglePlay
  }) => {
  return (
    <Spring
      from={{ color: "black" }}
      to={{
        color: playing ? "#79D9C9" : "#70C1B3",
        scale: playing ? 2 : 1,
        shape: playing ? PAUSE : PLAY,
        y: playing ? -58 : -110,
        x: playing ? -115 : -87,
        rotation: playing ? "0" : "360"
      }}
      togglePlay={togglePlay}
      children={Shape}
    />
  );
};

export default Playbutton;