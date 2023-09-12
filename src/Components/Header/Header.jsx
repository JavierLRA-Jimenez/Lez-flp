import React, { useState } from 'react';
import White from '../../assets/White.png';
import { Link } from 'react-scroll';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

//social media
import {BsInstagram} from 'react-icons/bs'
import {BsTiktok} from 'react-icons/bs'
import {BsSpotify} from 'react-icons/bs'
import {SiThreads} from 'react-icons/si'
import {SiBeatport} from 'react-icons/si'
import {IoLogoYoutube} from 'react-icons/io'


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Función para cerrar el menú automáticamente después de hacer clic en un enlace
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className='sticky top-0 z-50 flex items-center justify-between xl:justify-start w-full bg-[#191919] md:bg-transparent p-2 h-[10vh]'>
      <div className='h-[60px] w-[90px] m-4 p-1'>
        <img src={White} alt="logo lez" className='w-[40%] flex justify-center m-auto relative pt-2' />
      </div>

      <nav className={`bg-[#191919] md:bg-transparent w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? 'left-0' : '-left-full'} xl:static flex-1 flex text-white justify-center items-center font-light gap-10 flex-col xl:flex-row transition-all duration-700`}>
        <Link to="body" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer'>HOME</Link>
        <Link to="spotify" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer'>MÚSICA</Link>
        <Link to="youtube" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer'>VIDEOS</Link>
        <Link to="fotos" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer'>FOTOS</Link>
        <Link to="about" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer'>BIOGRAFÍA</Link>
        <Link to="contact" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer'>CONTACTO</Link>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className='text-white xl:hidden text-2xl '>{showMenu ? <MdOutlineCancel /> : <RiMenuUnfoldFill />}</button>

      <div className='flex items-center space-x-4 text-white pr-10'>
        {/* Iconos de redes sociales */}
        <BsInstagram className='cursor-pointer' />
        <BsSpotify className='cursor-pointer' />
        <SiBeatport className='cursor-pointer' />
        <BsTiktok className='cursor-pointer' />
        <SiThreads className='cursor-pointer'/>
        <IoLogoYoutube className='cursor-pointer'/>
      </div>
    </header>
  );
};

export default Header;
