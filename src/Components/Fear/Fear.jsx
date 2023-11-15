import React from 'react';
import video from '../../assets/Fear.mp4'

const Fear = () => {
  return (
    <div>
      <video src={video} type="video/mp4" controls autoplay />
    </div>
  );
}

export default Fear;
