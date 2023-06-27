import React from 'react'
import {SlSocialSpotify} from 'react-icons/sl'

const Spotify = () => {
    
      return (
        <section className='md:h-[35rem]'>
          <div>
            <h1 className='text-7xl font-bold p-8 items-center justify-center flex gap-8 text-white'><SlSocialSpotify className='bg-green-500 w-7 h-7  p-3 rounded-full box-content'/><a href='https://open.spotify.com/artist/0rE1EJOUYpklfh9pdZClT8?si=JfitBPKdQOme00NyinWIMA&nd=1'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-gray-300'>Spotify</span></a></h1>
          </div>

          <div className="flex flex-row flex-wrap md:flex-nowrap  p-4 justify-between ">
          <iframe src="https://open.spotify.com/embed/track/4im0pZlNpZXKaUv7zKqbtV?utm_source=generator&theme=0" className=' h-[16rem] w-full md:w-1/3 p-2 flex items-center justify-center mb-2 md:md-0' ></iframe>
          <iframe src="https://open.spotify.com/embed/track/46vdDHSv8Des2RTyrsb86N?utm_source=generator&theme=0" className=' h-[16rem] w-full md:w-1/3 p-2 flex items-center justify-center mb-2 md:md-0' ></iframe>
          <iframe src="https://open.spotify.com/embed/track/5eQpKnYGB3gQGJYRY76ceU?utm_source=generator&theme=0" className=' h-[16rem] w-full md:w-1/3 p-2 flex items-center justify-center mb-2 md:md-0' ></iframe>
          </div>
        </section>
      );
    };
    
    export default Spotify;