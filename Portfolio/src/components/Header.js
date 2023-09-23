import React from 'react'
import Logo from "../Assets/Logo.jpg"
import projectData from '../projectData'
const Header = () => {
  return (
    <div>
        <nav className='flex justify-center w-screen items-center bg-black h-[60px] fixed z-[100]'>
           <img src={Logo} width={80}/>
        </nav>
    </div>
  )
}

export default Header