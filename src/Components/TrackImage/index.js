import React, { useState } from 'react';
import { TrackImage } from './TrackImage';
import { useMountEffect } from '../../utils';
import { DEFAULT_IMAGE_URL } from '../../constants';

export const TrackImageContainer = ({playing, image}) => {
  let [degree, setDegree] = useState(0);
  
  const tick = () => {
  setInterval(() => setDegree(degree++ ) , 100)
  }

  useMountEffect(tick)

  const imageUrlEdit = image ? image.replace("large", "t500x500") : DEFAULT_IMAGE_URL;

   return <TrackImage degree={degree} image={imageUrlEdit} playing={playing}/>
}


