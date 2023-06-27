import React from 'react'
import {BsPersonWorkspace} from 'react-icons/bs'

//Image
import infierno from '../../assets/maskgrislez.jpg'

const About = () => {
  return (
    <section className='md:h-[27rem]'>
      <div className='h-full bg-cover bg-center'style={{ backgroundImage: `url(${infierno})` }}  >

        <h1 className='text-7xl font-bold p-8 items-center justify-center flex gap-8 text-white'><BsPersonWorkspace className='bg-blue-800 w-7 h-10  p-3 rounded-full box-content'/>About Me</h1>

        <div className='flex flex-row justify-between gap-3 text-white '>

          <p className='bg-gray-800 rounded-xl p-5 m-10 opacity-80 leading-7 md:text-l md:items-center md:justify-center'>Lez is originally from Rosario, Santa Fe, Argentina. With a career that began in 2013 and having been considered a promise in L.A, Lez has shown himself to be a versatile DJ and producer capable of adapting to different styles and trends, quickly standing out for his talent and charisma behind the decks. At the same time, he studied at the Cetear Institute, which allowed him to expand his knowledge and skills in music production.</p>
  
        </div>
      </div>
   </section>
  )
}

export default About