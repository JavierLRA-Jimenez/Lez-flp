import React from 'react'
import Booker from '../../assets/Booker.webp'
import Mgmt from '../../assets/Mgmt.webp'
import party from '../../assets/Metropolitano.jpg'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BiBook} from 'react-icons/bi'


const Contact = () => {
  return (
    <section className='h-full md:h-[90vh] bg-cover bg-center bg-opacity-50 ' style={{ backgroundImage: `url(${party})`}}>
      <div className='text-7xl font-bold p-6 items-center justify-center flex  text-white'>
          <BiBook className='w-9 h-9 p-2 rounded-full  box-content bg-red-700' />
          <h1 className='md:text-7xl text-7xl font-bold p-6 items-center justify-center flex  text-white' id='contact'>Contact</h1>
        </div>

      {/*Informacion Welcome */}
      <div className='grid grid-cols-1 md:grid-cols-8 '>
      <div className='md:col-span-4 flex items-center justify-center p-8'>
        <div className='flex flex-col items-center  justify-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-[#E61D2A]'>Booking</h1>
          <br/>
          <img src={Booker} className=' rounded-full h-40 w-40'></img>
          <br/>
          <p className='text-[#f3f3f7] md:items-center md:justify-center text-xl font-semibold'>Juan More </p>
          <p className='text-[#c4c4f1] md:items-center md:justify-center text-md font-bold'>jcmorenojornesbi@gmail.com </p>

          <div className='flex flex-row items-center gap-8 justify-center pt-2 z-50 '>
            <a href='https://www.instagram.com/juaanmoree/'><BsInstagram className=' pt-2 w-11 h-10 text-transparent text-purple-500' style={{ color: '#9F7AEA' }}/></a>
            <a href='https://wa.me/message/HN32S5RMOTEBI1'><BsWhatsapp className=' pt-2 w-11 h-10 text-transparent  text-green-500'style={{ color: '#22C55E' }}/></a>
          </div>
        </div>
      </div>

      <div className='w-full h-30 md:w-auto md:h-auto md:col-span-4 flex justify-center  gap-3  md:mt-6 mb-9'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-[#E61D2A]'>Management</h1>
          <br/>
          <img src={Mgmt} className=' rounded-full h-40 w-40 '></img>
          <br/>
          <p className='text-[#f3f3f7] md:items-center md:justify-center text-xl font-semibold '>Agustín Casal </p>
          <p className='text-[#c4c4f1] md:items-center md:justify-center text-md font-bold'>agustin_casal@outlook.com</p>
          <div className='flex flex-row items-center gap-8 justify-center pt-2 z-50'>
            <a href='https://www.instagram.com/aguscasall/'><BsInstagram className=' pt-2 w-11 h-10 text-transparent text-purple-500 bg'style={{ color: '#9F7AEA' }}/></a>
            <a href='https://wa.me/message/E3BFDOKO4JSDG1'><BsWhatsapp className=' pt-2 w-11 h-10 text-transparent  text-green-500'style={{ color: '#22C55E' }}/></a>
          </div>
        </div>
      </div>

        
      </div>
      

    </section>
  )
}

export default Contact