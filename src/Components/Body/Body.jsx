import React from 'react';
import { SlSocialSpotify } from 'react-icons/sl';
import infierno from '../../assets/Outdoor.jpg';

const Body = () => {
  return (
    <section className='flex h-[100vh] bg-cover bg-center h-scream bg-fixed' style={{ backgroundImage: `url(${infierno})` }} id='body'>
      

      {/* Información */}
      <div className='w-1/2 flex flex-col items-center justify-center p-8'>
        <div className='flex flex-col items-center gap-8 justify-center'>
          <h1 className=' text-4xl md:text-9xl  font-bold text-transparent bg-clip-text bg-[#E61D2A] text-center'>
            <span>LEZ</span> 
          </h1>

          <p className='text-white md:items-center md:justify-center text-md '>
            NADIE SABE QUIEN REALMENTE SOY
          </p>

        </div>
      </div>
    </section>
  );
};

export default Body;
