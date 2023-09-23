import React from 'react'

import Logo from '../Assets/Logo.jpg'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='w-full flex items-center flex-col mt-20 bg-black text-white'>
        <img src={Logo} className='h-20'/>
        <div className='flex gap-10'>
            <AiFillLinkedin fontSize={40} fill='white'/>
            <AiFillInstagram fontSize={40} fill='white'/>
            <AiFillGithub fontSize={40} fill='white'/>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 mt-10'>
            <a href='mailto:shivamk.sk47994@gmail.com' className='text-white'>shivamk.sk47994@gmail.com</a>
            <a href='tel:8218811356'>8218811356</a>
        </div>
        <hr width={"80%"}></hr>
        <p className='text-gray-400 text-xs'>@2023 Shivam | All right Reserved</p>
    </div>
  )
}

export default Footer