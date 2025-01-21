import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import v1 from '../../assets/Vertical/Vertical1.jpg';
import v2 from '../../assets/Vertical/Vertical2.jpg';
import v3 from '../../assets/Vertical/Vertical3.jpg';

import h1 from '../../assets/Horizontal/Horizontal1.jpg';
import h2 from '../../assets/Horizontal/Horizontal2.jpg';
import h3 from '../../assets/Horizontal/Horizontal3.jpg';

import { motion } from 'framer-motion';
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

  // Primer carrusel (verticales)
  const firstCarouselImages = images.slice(0, 3); 

  // Imágenes horizontales (segundo carrusel o estáticas)
  const horizontalImages = images.slice(3, 6); 

  const isSmallScreen = useMedia('(max-width: 640px)');

  const firstCarouselSlidesToShow = isSmallScreen ? 1 : 2;

  const firstCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: firstCarouselSlidesToShow,
    slidesToScroll: 1,
  };

  const horizontalCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <motion.div className="md:h-[60rem] lg:h-[65rem] h-auto px-4">
      <div>
        <h2 className="text-4xl p-8 items-center justify-center flex gap-8 text-white" id="fotos">
          FOTOS
        </h2>
      </div>

      {/* Primer Carrusel (Verticales) */}
      <div className="lg:pt-20">
        <Slider
          {...firstCarouselSettings}
          style={{ width: '90%', margin: '0 auto' }}
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

      {/* Segundo Carrusel o Imágenes Estáticas */}
      <div className="pt-8 pb-12">
        {isSmallScreen ? (
          <Slider {...horizontalCarouselSettings}
          style={{ width: '90%', margin: '0 auto' }}
           className="pt-6">
            {horizontalImages.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Horizontal Image ${index}`}
                  className="rounded-lg shadow-lg w-full max-w-[500px] object-cover"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {horizontalImages.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Static Horizontal Image ${index}`}
                  className="rounded-lg shadow-lg w-[50%] max-w-[400px] object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
