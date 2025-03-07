import React, { useState, useEffect } from 'react';
import White from '../../assets/White.png';
import { Link } from 'react-scroll';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';



// social media
import { BsInstagram } from 'react-icons/bs';
import { BsTiktok } from 'react-icons/bs';
import { BsSpotify} from 'react-icons/bs';
import { SiThreads } from 'react-icons/si';
import { SiBeatport } from 'react-icons/si';
import { IoLogoYoutube } from 'react-icons/io';
import {GiPumpkinMask} from 'react-icons/gi'


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = window.innerWidth <= 768;

  // Función para cerrar el menú automáticamente después de hacer clic en un enlace
  const closeMenu = () => {
    setShowMenu(false);
  };

  // Manejador de eventos para mostrar el menú cuando la pantalla se expande o reduce
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsSmallScreen(true);
      setShowMenu(false);
    } else {
      setIsSmallScreen(false);
      setShowMenu(true);
    }
  };

  // Inicializa la variable isSmallScreen al cargar el componente
  const [isSmallScreen, setIsSmallScreen] = useState(isMobile);

  useEffect(() => {
    // Configura el manejador de eventos al cargar el componente
    handleResize();

    // Agrega un oyente de eventos para el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpia el oyente de eventos al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <motion.div className='sticky top-0 z-50 flex items-center justify-center xl:justify-start w-full md:bg-transparent p-2 h-[10vh]'>
      

      {/* Botón para pantallas pequeñas */}
      {isSmallScreen && (
        <button onClick={() => setShowMenu(!showMenu)} className='text-white xl:hidden text-4xl'>
          {showMenu ? <MdOutlineCancel /> : <RiMenuUnfoldFill />}
        </button>
      )}

      {/* Menú para pantallas pequeñas */}
      {isSmallScreen && showMenu && (
        <div
          className='md:hidden fixed top-[10vh] left-0 w-full h-[90vh] bg-black text-white p-4 flex flex-col justify-start items-center space-y-4'
          style={{
            zIndex: '100',
          }}
        >
          <Link to="body" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer'>
            HOME
          </Link>
          <Link to="spotify" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer'>
            MÚSICA
          </Link>
          <Link to="youtube" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer'>
            VIDEOS
          </Link>
          <Link to="fotos" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer'>
            FOTOS
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer'>
            BIOGRAFÍA
          </Link>       

          {/* Iconos de redes sociales para pantallas pequeñas */}
          <div className='flex items-center md:space-x-7 space-x-5 text-white md:mr-[13rem]'>
          <a href='https://www.instagram.com/lez.flp/'><BsInstagram className='cursor-pointer' /></a>
          <a href='https://open.spotify.com/artist/0rE1EJOUYpklfh9pdZClT8?si=JfitBPKdQOme00NyinWIMA&nd=1'><BsSpotify className='cursor-pointer' /></a>
          <a href='https://www.beatport.com/artist/lez/134309'><SiBeatport className='cursor-pointer' /></a>
          <a href='https://www.tiktok.com/@lez.flp'><BsTiktok className='cursor-pointer' /></a>
          <a href='https://www.threads.net/@lez.flp'><SiThreads className='cursor-pointer'/></a>
            <RouterLink to="/Fear">
          <GiPumpkinMask className='cursor-pointer' />
          </RouterLink>
           <a href='https://www.youtube.com/@lez_flp'><IoLogoYoutube className='cursor-pointer'/></a>
          </div>
        </div>
      )}

{!isSmallScreen && (
  <nav className={`md:bg-transparent w-full h-full space-x-7 transform transition-transform duration-700  translate-y-0 flex-1 flex text-white justify-center items-center font-light gap-2 ${showMenu ? 'md:flex-row' : ''} mx-auto md:flex`}>
    <div className='w-20 md:h-[60px] md:w-[90px] p-1 '>
        <img src={White} alt="logo lez" className='w-[45%] md:w-[40%] flex m-auto relative md:pt-2' />
      </div>
    <Link to="body" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer my-1'>
      HOME
    </Link>
    <Link to="spotify" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer my-1'>
      MÚSICA
    </Link>
    <Link to="youtube" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer my-1'>
      VIDEOS
    </Link>
    <Link to="fotos" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer my-1'>
      FOTOS
    </Link>
    <Link to="about" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer my-1'>
      BIOGRAFÍA
    </Link>
{!isSmallScreen && (
        <div className='flex items-center md:space-x-6 space-x-5 text-white md:mr-[13rem] '>
          <a href='https://www.instagram.com/lez.flp/'><BsInstagram className='cursor-pointer' /></a>
          <a href='https://open.spotify.com/artist/0rE1EJOUYpklfh9pdZClT8?si=JfitBPKdQOme00NyinWIMA&nd=1'><BsSpotify className='cursor-pointer' /></a>
          <a href='https://www.beatport.com/artist/lez/134309'><SiBeatport className='cursor-pointer' /></a>
          <a href='https://www.tiktok.com/@lez.flp'><BsTiktok className='cursor-pointer' /></a>
          <a href='https://www.threads.net/@lez.flp'><SiThreads className='cursor-pointer'/></a>
          <RouterLink to="/Fear">
  <GiPumpkinMask className='cursor-pointer' />
</RouterLink>
          <a href='https://www.youtube.com/@lez_flp'><IoLogoYoutube className='cursor-pointer'/></a>
        </div>
      )}
  </nav>
)}
      
    </motion.div>
  );
};

export default Header;
