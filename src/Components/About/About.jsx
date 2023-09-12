import React from 'react';
import infierno from '../../assets/Industrial.jpg';
import mask from '../../assets/maskgrislez.jpg'
import {BsInstagram} from 'react-icons/bs'
import {BsTiktok} from 'react-icons/bs'
import {BsSpotify} from 'react-icons/bs'
import {SiThreads} from 'react-icons/si'
import {SiBeatport} from 'react-icons/si'
import {IoLogoYoutube} from 'react-icons/io'

const About = () => {
  return (
    <section className='md:h-[55rem] bg-cover bg-center h-scream bg-fixed ' style={{ backgroundImage: `url(${mask})` }} id='about'>
  

    <h1 className='text-4xl p-8 items-center justify-center flex gap-8 text-white z-99 pt-20'>
      BIOGRAFÍA
    </h1>

    <div className='flex  text-white pt-20'>

      <div className=' rounded-md text-xs md:text-base md:w-[50rem] pl-[7rem]'>
        <p>Lez es originario de Rosario, Santa Fe, Argentina. Con una trayectoria que inició en el año
2013 y habiendo sido considerado como una promesa en América Latina, Lez ha
demostrado ser un DJ y productor versátil capaz de adaptarse a diferentes estilos y
tendencias, destacando pronto por su talento y carisma detrás de las consolas. Al mismo
tiempo, se formó académicamente en el Instituto Cetear, lo que le permitió ampliar sus
conocimientos y habilidades en la producción musical.</p>
        <br />
        <p>
        Su talento y habilidades le han permitido presentarse en distintos clubs y eventos de la
escena nocturna de Rosario, como Coyote Iglú, Barracao, Complejo Awas, Costello,
Madame, Metropolitano Rosario, entre otros. Durante su carrera ha compartido cabina con
grandes artistas de la escena electrónica, incluyendo a Ice Machine, Gastón Garay, Nacho
Scoppa, Zone7, Cadelago, entre otros.</p>
        <br />
        <p>Actualmente, Lez está enfocado en sus propias producciones musicales y en crecer
artísticamente. Sus producciones lo han llevado a lograr colaboraciones con otros artistas
como Jean Bacarreza (conocido hoy en día como Bakka), Zone7, SUPER (ARG) y otros
talentos destacados de la escena electrónica. Además, trabaja en conjunto con LEVELS, su
equipo de trabajo que lo guía en su carrera y forma parte de su booking de artistas.</p>
        <br />
        <br />
        <br />
        <br />

        <div className='flex flex-col'>
          <h1 className='text-[#f3f3f7] text-3xl font-semibold '>CONTACTO</h1>
          <p className='text-[#c4c4f1] md:items-center md:justify-center text-md font-medium cursor-pointer'>agustin_casal@outlook.com</p>
          <a href='https://wa.me/message/E3BFDOKO4JSDG1' className='pt-1 text-[#c4c4f1]'>whatsupp/contacto-mgmt</a>
          <div className='flex flex-row  gap-3 pt-3 z-50'>
            <BsInstagram />
            <BsSpotify />
            <SiBeatport />
            <BsTiktok />
           <SiThreads/>
           <IoLogoYoutube/>
          </div>
        </div>
        
        
      </div>

      <div className='w-[31rem] pl-[10rem] '>
          <img src={infierno} alt='Infierno' className=' rounded-xl' />
      </div>
    </div>
  
</section>
  )
}

export default About;