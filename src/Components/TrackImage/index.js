import React, { useState } from 'react';
import { TrackImage } from './TrackImage';
import { useMountEffect } from '../../utils';

export const TrackImageContainer = ({playing, image}) => {
  let [degree, setDegree] = useState(0);
  
  const tick = () => {
  setInterval(() => setDegree(degree++ ) , 100)
  }

  useMountEffect(tick)

   return <TrackImage degree={degree} image={image} playing={playing}/>
}


