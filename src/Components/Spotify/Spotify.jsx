import React from 'react'
import party from '../../assets/Metropolitanoo.jpg'

const Spotify = () => {
    
      return (
        <section className='md:h-[45rem] bg-cover bg-center h-scream bg-fixed' style={{ backgroundImage: `url(${party})`}} id='spotify'>
          <div>
            <h2 className='text-4xl p-8 items-center justify-center flex gap-8 text-white'><a href='https://open.spotify.com/artist/0rE1EJOUYpklfh9pdZClT8?si=JfitBPKdQOme00NyinWIMA&nd=1'>
              <span className='text-white'>MÚSICA</span></a></h2>
          </div>

          <div className="flex flex-row flex-wrap md:flex-nowrap  justify-between m-8 pl-10 pr-10">
          <iframe src="https://open.spotify.com/embed/track/4im0pZlNpZXKaUv7zKqbtV?utm_source=generator&theme=0" className=' h-[25rem] w-full md:w-[20rem] p-2 flex items-center justify-center mb-2 md:md-0' ></iframe>
          <iframe src="https://open.spotify.com/embed/track/46vdDHSv8Des2RTyrsb86N?utm_source=generator&theme=0" className=' h-[25rem] w-full md:w-[20rem] p-2 flex items-center justify-center mb-2 md:md-0' ></iframe>
          <iframe src="https://open.spotify.com/embed/track/5eQpKnYGB3gQGJYRY76ceU?utm_source=generator&theme=0" className=' h-[25rem] w-full md:w-[20rem] p-2 flex items-center justify-center mb-2 md:md-0' ></iframe>
          </div>
          
          <div className='flex flex-col md:flex-row items-center justify-center'>
  <button className='relative text-white py-2 px-8 rounded-lg text-x overflow-hidden group focus:outline-none animate-bounce'>
    <span className='z-10 relative'>Spotify</span>
    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400 via-black to-green-400 opacity-0 transform scale-110 origin-top-left transition-transform duration-500 group-hover:opacity-100'></div>
    <div className='absolute top-0 left-0 w-full h-full bg-transparent border-4 border-white opacity-0 transform scale-150 origin-top-left transition-all duration-500'></div>
    <div className='absolute top-0 left-0 w-full h-full bg-transparent border-4 border-white opacity-0 transform scale-150 origin-top-left transition-all duration-500'></div>
    <div className='absolute top-0 left-0 w-full h-full bg-green-400 opacity-0 transform scale-150 origin-top-left transition-all duration-500 group-hover:opacity-50 animate-pulse'></div>
  </button>
</div>
        </section>
      );
    };
    
    export default Spotify;