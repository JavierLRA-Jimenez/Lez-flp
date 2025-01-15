import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import v1 from '../../assets/Vertical/Vertical1.jpg'
import v2 from '../../assets/Vertical/Vertical2.jpg'
import v3 from '../../assets/Vertical/Vertical3.jpg'

import h1 from '../../assets/Horizontal/Horizontal1.jpg'
import h2 from '../../assets/Horizontal/Horizontal2.jpg'
import h3 from '../../assets/Horizontal/Horizontal3.jpg'

import { motion } from "framer-motion";
import { useMedia } from 'react-use';

const Contact = () => {
  const images = [
    v1,
    v2,
    v3,
    h1,
    h2,
    h3,
  ];

  // Primer carrusel (primeras 3 imágenes)
  const firstCarouselImages = images.slice(0, 3); // Mostrar 3 imágenes en el carrusel

  // Imágenes estáticas para la parte inferior
  const staticImages = images.slice(3, 6); // Mostrar las últimas 3 imágenes de forma estática

  const isSmallScreen = useMedia('(max-width: 640px)');

  const firstCarouselSlidesToShow = isSmallScreen ? 1 : 2;

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

    updateSliderStyle();
    window.addEventListener('resize', updateSliderStyle);

    return () => window.removeEventListener('resize', updateSliderStyle);
  }, []);

  const firstCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: firstCarouselSlidesToShow,
    slidesToScroll: 1,
  };

  return (
    <motion.div className="md:h-[60rem] lg:h-[65rem] h-auto px-4">
  <div>
    <h2 className="text-4xl p-8 items-center justify-center flex gap-8 text-white" id="fotos">
      FOTOS
    </h2>
  </div>

  {/* Primer Carrusel */}
  <div className="lg:pt-20">
    <Slider
      {...firstCarouselSettings}
      style={{ width: "90%", margin: "0 auto" }}
      className="pt-6"
    >
      {firstCarouselImages.map((image, index) => (
        <div key={index} className="flex justify-center">
          <img
            src={image}
            alt={`Image ${index}`}
            className="rounded-lg shadow-lg w-full max-w-[500px] object-cover"
          />
        </div>
      ))}
    </Slider>
  </div>

  {/* Imágenes Estáticas */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-8 pb-12">
    {staticImages.map((image, index) => (
      <div key={index} className="flex justify-center">
        <img
          src={image}
          alt={`Static Image ${index}`}
          className="rounded-lg shadow-lg w-[50%] max-w-[400px] object-cover"
        />
      </div>
    ))}
  </div>
</motion.div>
  );
};

export default Contact;

