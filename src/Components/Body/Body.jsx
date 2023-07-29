import React from 'react'
import {SlSocialSpotify} from 'react-icons/sl'

//Images
import backredlez from '../../assets/Bluetren.webp'
import frontredlez from '../../assets/frontredlez.webp'
import portalblocklez from '../../assets/Circo.webp'

const Body = () => {
  return (
    <section className='h-[100vh] grid grid-cols-1 md:grid-cols-8' id='body'>
      {/*Informacion Welcome */}
      <div className='md:col-span-5 flex items-center justify-center p-8'>
        <div className='flex flex-col items-center gap-8 justify-center'>
          <h1 className='text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-[#E61D2A]'><span>Lez</span> ~ Music Producer</h1>
          

          <p className='text-[#3647c5] md:items-center md:justify-center text-xl font-bold '>Nobody really knows... Who I am </p>
          

          <div className='flex flex-col md:flex-row items-center gap-8 justify-center '>

            <button className='text-white bg-[#E61D2A] py-2 px-8 rounded-lg text-xl '> <a href='#contact'>Contact</a></button>

            <button className='text-white flex items-center gap-4 py-2 px-8 rounded-lg text-xl '>
              <SlSocialSpotify className='bg-green-400 w-7 h-7  p-3 rounded-full box-content'/> <a href='https://open.spotify.com/playlist/735e4PZh87GSsFIYAnRbXd'>Official Playlist</a>
            </button>
          </div>


        </div>
      </div>


      {/*Imagen Welcome */}
      <div className='w-auto h-25 md:w-auto md:h-auto md:col-span-3 flex justify-center  gap-  md:mt-6 mb-9'>
        <img src={backredlez} className='w-1/3  object-cover opacity-90'/>
        <img src={portalblocklez} className='w-1/3 object-cover opacity-90'/>
        <img src={frontredlez} className='w-1/3 object-cover opacity-90 '/>
      </div>
    </section>
    
  )
}

export default Body