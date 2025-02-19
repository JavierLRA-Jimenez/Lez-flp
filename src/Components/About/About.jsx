import React, { useState, useEffect } from 'react';
import mask from '../../assets/Vertical/Vertical2.jpg';
import { BsInstagram } from 'react-icons/bs';
import { BsTiktok } from 'react-icons/bs';
import { BsSpotify } from 'react-icons/bs';
import { SiThreads } from 'react-icons/si';
import { SiBeatport } from 'react-icons/si';
import { IoLogoYoutube } from 'react-icons/io';
import { motion } from 'framer-motion';

const About = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth >= 1999 && window.innerHeight >= 900
  );

  const [sliderStyle, setSliderStyle] = useState({
    width: '90%',
    margin: '0 auto',
    padding: '0 10px',
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      if (screenWidth >= 1999 && screenHeight >= 900) {
        setSliderStyle({
          marginLeft: '40rem',
          margin: '0 auto',
          padding: '0 40px', // Cambiado a 40px para pantallas grandes
        });
      } else {
        setSliderStyle({
          marginLeft: '1rem',
          margin: '0 auto',
          padding: '0 10px',
        });
      }

      setIsLargeScreen(screenWidth >= 1999 && screenHeight >= 900);
    };

    // Llamamos a la función una vez para establecer los estilos iniciales
    handleResize();

    // Agregamos el event listener para actualizar los estilos cuando cambie el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpieza del event listener al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <motion.div
  className="relative min-h-screen flex flex-col items-center justify-center text-white"
  id="about"
>
  {/* Imagen de fondo con opacidad */}
  <div
    className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed grayscale opacity-10"
    style={{
      backgroundImage: `url(${mask})`,
      zIndex: -1,
    }}
  />
  <h1 className="text-4xl p-8 flex justify-center text-white z-99">
    BIOGRAFÍA
  </h1>

  <div className="w-full max-w-[1090px] px-5 text-center">
    <p>
      <span className='text-red-600'>Soy Lez</span>, nacido en Rosario, Argentina.
    </p>
    <br />
    <p>
      Desde hace más de una década, <span className='text-red-600'>he dedicado mi vida a la música</span>, colaborando
      con artistas que representan lo mejor de la escena nacional y ganándome el respeto
      de figuras internacionales que inspiran y marcan tendencia a nivel global. <span className='text-red-600'>Este
      recorrido me ha permitido consolidar una identidad artística, siempre en
      constante evolución y con el compromiso de entregar lo mejor de mí en cada
      proyecto</span>.
    </p>
    <br />
    <p>
    <span className='text-red-600'>Mi visión va más allá de la simple creación de música</span>. Aspiro a dejar una huella
      que perdure, trascienda generaciones e impacte a quienes se encuentren con mi
      obra. <span className='text-red-600'>Para mí, la música es mucho más que sonidos: es emoción, es conexión,
      es un legado</span>. Cada track que creo tiene una esencia única, una personalidad, una
      "alma" que lo define. <span className='text-red-600'>Quiero que mi música sea un vehículo para transmitir
      emociones genuinas y crear experiencias inolvidables</span>.
    </p>
    <br />
    <p>
      A lo largo de mi carrera, siempre he buscado ir más allá, <span className='text-red-600'>romper los límites y
      desafiar lo establecido</span>. Mi enfoque no solo está en el sonido, sino también en
      cómo presentarlo. <span className='text-red-600'>Es por eso que en cada show cuido cada detalle para ofrecer
      una experiencia integral que une música, estética y emoción</span>.
    </p>
    <br />
    <p>
      Mi estilo en el escenario es una extensión de mi visión artística. <span className='text-red-600'>Utilizo un atuendo
      distintivo que genera curiosidad e intriga, algo que va más allá de lo visual y
      refuerza la narrativa que quiero transmitir</span>. Mi intención es capturar la atención
      del público desde el primer momento y guiarlos a través de un viaje musical y
      sensorial que se quede con ellos mucho después de que termine el espectáculo.
    </p>
    <br />
    <p>
      La música no es solo mi pasión, <span className='text-red-600'>es mi propósito</span>. Es mi forma de conectar con el
      mundo, dejar un mensaje y construir algo que sea recordado y valorado con el
      tiempo. Cada paso que doy está dirigido hacia ese objetivo: <span className='text-red-600'>trascender</span>.
    </p>
  </div>

  <div className="flex space-x-7 pt-5 mt-5 mb-6">
    <a href="https://www.instagram.com/lez.flp/"><BsInstagram className="text-xl" /></a>
    <a href="https://open.spotify.com/artist/0rE1EJOUYpklfh9pdZClT8?si=JfitBPKdQOme00NyinWIMA&nd=1"><BsSpotify className="text-xl" /></a>
    <a href="https://www.beatport.com/artist/lez/134309"><SiBeatport className="text-xl" /></a>
    <a href="https://www.tiktok.com/@lez.flp"><BsTiktok className="text-xl" /></a>
    <a href="https://www.threads.net/@lez.flp"><SiThreads className="text-xl" /></a>
    <a href="https://www.youtube.com/@lez_flp"><IoLogoYoutube className="text-xl" /></a>
  </div>
</motion.div>
  );
};

export default About;
