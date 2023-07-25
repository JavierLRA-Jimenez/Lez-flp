import React, { useState } from 'react';
import whitelogo from '../../assets/LEZCIR.png';
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

      <nav className={`fixed bg-[#191919] w-[80%] md:w-[40%]  xl:w-full h-full ${showMenu ? 'left-0' : '-left-full'} top-0 xl:static flex-1 flex text-white justify-center items-center font-bold gap-10 flex-col xl:flex-row transition-all duration-700 z-50`}>
        <a href='#body' onClick={closeMenu} className=''>Home</a>
        <a href='#about' onClick={closeMenu} className=''>About</a>
        <a href='#spotify' onClick={closeMenu} className=''>Spotify</a>
        <a href='#youtube' onClick={closeMenu} className=''>Youtube</a>
        <a href='#socialnetwork' onClick={closeMenu} className=''>Network</a>
        <a href='#contact' onClick={closeMenu} className=''>Contact</a>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className='text-white xl:hidden text-2xl '>{showMenu ? <MdOutlineCancel /> : <RiMenuUnfoldFill />}</button>

    </header>
  );
};

export default Header;
