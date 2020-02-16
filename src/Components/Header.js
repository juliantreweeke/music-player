import React, { useEffect, useState } from 'react';
import { Spring } from "react-spring";
import styled from "styled-components";
import { DEFAULT_IMAGE_URL } from '../../src/constants';

const Frame = styled.div`
  position: absolute;
  background: black;
  z-index: -1;
  background-image: url(${props => props.image});
  background-size: cover;
`;

const Imagecard = ({
  rotation,
  height,
  borderRadius,
  top,
  margin,
  width,
  left,
  image
}) => (
    <div>
      <Frame
        image={image}
        style={{
          height: `${height}%`,
          width: `${width}%`,
          borderRadius: `${borderRadius}%`,
          top: `${top}%`,
          margin: `${margin}%`,
          left: `${left}%`,
          transform: `rotate(${rotation}deg)`
        }}
      />
    </div>
  );

export const Header = ({playing, image}) => {
  let [degree, setDegree] = useState(0);

  const tick = () => {
  setInterval(() => setDegree(degree++ ) , 100)
  }

  const useMountEffect = (func) => useEffect(func, [])

  useMountEffect(tick)

    const imageUrlEdit = image ? image.replace("large", "t500x500") : DEFAULT_IMAGE_URL;

    return (
      <Spring
        from={{ color: "black" }}
        to={{
          top: playing ? "30" : "0",
          left: playing ? "17" : "0",
          borderRadius: playing ? "100" : "0",
          color: playing ? "#247BA0" : "#70C1B3",
          scale: playing ? 2 : 1,
          width: playing ? "45" : "80",
          margin: playing ? 0 : 0,
          height: playing ? "45" : "80",
          rotation: playing ? `${degree}` : "0"
        }}
        image={imageUrlEdit}
        children={Imagecard} 
        playing={playing}
      />
    );
}


