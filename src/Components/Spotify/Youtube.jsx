import React from 'react'


import bluelightlez from '../../assets/Uruguayy.jpg'
const Youtube = () => {
  return (
    <section className='sm:h-[35rem] md:h-[50rem] bg-cover bg-center h-screen bg-fixed' style={{ backgroundImage: `url(${bluelightlez})` }} id='youtube'>
  <div>
    <h2 className='text-4xl p-6 items-center justify-center flex gap-8 text-white'>VIDEOS</h2>
  </div>
  <div className="flex mt-10 items-center relative z-10">
    <div className="w-[45rem] pl-[8rem] ">
      <iframe width="100%" height="500" src="https://www.youtube.com/embed/dQdn5mCUHPs?si=hkKcuGMiA0sGevN-&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className="w-1/2 p-4">
      <div className="mb-4">
        <iframe width="80%" height="242" src="https://www.youtube.com/embed/9SJtOdGyqc0?si=qgXksb9lYCEPkyYA&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div>
        <iframe width="80%" height="242" src="https://www.youtube.com/embed/hKgbsGxI31g?si=9-Cs6p3vAjp9WwsD" allowfullscreen></iframe>
      </div>
    </div>
  </div>

  <div className='flex flex-col md:flex-row items-center justify-center pt-10'>
  <button className='relative text-white py-2 px-8 rounded-lg text-x overflow-hidden group focus:outline-none animate-bounce'>
    <span className='z-10 relative'>YouTube</span>
    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 via-black to-red-500 opacity-0 transform scale-110 origin-top-left transition-transform duration-500 group-hover:opacity-100'></div>
    <div className='absolute top-0 left-0 w-full h-full bg-transparent border-4 border-white opacity-0 transform scale-150 origin-top-left transition-all duration-500'></div>
    <div className='absolute top-0 left-0 w-full h-full bg-transparent border-4 border-white opacity-0 transform scale-150 origin-top-left transition-all duration-500'></div>
    <div className='absolute top-0 left-0 w-full h-full bg-red-500 opacity-0 transform scale-150 origin-top-left transition-all duration-500 group-hover:opacity-50 animate-pulse'></div>
  </button>
</div>
</section>

    
  )
}

export default Youtube