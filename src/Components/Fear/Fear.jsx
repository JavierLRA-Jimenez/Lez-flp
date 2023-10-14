import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Fear = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '60vh' }}>
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
        <source src="src/assets/V4 - Prueba 5 Mas Densa.mp4" type="video/mp4" />
      </video>

      {showImage && (
        <>
          <Link to="/fear">Ir a la sección de Fear</Link>
          <img
            src="src/assets/FEARLOGO.png"
            alt="Imagen"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[30rem] max-h-[30rem] opacity-0 transition-opacity duration-3000 items-center justify-center"
            style={{ opacity: 1 }}
          />
        </>
      )}
    </div>
  );
}

export default Fear;
