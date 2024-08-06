import React, { useState, useEffect } from 'react';
import infierno from '../../assets/Industrial.jpg';
import mask from '../../assets/maskgrislez.jpg';
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
      className="md:h-[60rem] bg-cover bg-center  bg-fixed "
      style={{ backgroundImage: `url(${mask})` }}
      id="about"
    >
      <h1 className="text-4xl p-8 items-center justify-center flex gap-8 text-white z-99 ">
        BIOGRAFÍA
      </h1>

      <div className="flex flex-col-reverse md:flex-row text-white md:pt-20 pt-10">
        <div className="md:w-[50%] sm:w-full md:order-2 ">
          <div className="md:w-[31rem] md:pl-[10rem] w-[18rem] ml-[4rem]">
            <img src={infierno} alt="Infierno" className="rounded-xl" />
          </div>
        </div>
        <div className="md:w-[50%] sm:w-full md:order-1">
          <div className={`rounded-md md:text-base sm:text-lg sm:justify-items-center pl-3 md:ml-[10rem]`} style={sliderStyle}>
            <p>
              Lez es un talentoso DJ y productor originario de Argentina. Con una trayectoria que
              comenzó en 2013, ha demostrado ser una promesa en la escena electrónica de América
              Latina. Su versatilidad y carisma le han permitido adaptarse a diversos estilos y tendencias
              musicales, consolidándose como un artista capaz de cautivar al público detrás de las
              consolas.
            </p>
            <br />
            <p>
              Con una formación académica en producción musical, Lez ha enriquecido sus
              conocimientos y habilidades, reflejándose en cada una de sus actuaciones y producciones.
              Su talento lo ha llevado a presentarse en una amplia variedad de clubes y ciudades a lo
              largo del país, incluyendo Rosario, Buenos Aires, Santa Fe, entre otras.
            </p>
            <br />
            <p>
              A lo largo de su trayectoria, Lez ha logrado que su música resuene en lugares
              emblemáticos de la escena electrónica, marcando su presencia y dejando una huella
              significativa. Actualmente, está enfocado en sus propias producciones musicales y en su
              crecimiento artístico, siempre buscando innovar y conectar con su audiencia de manera
              auténtica y memorable.
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:w-[50%] sm:w-full md:pl-[7rem] pl-3 pt-5 justify-center items-center lg:w-auto lg:mt-20 lg:pl-0">
        <div className="flex flex-row pt-3 z-50 space-x-7 text-[#f3f3f7]">
          <a href='https://www.instagram.com/lez.flp/'><BsInstagram className="md:text-xl "  /></a>
          <a href='https://open.spotify.com/artist/0rE1EJOUYpklfh9pdZClT8?si=JfitBPKdQOme00NyinWIMA&nd=1'><BsSpotify className="md:text-xl " /></a>
          <a href='https://www.beatport.com/artist/lez/134309'><SiBeatport className="text-xl " /></a>
          <a href='https://www.tiktok.com/@lez.flp'><BsTiktok className="md:text-xl  " /></a>
          <a href='https://www.threads.net/@lez.flp'><SiThreads className="md:text-xl " /></a>
          <a href='https://www.youtube.com/@lez.'><IoLogoYoutube className="text-xl " /></a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
