import React from "react";
import {useSpring, animated} from 'react-spring'
import styled from 'styled-components/macro'

const PAUSE = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26";
const PLAY = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28";

const PlaybuttonSVG = styled(animated.svg)`
  width:100%;
  height:140%;
  position:absolute;
  z-index:5
`

const svgInnerStyles = (rotation) => `
          position:absolute;
          cursor:pointer;
          zIndex:5;
          transform:rotate(${rotation}deg);`

const Playbutton = ({
    playing,
    togglePlay
  }) => {  
    const props = useSpring({
        to:{
            color: playing ? "#79D9C9" : "#70C1B3",
            scale: playing ? 2 : 1,
            shape: playing ? PAUSE : PLAY,
            x: playing ? -65 : -147,
            rotation: playing ? 0 : 360
        }   
    })

  return (
    <PlaybuttonSVG viewBox={`-58 ${props.x.value} 150 160`}>
        <animated.g  
        css={svgInnerStyles(props.rotation.value)}
        fill={props.color}
        fillRule="evenodd"  
        onClick={togglePlay}
      >
        <animated.path id="path-1" d={props.shape} />
      </animated.g>
    </PlaybuttonSVG>
   
  );
};

export default Playbutton;



