import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const totalImages = 25;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Función para cambiar el índice y hacer el slider automático
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 1500); // Cambiar de imagen cada 1.5 segundos

    // Limpieza del intervalo cuando el componente se desmonta
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className='relative w-full h-[60vh] overflow-hidden'>
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
      <div className='relative flex items-center justify-center w-full h-full '>
        <div className='relative w-[250px] h-[290px]'>
          {Array.from({ length: totalImages }).map((_, index) => (
            <img
              key={index}
              src='src/assets/dorso.png'
              alt={`Imagen ${index + 1}`}
              className={` absolute rounded-lg h-80 w-auto transition-transform duration-1000 transform ${
                index === currentIndex ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{ zIndex: index === currentIndex ? 1 : 0 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;

