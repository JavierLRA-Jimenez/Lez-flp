import React from 'react';
import infierno from '../../assets/Outdoor.jpg';
import { motion } from "framer-motion";

const Body = () => {
  return (
    <motion.div className='flex h-[100vh] bg-cover bg-center h-scream bg-fixed' style={{ backgroundImage: `url(${infierno})` }} id='body'>
      

      {/* Información */}
      <div className='md:w-1/2 flex align-center items-center justify-center p-8 w-full '>
        <div className='flex flex-col items-center gap-8 justify-center'>
          <h1 className=' text-8xl md:text-8xl font-bold text-transparent bg-clip-text bg-[#E61D2A] text-center'>
            LEZ
          </h1>

          <p className='text-white items-center justify-center text-md '>
            NOBODY REALLY KNOWS... WHO I AM 
          </p>

        </div>
      </div>
    </motion.div>
  );
};

export default Body;
