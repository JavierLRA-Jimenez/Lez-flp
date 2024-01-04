import React from 'react';
import { motion } from "framer-motion";

import bluelightlez from '../../assets/Uruguayy.jpg';

const Youtube = () => {
  return (
    <motion.div className=' md:h-[50rem] bg-cover bg-center bg-fixed' style={{ backgroundImage: `url(${bluelightlez})` }} id='youtube'>
      <div>
        <h2 className='text-4xl p-8 items-center justify-center flex text-white'>VIDEOS</h2>
      </div>
      <div className="flex flex-col md:flex-row md:mt-10 items-center relative z-10 md:pl-10">
        <div className="md:w-[45rem] p-4">
          <iframe width="100%" height="250"  src="https://www.youtube.com/embed/dQdn5mCUHPs?si=hkKcuGMiA0sGevN-&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='md:h-[500px]'></iframe>
        </div>
        <div className="md:w-[45rem] p-4">
          <iframe width="100%" height="250"  src="https://www.youtube.com/embed/hKgbsGxI31g?si=9-Cs6p3vAjp9WwsD" allowfullscreen className='md:h-[500px]'></iframe>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center md:pt-10'>
        <button className='relative text-white py-2 px-8 rounded-lg text-x overflow-hidden group hidden'>
          <span className='z-10 relative'><a href='https://www.youtube.com/@lez.'>YouTube</a></span>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 via-black to-red-500 opacity-0 transform scale-110 origin-top-left transition-transform duration-500 group-hover:opacity-100'></div>
          <div className='absolute top-0 left-0 w-full h-full bg-transparent border-4 border-white opacity-0 transform scale-150 origin-top-left transition-all duration-500'></div>
          <div className='absolute top-0 left-0 w-full h-full bg-transparent border-4 border-white opacity-0 transform scale-150 origin-top-left transition-all duration-500'></div>
          <div className='absolute top-0 left-0 w-full h-full bg-red-500 opacity-0 transform scale-150 origin-top-left transition-all duration-500 group-hover:opacity-50 animate-pulse'></div>
        </button>
      </div>
    </motion.div>
  );
}

export default Youtube;
