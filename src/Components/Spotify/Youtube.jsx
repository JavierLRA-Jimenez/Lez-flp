import React from 'react'
import {SiYoutubemusic} from 'react-icons/si'


import bluelightlez from '../../assets/Uruguay.webp'
const Youtube = () => {
  return (
    <section className='sm:h-[35rem] md:h-[45rem] bg-cover bg-center'style={{ backgroundImage: `url(${bluelightlez})` }}  id='youtube' >

        <div className='text-7xl font-bold p-8 items-center justify-center flex gap-8 text-white'>
          <SiYoutubemusic className='w-9 h-9 p-2 rounded-full box-content bg-[#E61D2A]' />
          <h1 className='text-7xl font-bold  text-white'>YouTube</h1>
        </div>

        <div className="flex  justify-center items-center mt-1">
          <iframe className=' flex h-[22rem] md:h-[30rem] md:w-[80rem] w-[30rem] items-center justify-center' src="https://www.youtube.com/embed/dQdn5mCUHPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </section>

    
  )
}

export default Youtube