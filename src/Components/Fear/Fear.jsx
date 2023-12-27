import React from 'react';
import Video from '../../assets/videolez.mp4';

const Fear = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          className="md:w-full md:h-full object-cover hidden md:block"
          src={Video}
        ></video>
        <div className="md:hidden flex justify-center items-center h-screen">
          <video
            autoPlay
            loop
            className="h-full object-cover"
            src={Video}
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Fear;