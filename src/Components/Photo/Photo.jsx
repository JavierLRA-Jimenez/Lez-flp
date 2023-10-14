import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import v1 from '../../assets/Vertical/1V.webp'
import v2 from '../../assets/Vertical/2V.webp'
import v4 from '../../assets/Vertical/4V.webp'
import v5 from '../../assets/Vertical/5V.webp'
import v6 from '../../assets/Vertical/6V.webp'
import v7 from '../../assets/Vertical/7V.webp'
import v8 from '../../assets/Vertical/8V.webp'
import v9 from '../../assets/Vertical/9V.webp'
import v10 from '../../assets/Vertical/10V.webp'
import v11 from '../../assets/Vertical/11V.webp'
import v12 from '../../assets/Vertical/12V.webp'
import v13 from '../../assets/Vertical/13V.webp'
import v14 from '../../assets/Vertical/14V.webp'
import v15 from '../../assets/Vertical/15V.webp'
import v16 from '../../assets/Vertical/16V.webp'
import v17 from '../../assets/Vertical/17V.webp'
import v18 from '../../assets/Vertical/18V.webp'
import v19 from '../../assets/Vertical/19V.webp'
import v20 from '../../assets/Vertical/20V.webp'
import v21 from '../../assets/Vertical/21V.webp'
import v22 from '../../assets/Vertical/22V.webp'
import v23 from '../../assets/Vertical/23V.webp'
import v24 from '../../assets/Vertical/24V.webp'

import h1 from '../../assets/Horizontal/H1.jpg'
import h2 from '../../assets/Horizontal/H2.png'
import h3 from '../../assets/Horizontal/H3.jpg'
import h4 from '../../assets/Horizontal/H4.png'
import h5 from '../../assets/Horizontal/H5.jpg'
import h6 from '../../assets/Horizontal/H6.png'
import h7 from '../../assets/Horizontal/H7.jpg'
import h8 from '../../assets/Horizontal/H8.png'
import h9 from '../../assets/Horizontal/H9.jpg'
import h10 from '../../assets/Horizontal/H10.jpg'
import h11 from '../../assets/Horizontal/H11.jpg'
import h12 from '../../assets/Horizontal/H12.jpg'
import h13 from '../../assets/Horizontal/H13.jpg'
import h14 from '../../assets/Horizontal/H14.jpg'
import h15 from '../../assets/Horizontal/H15.jpg'
import h16 from '../../assets/Horizontal/H16.jpg'
import h17 from '../../assets/Horizontal/H17.jpg'
import h18 from '../../assets/Horizontal/H18.jpg'
import h19 from '../../assets/Horizontal/H19.jpg'
import h20 from '../../assets/Horizontal/H20.jpg'
import h21 from '../../assets/Horizontal/H21.jpg'
import h22 from '../../assets/Horizontal/H22.jpg'
import h23 from '../../assets/Horizontal/H23.jpg'
import { motion } from "framer-motion";
import { useMediaQuery } from '@react-hook/media-query';

const Contact = () => {
  const images = [
    v1,
    v2,
    v4,
    v5,
    v6,
    v7,
    v8, 
    v9, 
    v10, 
    v11, 
    v12,
    v13,
    v14,
    v15,
    v16,
    v17,
    v18,
    v19,
    v20,
    v21,
    v22,
    v23,
    v24,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8, 
    h9, 
    h10, 
    h11, 
    h12,
    h13,
    h14,
    h15,
    h16,
    h17,
    h18,
    h19,
    h20,
    h21,
    h22,
    h23,
  ];

   // Dividir el array de imágenes en dos
   const firstCarouselImages = images.slice(24, 45); // Mostrar 2 imágenes en el primer carrusel
   const secondCarouselImages = images.slice(0, 23); // Mostrar 4 imágenes en el segundo carrusel
 
   // Detectar el tamaño de la pantalla
   const isSmallScreen = useMediaQuery('(max-width: 640px)'); // Cambia el valor según tu breakpoint
 
   // Determinar el número de imágenes a mostrar en cada carrusel
   const firstCarouselSlidesToShow = isSmallScreen ? 1 : 2;
   const secondCarouselSlidesToShow = isSmallScreen ? 2 : 4;
 
   const firstCarouselSettings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: firstCarouselSlidesToShow,
     slidesToScroll: 1,
   };
 
   const secondCarouselSettings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: secondCarouselSlidesToShow,
     slidesToScroll: 1,
   };
 
   const sliderStyle = {
    width: '80%',
    margin: '0 auto',
    padding: '0 20px', // Agregar un relleno para compensar el margen negativo
  };
  
  const imageStyle = {
    width: '80%',
    margin: '0 24px', // Aplicar margen negativo a las imágenes
  };
 
   return (
     <motion.div className='md:h-[60rem]'>
       <div>
         <h2 className='text-4xl p-8 items-center justify-center flex gap-8 text-white' id='fotos'>FOTOS</h2>
       </div>
       <Slider {...firstCarouselSettings} style={sliderStyle} className='pt-6'>
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
     </motion.div>
   );
 };
 
 export default Contact;
