import React from 'react';
import {Spring} from 'react-spring/renderprops';
import styled from "styled-components";

const Image = styled.div`
  background: black;
  background-image: url(${props => props.image});
  background-size: cover;
  z-index:-1;
  max-width:320;
`;

export const TrackImage = ({degree, playing, image}) => {

    return (
      <Spring
        to={{
          borderRadius: playing ? "50" : "0",
          scale: playing ? 2 : 1,
          width: playing ? "100%" : "80%",
          containerWidth: playing ? "60%" : "100%",
          margin: playing ? 0 : 0,
          height: playing ? "0%" : "80%",
          rotation: playing ? `${degree}` : "0",
          paddingBottom: playing ? "100" : "80"
        }}
        image={image}
        playing={playing}
      >
      {props => ( 
          <div
          style={{
            width:props.containerWidth,
            display:'flex',
            justifyContent: 'center'
          }}
          >
          <Image
            image={image}
            style={{
              height:props.height,
              paddingBottom: `${props.paddingBottom}%`,
              width:props.width,
              borderRadius: `${props.borderRadius}%`,
              top: `${props.top}%`,
              margin: `${props.margin}%`,
              left: `${props.left}%`,
              transform: `rotate(${props.rotation}deg)`
            }}
          />
          </div>
      )}
      </Spring>
    );
}


