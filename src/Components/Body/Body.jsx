import React from 'react'
import {SlSocialSpotify} from 'react-icons/sl'

//Images
import backredlez from '../../assets/backredlez.jpg'
import frontredlez from '../../assets/frontredlez.jpg'
import portalblocklez from '../../assets/portalblocklez.jpg'

const Body = () => {
  return (
    <section className='h-[100vh] grid grid-cols-1 md:grid-cols-8'>
      {/*Informacion Welcome */}
      <div className='md:col-span-5 flex items-center justify-center p-8'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'><span>Lez</span> ~ Music Producer</h1>
          

          <p className='text-gray-400 text-md leading-8'>My sets are filled with diversity and eclecticism, blending different genres and musical styles to create a unique sonic experience.</p>
          

          <div className='flex flex-col md:flex-row items-center gap-8 justify-center'>
            <button className='text-white bg-purple-600 py-2 px-8 rounded-lg text-xl '>Contact </button>

            <button className='text-white flex items-center gap-4 py-2 px-8 rounded-lg text-xl '>
              <SlSocialSpotify className='bg-green-400 w-7 h-7  p-3 rounded-full box-content'/>last Release
            </button>
          </div>


        </div>
      </div>


      {/*Imagen Welcome */}
      <div className='w-full h-9 md:w-auto md:h-auto md:col-span-3 flex justify-center  gap-3  md:mt-6 mb-9'>
        <img src={backredlez} className='w-1/3  object-cover opacity-90'/>
        <img src={portalblocklez} className='w-1/3 object-cover opacity-90'/>
        <img src={frontredlez} className='w-1/3 object-cover opacity-90 '/>
      </div>
    </section>
    
  )
}

export default Body