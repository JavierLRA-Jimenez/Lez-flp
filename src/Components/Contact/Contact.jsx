import React from 'react'
import {BsFillPhoneVibrateFill} from 'react-icons/bs'
import backredlez from '../../assets/backredlez.jpg'

const Contact = () => {
  return (
    <section className='bg-black'>
  <div className='grid grid-cols-1 md:grid-cols-2 p-8 xl:p-20'>
    <div className='flex flex-col'>
      <h1 className='text-[50px] text-2xl p-20 text-white font-bold'>Contact</h1>

      <div className='text-[17px] text-purple-200 font-semibold'>
        <p>Con una exitosa carrera internacional, he llevado mi pasión por la música a diferentes lugares del mundo. Mi especialidad es mezclar los ritmos más enérgicos y crear una atmósfera única en cada evento.</p><br/>

        <p>Ofrezco servicios de mezcla, DJ party y también enseño clases de producción y DJ. Si estás buscando un ambiente lleno de buena música y diversión, no dudes en contactarme. Estoy aquí para hacer de tu evento una experiencia inolvidable.</p><br/>

        <p>¿Listo para dar el primer paso? No dudes en ponerte en contacto conmigo y descubrir cómo puedo hacer que tu próximo evento sea todo un éxito. ¡Estoy emocionado de trabajar contigo y crear momentos musicales inolvidables!</p>
      </div>
      <br />

      <button className='flex font-bold text-white bg-gradient-to-r from-blue-700 via-purple-500 to-red-500 p-6 items-center justify-center gap-2 text-[30px] w-[17rem] h-[4rem] rounded-full'>
        <BsFillPhoneVibrateFill className='w-10 h-10 p-3 rounded-full box-content'/>Instagram
      </button>
    </div>
      
    {/* Imagen card Flip */}
    <div className='flex justify-center md:justify-end'>
      <div className='group h-96 w-96 [perspective:1000px] '>
        <div className='py-14 h-[4rem] md:h-[42rem] w-[25rem] flex shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div>
            <img src={backredlez} className='md:h-[42rem] object-cover opacity-90 shadow-xl shadow-red-800/90 rounded-xl '/>
          </div>
          <div className="h-[40rem] absolute inset-0 md:h-full  rounded-xl bg-black/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className='flex h-[40rem] min-h-full flex-col items-center justify-center'>
              <h1 className='text-6xl font-bold'>Right Now!!!</h1>
              <p className='text-2xl '>Press that FVCKNG BUTTON </p>
              <button className='mt-9 rounded-md bg-red-800 py-1 px-2 text-xl hover:bg-red-800 shadow-md shadow-red-400'>LETS GO!!!!</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

  )
}

export default Contact