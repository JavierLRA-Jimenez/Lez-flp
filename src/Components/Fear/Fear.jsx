import React from 'react';
import video from '../../assets/Fear.mp4'

const Fear = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          className="md:w-full md:h-full object-cover flex"
          src={video}
          style={{ pointerEvents: 'none' }}
        />
      </div>
    </div>
  );
}

export default Fear;