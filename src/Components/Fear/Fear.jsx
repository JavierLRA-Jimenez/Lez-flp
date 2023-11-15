import React from 'react';
import Fear from '../../assets/Fear.mp4'// Importa el video

const NewSection = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source src={Fear} type="video/mp4" /> {/* Usa el video importado */}
      </video>
    </div>
  );
}

export default Fear;
