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
        <div className="md:w-[50%] sm:w-full md:order-2">
          <div className="md:w-[31rem] md:pl-[10rem] w-[18rem] pl-3">
            <img src={infierno} alt="Infierno" className="rounded-xl" />
          </div>
        </div>
        <div className="md:w-[50%] sm:w-full md:order-1">
        <div className={`rounded-md md:text-base sm:text-lg sm:justify-items-center pl-3 md:ml-[10rem]`} style={sliderStyle}>
            <p>
            Lez es originario de Rosario, Santa Fe, Argentina. Con una trayectoria que inició en el año
2013 y siendo considerado como una promesa en América Latina, Lez ha demostrado ser
un DJ y productor versátil capaz de adaptarse a diferentes estilos y tendencias, destacando
rápidamente por su talento y carisma detrás de las consolas. Al mismo tiempo, se formó
académicamente en el Instituto Cetear, lo que le permitió ampliar sus conocimientos y
habilidades en la producción musical. 
            </p>
            <br />
            <p>
            Su talento y habilidades le han permitido presentarse en distintos clubs y eventos de la
escena nocturna de Rosario, como Coyote Iglú, Barracao, Complejo Awas, Costello,
Madame, Metropolitano Rosario, entre otros. Durante su carrera ha compartido cabina con
grandes artistas de la escena electrónica, incluyendo a Nacho Scoppa, Zone7, Cadelago,
Caitto, FRANCO BA, entre otros.
            </p>
            <br />
            <p>
            Su música ha resonado en diversos lugares en todo el país. Sin embargo, lo más destacado
es que sus canciones han sonado en reconocidos clubes de Buenos Aires, como Club 69,
Crobar y Rio Electronic Music, lugares emblemáticos que han sido testigos del impacto de
su música en la escena electrónica local.
            </p>
            <br />
            <p>
            Actualmente, Lez está enfocado en sus propias producciones musicales y en su crecimiento
artístico. Lo que ha llevado a lograr colaboraciones con otros artistas como Jean Bacarreza
(conocido hoy en día como Bakka), Zone7, SUPER (ARG), Juan (AR) y otros talentos
destacados de la escena electrónica.
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:w-[50%] sm:w-full md:pl-[7rem] pl-3 pt-5 lg:justify-center lg:items-center lg:w-auto lg:mt-20 lg:pl-0">
        <div className="flex flex-row pt-3 z-50 space-x-7 text-[#f3f3f7]">
        <a href='https://www.instagram.com/lez.flp/'><BsInstagram className="md:text-xl " /></a>
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
