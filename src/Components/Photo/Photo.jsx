import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import infierno from '../../assets/industrial.jpg';
import mask from '../../assets/maskgrislez.jpg';
import hola from '../../assets/Outdoor.jpg';
import circo from '../../assets/Circo.webp';
import bluetren from '../../assets/Bluetren.webp';
import fliplez from '../../assets/Fliplez.webp';
import redlez from '../../assets/frontredlez.webp';

const Contact = () => {
  const images = [
    fliplez,
    mask,
    hola,
    circo,
    bluetren,
    infierno,
    redlez,
  ];

  // Dividir el array de imágenes en dos
  const firstCarouselImages = images.slice(0, 3); // Mostrar 2 imágenes en el primer carrusel
  const secondCarouselImages = images.slice(0,6); // Mostrar 4 imágenes en el segundo carrusel

  const firstCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const secondCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const sliderStyle = {
    width: '80%',
    margin: '0 auto',
  };

  const imageStyle = {
    width: '80%',
  };

  return (
    <div className='h-[60rem]'>
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
    </div>
  );
};

export default Contact;
