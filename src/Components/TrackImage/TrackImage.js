import React, { useState } from 'react';
import { useMountEffect } from '../../utils';
import {Spring} from 'react-spring/renderprops';
import styled from "styled-components";

const Image = styled.div`
  background: black;
  background-image: url(${props => props.image});
  background-size: cover;
  z-index:-1;
  max-width:320;
  transition: background-image 0.5s ease;
`;

export const TrackImage = ({playing, image}) => {
  let [degree, setDegree] = useState(0);
  
  const tick = () => {
  setInterval(() => setDegree(degree++ ) , 100)
  }

  useMountEffect(tick)

  return (
    <Spring
      to={{
        containerWidth: playing ? "60%" : "100%",
        borderRadius: playing ? "50%" : "0%",
        width: playing ? "100%" : "70%",
        margin: playing ? 0 : 0,
        paddingBottom: playing ? "100%" : "70%",
        rotation: playing ? `${degree}` : "0",
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
            borderRadius:props.borderRadius,
            width:props.width,
            margin:props.margin,
            paddingBottom:props.paddingBottom,   
            transform: `rotate(${props.rotation}deg)`
          }}
        />
        </div>
    )}
    </Spring>
  );
}


