import React from 'react'
import {BsFillPhoneVibrateFill} from 'react-icons/bs'
import backredlez from '../../assets/backredlez.jpg'

const Contact = () => {
  return (
    <section >
      <div className='md:col-span-4 flex items-center justify-center p-8'>
        <div className='flex flex-col items-center gap-5 justify-center'>
          <h1 className='text-4xl md:text-7xl font-bold text-white'>Contact</h1>
          <p className='text-[#ffffff] md:items-center md:justify-center text-xl font-normal '> No te pierdas de todas las novedades, lanzamientos, y novedades que traigo para ustedes.las mejores fiestas, garantizado!! </p>
        </div>
      </div>
      
    {/* Imagen card Flip */}
    <div className='flex items-center justify-center gap-36 md:flex-row flex-col space-y-40 md:space-y-0'>



      <div className='group h-96 w-96 [perspective:1000px]'>
        <div className='py-14 h-[4rem] md:h-[42rem] w-[25rem] flex shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div>
            <img src={backredlez} className='md:h-[38rem] object-cover opacity-90 shadow-xl shadow-green-400 rounded-xl '/>
          </div>
          <div className="h-[40rem] absolute inset-0 md:h-full  rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className='flex h-[40rem] min-h-full flex-col items-center justify-center'>
              <h1 className='text-6xl font-bold'>Right Now</h1>
              <p className='text-2xl '>Press that FVCKNG BUTTON </p>
              <button className='mt-9 rounded-md bg-green-800 py-1 px-2 text-xl font-semibold hover:bg-green-800 shadow-md shadow-green-600'>WhatsApp</button>
            </div>
          </div>
        </div>
      </div>

      <div className='group h-96 w-96 [perspective:1000px] '>
        <div className='py-14 h-[4rem] md:h-[42rem] w-[25rem] flex shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div>
            <img src={backredlez} className='md:h-[38rem] object-cover opacity-90 shadow-xl shadow-purple-700 rounded-xl '/>
          </div>
          <div className="h-[40rem] absolute inset-0 md:h-full  rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className='flex h-[40rem] min-h-full flex-col items-center justify-center'>
              <h1 className='text-6xl font-bold'>Right Now</h1>
              <p className='text-2xl '>Press that FVCKNG BUTTON </p>
              <button className='mt-9 rounded-md bg-purple-900 py-1 px-2 text-xl font-semibold hover:bg-purple-800 shadow-md shadow-violet-400'>Instagram</button>
            </div>
          </div>
        </div>
      </div>

      <div className='group h-96 w-96 [perspective:1000px] '>
        <div className='py-14 h-[4rem] md:h-[42rem] w-[25rem] flex shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div>
            <img src={backredlez} className='md:h-[38rem] object-cover opacity-90 shadow-xl shadow-blue-600 rounded-xl '/>
          </div>
          <div className="h-[40rem] absolute inset-0 md:h-full  rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className='flex h-[40rem] min-h-full flex-col items-center justify-center'>
              <h1 className='text-6xl font-bold'>Right Now</h1>
              <p className='text-2xl '>Press that FVCKNG BUTTON </p>
              <button className='mt-9 rounded-md bg-blue-800 py-1 px-2 text-xl font-semibold hover:bg-blue-800 shadow-md shadow-blue-600'>LinkThree</button>
            </div>
          </div>
        </div>
      </div>



    </div>

      
   </section>

  )
}

export default Contact