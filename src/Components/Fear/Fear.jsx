import React from 'react';
import Lez from '../../assets/videolez.mp4'

const Fear = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          className="md:w-full md:h-full object-cover flex"
          src={Lez}
        ></video>
      </div>
    </section>
  );
}

export default Fear;