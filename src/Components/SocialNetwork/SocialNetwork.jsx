import React from 'react'
import Fliplez from '../../assets/Fliplez.jpg'
import {TbSocial} from 'react-icons/tb'

const Contact = () => {
  return (
    <section id='socialnetwork' className='h-[55rem]'>
      <div className='md:col-span-4 flex items-center justify-center p-8'>
        <div className='flex flex-col items-center gap-5 justify-center'>
          <h1 className='md:text-7xl text-7xl font-bold p-6 items-center justify-center flex gap-8 text-white'><TbSocial className='bg-purple-600 w-10 h-10  p-2 rounded-full box-content'/>
            Network</h1>
        </div>
      </div>
      
    {/* Imagen card Flip */}
    <div className='flex items-center justify-center md:flex-row flex-col  md:ml-[-25rem]'>
  <div className='group h-96 w-96 [perspective:1000px] '>
    <div className='justify-center py-1 h-[40rem] md:h-[30rem] w-[25rem] md:w-[50rem] flex shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
      <div style={{ margin: '0 auto' }}>
        <img src={Fliplez} className='md:h-[38rem] h-[38rem] object-cover opacity-90 shadow-xl shadow-purple-700 rounded-xl' />
      </div>

      <div className="h-[38rem] absolute inset-0 md:h-40rem rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className='flex h-[38rem] min-h-full flex-col items-center justify-center'>
          <br/>
          <button className='mt-9 rounded-md bg-purple-900 py-1 px-2 text-3xl font-semibold hover:bg-purple-800 shadow-md shadow-violet-400'><a href='https://linktr.ee/lez.flp'>LinkTree</a></button>
        </div>
      </div>
    </div>
  </div>
</div>
      
   </section>

  )
}

export default Contact