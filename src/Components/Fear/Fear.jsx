import React from 'react';
import video from '../../assets/Fear.mp4'

const Fear = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src={video}
          style={{ pointerEvents: 'none' }}
        />
      </div>
      <div className="relative z-10 flex justify-center items-center h-full">
        {/* Contenido de tu sección */}
        <h1 className="text-white text-4xl font-bold">Contenido de tu sección</h1>
      </div>
    </div>
  );
}

export default Fear;