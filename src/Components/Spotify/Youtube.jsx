import React from 'react'
import {IoLogoYoutube} from 'react-icons/io'


import bluelightlez from '../../assets/leztapa.png'
const Youtube = () => {
  return (
    <section className='sm:h-[35rem] md:h-[45rem] bg-cover bg-center'style={{ backgroundImage: `url(${bluelightlez})` }} >

        <div className='text-7xl font-bold p-8 items-center justify-center flex gap-8 text-white'>
          <IoLogoYoutube className='w-7 h-7 p-3 rounded-full box-content bg-red-500' />
          <h1 className='text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-300'>Youtube</h1>
        </div>

        <div className="flex  justify-center items-center mt-1">
          <iframe className=' flex h-[22rem] md:h-[30rem] md:w-[80rem] w-[30rem] items-center justify-center' src="https://www.youtube.com/embed/dQdn5mCUHPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </section>

    
  )
}

export default Youtube