import React, { useState } from 'react';
import whitelogo from '../../assets/LEZCIR.png';
import { Link } from 'react-scroll'; // Importa el componente Link de react-scroll
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Función para cerrar el menú automáticamente después de hacer clic en un enlace
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className='flex items-center justify-between xl:justify-start w-full bg-[#191919] p-2 h-[10vh]'>
      <div className='h-[60px] w-[90px] m-4 p-1'>
        <img src={whitelogo} alt="logo lez" className='w-[70%] flex justify-center m-auto relative' />
      </div>

      <nav className={`fixed bg-[#191919] w-[80%] md:w-[40%]  xl:w-full h-full ${showMenu ? 'left-0' : '-left-full'} top-0 xl:static flex-1 flex text-white justify-center cursor-pointer items-center font-bold gap-10 flex-col xl:flex-row transition-all duration-700 z-50`}>
        <Link to="body" spy={true} smooth={true} duration={500} onClick={closeMenu}>Home</Link>
        <Link to="about" spy={true} smooth={true} duration={500} onClick={closeMenu}>About</Link>
        <Link to="spotify" spy={true} smooth={true} duration={500} onClick={closeMenu}>Spotify</Link>
        <Link to="youtube" spy={true} smooth={true} duration={500} onClick={closeMenu}>Youtube</Link>
        <Link to="socialnetwork" spy={true} smooth={true} duration={500} onClick={closeMenu}>Network</Link>
        <Link to="contact" spy={true} smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className='text-white xl:hidden text-2xl '>{showMenu ? <MdOutlineCancel /> : <RiMenuUnfoldFill />}</button>

    </header>
  );
};

export default Header;
