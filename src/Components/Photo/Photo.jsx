import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import v1 from '../../assets/Vertical/1V.webp'
import v3 from '../../assets/Vertical/3V.webp'
import v4 from '../../assets/Vertical/4V.webp'
import v5 from '../../assets/Vertical/5V.webp'
import v6 from '../../assets/Vertical/6V.webp'
import v12 from '../../assets/Vertical/12v.webp'
import v18 from '../../assets/Vertical/18v.webp'
import v20 from '../../assets/Vertical/20V.webp'
import v22 from '../../assets/Vertical/22v.webp'

import h1 from '../../assets/Horizontal/H1.webp'
import h5 from '../../assets/Horizontal/H5.webp'
import h13 from '../../assets/Horizontal/H13.webp'
import h18 from '../../assets/Horizontal/H18.webp'
import h20 from '../../assets/Horizontal/H20.webp'
import h23 from '../../assets/Horizontal/H23.webp'
import { motion } from "framer-motion";
import { useMedia } from 'react-use';

const Contact = () => {
  const images = [
    v1,
    v3,
    v4,
    v5,
    v6,
    v12,
    v18,
    v20,
    v22,

    h1,
    h5, 
    h13,
    h18,
    h20,
    h23,
  ];

   // Dividir el array de imágenes en dos
   const firstCarouselImages = images.slice(10, 15); // Mostrar 2 imágenes en el primer carrusel
   const secondCarouselImages = images.slice(0, 9); // Mostrar 4 imágenes en el segundo carrusel
 
   // Detectar el tamaño de la pantalla
   const isSmallScreen = useMedia('(max-width: 640px)'); // Cambia el valor según tu breakpoint
 
   // Determinar el número de imágenes a mostrar en cada carrusel
   const firstCarouselSlidesToShow = isSmallScreen ? 1 : 2;
   const secondCarouselSlidesToShow = isSmallScreen ? 2 : 4;
 
   const [sliderStyle, setSliderStyle] = useState({
     width: '80%',
     margin: '0 auto',
     padding: '0 10px',
   });
 
   const imageStyle = {
     width: isSmallScreen ? '70%' : '80%',
     margin: '0 20px',
   };
 
   useEffect(() => {
     const updateSliderStyle = () => {
       const screenWidth = window.innerWidth;
       const screenHeight = window.innerHeight;
 
       if (screenWidth >= 1999 && screenHeight >= 900) {
         setSliderStyle({
           width: '55%',
           margin: '0 auto',
           padding: '0 10px',
         });
       } else {
         setSliderStyle({
           width: '90%',
           margin: '0 auto',
           padding: '0 10px',
         });
       }
     };
 
     // Llamamos a la función una vez para establecer los estilos iniciales
     updateSliderStyle();
 
     // Agregamos el event listener para actualizar los estilos cuando cambie el tamaño de la ventana
     window.addEventListener('resize', updateSliderStyle);
 
     // Limpieza del event listener al desmontar el componente
     return () => window.removeEventListener('resize', updateSliderStyle);
   }, []);
 
   const firstCarouselSettings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: firstCarouselSlidesToShow,
     slidesToScroll: 1,
   };
 
   const secondCarouselSettings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: secondCarouselSlidesToShow,
     slidesToScroll: 1,
   };
 
  
 
   return (
    <motion.div className='md:h-[60rem] lg:h-[65rem] h-[33rem]'>
      <div>
        <h2 className='text-4xl p-8 items-center justify-center flex gap-8 text-white' id='fotos'>
          FOTOS
        </h2>
      </div>
      <div className='lg:pt-20'>
        <Slider {...firstCarouselSettings} style={sliderStyle} className='pt-6 '>
          {firstCarouselImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} style={imageStyle} />
            </div>
          ))}
        </Slider>

        {/* Segundo carrusel */}

        <Slider {...secondCarouselSettings} style={sliderStyle}>
          {secondCarouselImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Image ${index}`} style={imageStyle} />
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Contact;
