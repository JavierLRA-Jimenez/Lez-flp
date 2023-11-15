import React from 'react';

const Fear = () => {
  // La ruta base de la subpágina
  const basePath = '/Fear'; // Ajusta la ruta base según tu estructura de carpetas

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
        <source src={`${basePath}/src/assets/FearVideo.mp4`} type="video/mp4" />
        {/* Asegúrate de ajustar la ruta del video */}
      </video>
    </div>
  );
}

export default Fear;
