import React, { useEffect, useState } from 'react';
import {Spring} from 'react-spring/renderprops';
import styled from "styled-components";
import { DEFAULT_IMAGE_URL } from '../constants';

const Image = styled.div`
  background: black;
  background-image: url(${props => props.image});
  background-size: cover;
  z-index:-1;
`;

export const TrackImage = ({playing, image}) => {
  let [degree, setDegree] = useState(0);

  const tick = () => {
  setInterval(() => setDegree(degree++ ) , 100)
  }

  const useMountEffect = (func) => useEffect(func, [])

  useMountEffect(tick)

    const imageUrlEdit = image ? image.replace("large", "t500x500") : DEFAULT_IMAGE_URL;

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
        image={imageUrlEdit}
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


