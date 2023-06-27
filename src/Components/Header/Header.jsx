import React, {useState} from 'react'
import whitelogo from '../../assets/whitelogo.png'

//Iconos 
import {RiMenuUnfoldFill} from 'react-icons/ri'
import {MdOutlineCancel} from 'react-icons/md'

const Header = () => {
    const [showMenu, setShowMenu ] = useState(false);
  return (
    <header className='flex items-center justify-between xl:justify-start w-full bg-[#302f32] p-2 h-[10vh]'>
      <div className=' h-[40px] w-[40px] bg-[#a71919] rounded-full m-4 p-1'>
        <img src={whitelogo} alt="logo lez" className='w-[70%] flex justify-center m-auto relative'/>
      </div>

      <nav className={`fixed bg-[#302f32] w-[80%] md:w-[40%]  xl:w-full h-full ${showMenu ? 'left-0' : '-left-full'} top-0 xl:static flex-1 flex text-white justify-center items-center font-bold gap-10 flex-col xl:flex-row transition-all duration-700`}>   
        <a href='#'  className=''>Home </a>
        <a href='#'  className=''>About Me </a>
        <a href='#'  className=''>Spotify </a>
        <a href='#'  className=''>Youtube </a>
        <a href='#'  className=''>Contact </a>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className='text-white xl:hidden text-2xl '>{showMenu ? <MdOutlineCancel/> : <RiMenuUnfoldFill/>}</button> 
      
    </header>
  ) 
}

export default Header