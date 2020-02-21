import React, { useEffect, useState } from 'react';
import { Spring } from "react-spring";
import styled from "styled-components";
import { DEFAULT_IMAGE_URL } from '../constants';

// const Image = styled.img`
//   position: absolute;
//   background: black;
//   z-index: -1;
// `;

const Image = styled.div`
  background: black;
  background-image: url(${props => props.image});
  background-size: cover;
  z-index:-1;
`;




 // background-image: url(${props => props.image});
//  background-size: cover;

const Imagecard = ({
  rotation,
  borderRadius,
  top,
  height,
  margin,
  width,
  containerWidth,
  left,
  image,
  paddingBottom
}) => (
      <div
        style={{
          width:containerWidth,
          display:'flex',
          justifyContent: 'center'
        }}
      >
        <Image
          image={image}
          style={{
            height,
            paddingBottom: `${paddingBottom}%`,
            width,
            borderRadius: `${borderRadius}%`,
            top: `${top}%`,
            margin: `${margin}%`,
            left: `${left}%`,
            transform: `rotate(${rotation}deg)`
          }}
        />
      </div>
  );

export const TrackImage = ({playing, image}) => {
  let [degree, setDegree] = useState(0);

  const tick = () => {
  setInterval(() => setDegree(degree++ ) , 100)
  }

  const useMountEffect = (func) => useEffect(func, [])

  useMountEffect(tick)

    const imageUrlEdit = image ? image.replace("large", "t500x500") : DEFAULT_IMAGE_URL;
    // const imageUrlEdit = DEFAULT_IMAGE_URL;


    return (
      <Spring
        from={{ color: "black" }}
        to={{
          borderRadius: playing ? "50" : "0",
          color: playing ? "#247BA0" : "#70C1B3",
          scale: playing ? 2 : 1,
          width: playing ? "100%" : "80%",
          containerWidth: playing ? "60%" : "100%",
          margin: playing ? 0 : 0,
          height: playing ? "0%" : "80%",
          rotation: playing ? `${degree}` : "0",
          paddingBottom: playing ? "100" : "80"
        }}
        image={imageUrlEdit}
        children={Imagecard} 
        playing={playing}
      />
    );
}


