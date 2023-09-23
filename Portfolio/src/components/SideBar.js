import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
const SideBar = () => {
    return (
        <div className='bg-black h-screen fixed w-20 justify-center flex flex-col items-center gap-10'>
            <div>
                <a href='https://www.facebook.com/Shivamjaat01/' target='_blank'>
                    <AiFillFacebook fontSize={30} fill='white' />
                </a>
            </div>
            <div>
                <a href='https://www.instagram.com/shivam_webdev/' target='_blank'>
                    <AiFillInstagram fontSize={30} fill='white' />

                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/shivam-chaudhary-694756233/' target='_blank'>
                    <AiFillLinkedin fontSize={30} fill='white' />

                </a>
            </div>
            <div>
                <a href='https://github.com/shivamwebdev0811'>
                    <AiFillGithub fontSize={30} fill='white' />
                </a>
            </div>
        </div>

    )
}

export default SideBar