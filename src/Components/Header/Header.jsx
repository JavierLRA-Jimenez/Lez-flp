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
    <header className='sticky top-0 z-50 flex items-center justify-center xl:justify-start w-full  md:bg-transparent p-2 h-[10vh]'>
      <div className='h-[60px] w-[90px] m-4 p-1' style={{ marginLeft: '6rem' }}>
        <img src={White} alt="logo lez" className='w-[40%] flex m-auto relative pt-2  ' />
      </div>

      <nav className={`md:bg-transparent w-full md:max-w-sm h-full space-x-7 ${showMenu ? 'left-0' : '-left-full'} flex-1 flex text-white justify-center items-center font-light gap-2 flex-col xl:flex-row mx-auto transition-all duration-700`}>
  <Link to="body" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer my-1'>HOME</Link>
  <Link to="spotify" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer my-1'>MÚSICA</Link>
  <Link to="youtube" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer my-1'>VIDEOS</Link>
  <Link to="fotos" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer my-1'>FOTOS</Link>
  <Link to="about" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer my-1'>BIOGRAFÍA</Link>
  <Link to="contact" spy={true} smooth={true} duration={500} onClick={closeMenu} className='cursor-pointer my-1'>CONTACTO</Link>
</nav>
      <button onClick={() => setShowMenu(!showMenu)} className='text-white xl:hidden text-2xl '>{showMenu ? <MdOutlineCancel /> : <RiMenuUnfoldFill />}</button>

      <div className='flex items-center space-x-7 text-white ' style={{ marginRight: '8rem' }}>
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
