import React from 'react'
import {BsPersonFill} from 'react-icons/bs'

//Image
import infierno from '../../assets/maskgrislez.webp'

const About = () => {
  return (
    <section className='md:h-[37rem]' id='about'>
      <div className='h-full bg-cover bg-center'style={{ backgroundImage: `url(${infierno})` }}  >

        <h1 className='text-7xl font-bold p-8 items-center justify-center flex gap-8 text-white'><BsPersonFill className='bg-blue-800 w-9 h-9  p-2 rounded-full box-content'/>About Me</h1>

        <div className='flex flex-row justify-between gap-3 text-white '>

          <div className='bg-[#1d1d64d5] rounded-xl p-5 m-5 opacity-80 leading-7 md:text-l md:items-center md:justify-center'>
            <p>Lez is originally from Rosario, Santa Fe, Argentina. With a career that began in 2013 and
               having been considered a promise in Latin America, Lez has shown himself to be a versatile
               DJ and producer capable of adapting to different styles and trends, quickly standing out for
               his talent and charisma behind the decks.At the same time, he studied at the Cetear
               Institute, which allowed him to expand his knowledge and skills in music production. </p>
            <br/>
            <p>
               His talent and skills have allowed him to perform at different clubs and events in the nightlife
               scene of Rosario, such as Coyote Iglú, Barracao, Complejo Awas, Costello, Madame,
               Metropolitano Rosario, among others. Throughout his career, he has shared the stage with
               great artists from the electronic music scene, including Ice Machine, Gastón Garay, Nacho
               Scoppa, Zone7, Cadelago, among others.</p>
            <br/>
            <p>Currently, Lez is focused on his own music productions and artistic growth. His productions
               have led him to collaborate with other artists such as Jean Bacarreza (known today as
               Bakka), Zone7, SUPER (ARG), and other outstanding talents from the electronic music
               scene. In addition, he works together with LEVELS, his team that guides him in his career
               and is part of his artist booking.</p>

          </div>
  
        </div>
      </div>
   </section>
  )
}

export default About