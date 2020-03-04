import React from "react";
import {Spring} from 'react-spring/renderprops';
import styled from 'styled-components/macro'

const PAUSE = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26";
const PLAY = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28";

const Container = styled.div`
  position: absolute;
  height:140%;
`

const PlaybuttonSVG = styled.svg`
  width:100%;
  height:100%;
  z-index:10
`

const svgInnerStyles = (rotation) => `
          position:absolute;
          cursor:pointer;
          zIndex:5;
          transform:rotate(${rotation}deg);
          &:hover {
            fill: white;
          }
          transition:fill 0.5s ease;
        `

const Playbutton = ({
    playing,
    togglePlay
  }) => {  
  return (
    <Spring
      to={{
          color: '#79D9C9',
          shape: playing ? PAUSE : PLAY,
          x: playing ? -65 : -187,
          rotation: playing ? 0 : 360
      }}
      togglePlay={togglePlay} 
    > 
    {props => ( 
      <Container>
        <PlaybuttonSVG viewBox={`-58 ${props.x} 150 160`}>
          <g  
          css={svgInnerStyles(props.rotation)}
          fill={props.color}
          fillRule="evenodd"  
          onClick={togglePlay}
          >
            <path id="path-1" d={props.shape} />
          </g>
        </PlaybuttonSVG>
      </Container>
    )}
    </Spring>
  );
};

export default Playbutton;



   