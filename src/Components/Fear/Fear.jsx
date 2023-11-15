import React from 'react';
import video from '../../assets/Fear.mp4'

const Fear = () => {
  return (
    <div>
      <video autoPlay muted loop controls>
  <source src={video} type="video/mp4" />
</video>
    </div>
  );
}

export default Fear;
