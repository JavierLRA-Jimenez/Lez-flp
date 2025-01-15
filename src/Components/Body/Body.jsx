import React from 'react';
import infierno from '../../assets/FrontImg.jpg';
import logored from '../../assets/RedLogo.png';
import { motion } from "framer-motion";

const Body = () => {
  return (
    <motion.div className='flex h-[100vh] bg-cover bg-center h-scream bg-fixed' style={{ backgroundImage: `url(${infierno})` }} id='body'>
      {/* Información */}
      <div className=' flex flex-col md:flex-row items-center justify-around p-8 w-full mb-40 gap-4'>
        {/* Imagen del logo */}
        <div className='md:w-1/2 flex-shrink-0 hidden md:block'>
          <img src={logored} alt="Logo" className=' h-64 w-64' />
        </div>

        {/* Frase */}
        <p className='md:w-1/2 text-white text-md text-center md:text-end mr-0 md:mr-10 font-bloodborne'>
  Nobody really knows... Who I am
</p>
      </div>
    </motion.div>
  );
};

export default Body;