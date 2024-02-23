import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import v2 from '../../assets/Vertical/2V.webp'
import v4 from '../../assets/Vertical/4V.webp'
import v6 from '../../assets/Vertical/6V.webp'
import v8 from '../../assets/Vertical/8V.webp'
import v12 from '../../assets/Vertical/12v.webp'
import v13 from '../../assets/Vertical/13v.webp'
import v15 from '../../assets/Vertical/15v.webp'
import v18 from '../../assets/Vertical/18v.webp'
import v19 from '../../assets/Vertical/19v.webp'
import v20 from '../../assets/Vertical/20V.webp'
import v21 from '../../assets/Vertical/21v.webp'
import v22 from '../../assets/Vertical/22v.webp'
import v24 from '../../assets/Vertical/24V.webp'

import h1 from '../../assets/Horizontal/H1.webp'
import h2 from '../../assets/Horizontal/H2.webp'
import h3 from '../../assets/Horizontal/H3.webp'
import h4 from '../../assets/Horizontal/H4.webp'
import h5 from '../../assets/Horizontal/H5.webp'
import h6 from '../../assets/Horizontal/H6.webp'
import h7 from '../../assets/Horizontal/H7.webp'
import h9 from '../../assets/Horizontal/H9.webp'
import h10 from '../../assets/Horizontal/H10.webp'
import h11 from '../../assets/Horizontal/H11.webp'
import h12 from '../../assets/Horizontal/H12.webp'
import h13 from '../../assets/Horizontal/H13.webp'
import h14 from '../../assets/Horizontal/H14.webp'
import h15 from '../../assets/Horizontal/H15.webp'
import h18 from '../../assets/Horizontal/H18.webp'
import h19 from '../../assets/Horizontal/H19.webp'
import h20 from '../../assets/Horizontal/H20.webp'
import h21 from '../../assets/Horizontal/H21.webp'
import h22 from '../../assets/Horizontal/H22.webp'
import h23 from '../../assets/Horizontal/H23.webp'
import { motion } from "framer-motion";
import { useMedia } from 'react-use';

const Contact = () => {
  const images = [
    v2,
    v4,
    v6,
    v8, 
    v12,
    v13,
    v15,
    v18,
    v19,
    v20,
    v21,
    v22,
    v24,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7, 
    h9, 
    h10, 
    h11, 
    h12,
    h13,
    h14,
    h15,
    h18,
    h19,
    h20,
    h21,
    h22,
    h23,
  ];

   // Dividir el array de imágenes en dos
   const firstCarouselImages = images.slice(13, 32); // Mostrar 2 imágenes en el primer carrusel
   const secondCarouselImages = images.slice(0, 12); // Mostrar 4 imágenes en el segundo carrusel
 
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
