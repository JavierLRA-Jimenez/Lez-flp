import React from 'react';
import infierno from '../../assets/Industrial.jpg';
import mask from '../../assets/maskgrislez.jpg';
import { BsInstagram } from 'react-icons/bs';
import { BsTiktok } from 'react-icons/bs';
import { BsSpotify } from 'react-icons/bs';
import { SiThreads } from 'react-icons/si';
import { SiBeatport } from 'react-icons/si';
import { IoLogoYoutube } from 'react-icons/io';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="md:h-[55rem] bg-cover bg-center h-scream bg-fixed "
      style={{ backgroundImage: `url(${mask})` }}
      id="about"
    >
      <h1 className="text-4xl p-8 items-center justify-center flex gap-8 text-white z-99 pt-20">
        BIOGRAFÍA
      </h1>

      <div className="flex flex-col-reverse md:flex-row text-white md:pt-20 pt-10">
        <div className="md:w-[50%] sm:w-full md:order-2">
          <div className="md:w-[31rem] md:pl-[10rem] w-[18rem] pl-3">
            <img src={infierno} alt="Infierno" className="rounded-xl" />
          </div>
        </div>
        <div className="md:w-[50%] sm:w-full md:order-1">
          <div className="rounded-md md:text-base sm:text-lg sm:justify-items-center pl-3 md:pl-[7rem]">
            <p>
              Lez es originario de Rosario, Santa Fe, Argentina. Con una trayectoria que inició en el año 2013 y habiendo sido considerado como una promesa en América Latina, Lez ha demostrado ser un DJ y productor versátil capaz de adaptarse a diferentes estilos y tendencias, destacando pronto por su talento y carisma detrás de las consolas. Al mismo tiempo, se formó académicamente en el Instituto Cetear, lo que le permitió ampliar sus conocimientos y habilidades en la producción musical.
            </p>
            <br />
            <p>
              Su talento y habilidades le han permitido presentarse en distintos clubs y eventos de la escena nocturna de Rosario, como Coyote Iglú, Barracao, Complejo Awas, Costello, Madame, Metropolitano Rosario, entre otros. Durante su carrera ha compartido cabina con grandes artistas de la escena electrónica, incluyendo a Ice Machine, Gastón Garay, Nacho Scoppa, Zone7, Cadelago, entre otros.
            </p>
            <br />
            <p>
              Actualmente, Lez está enfocado en sus propias producciones musicales y en crecer artísticamente. Sus producciones lo han llevado a lograr colaboraciones con otros artistas como Jean Bacarreza (conocido hoy en día como Bakka), Zone7, SUPER (ARG) y otros talentos destacados de la escena electrónica. Además, trabaja en conjunto con LEVELS, su equipo de trabajo que lo guía en su carrera y forma parte de su booking de artistas.
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:w-[50%] sm:w-full md:pl-[7rem] pl-3 pt-5">
        <h1 className="text-[rgb(243,243,247)] text-2xl font-semibold">CONTACTO</h1>
        <a href="https://mail.google.com/mail/?view=cm&to=agustin_casal@outlook.com" className="md:items-center text-[#f3f3f7] md:justify-center text-md font-medium cursor-pointer no-underline" target="_blank" data-href="https://mail.google.com/mail/?view=cm&to=agustin_casal@outlook.com">
        agustin_casal@outlook.com
</a>
        <a href="https://wa.me/message/E3BFDOKO4JSDG1" className="pt-1 text-[#f3f3f7]">
          whatsupp/contacto-mgmt
        </a>
        <div className="flex flex-row pt-3 z-50 space-x-7 text-[#f3f3f7]">
        <a href='https://www.instagram.com/lez.flp/'><BsInstagram className="text-xl" /></a>
        <a href='https://open.spotify.com/artist/0rE1EJOUYpklfh9pdZClT8?si=JfitBPKdQOme00NyinWIMA&nd=1'><BsSpotify className="text-xl" /></a>
        <a href='https://www.beatport.com/artist/lez/134309'><SiBeatport className="text-xl" /></a>
        <a href='https://www.tiktok.com/@lez.flp'><BsTiktok className="text-xl" /></a>
        <a href='https://www.threads.net/@lez.flp'><SiThreads className="text-xl" /></a>
        <a href='https://www.youtube.com/@lez.'><IoLogoYoutube className="text-xl" /></a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
