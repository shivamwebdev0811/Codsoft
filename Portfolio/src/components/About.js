import React from 'react'
import UserImage from '../Assets/UserImage.png'
import { TypeAnimation } from 'react-type-animation'

const About = () => {
    return (
        <div className='flex-col absolute flex md:flex-row items-center flex-wrap gap-20 z-40 group'>
            <div>
                <img src={UserImage} className='h-[300px] outline outline-offset-[10px]'></img>
            </div>
            <div className='w-[70vh]'>
                <div className="text-blue-800 font-semibold">
                    <TypeAnimation
                        sequence={[
                            
                            'I am a Web Developer',
                            1000, 
                            'I am a Frontend Developer',
                            1000,
                            'I am a MERN Stack Developer',
                            1000,
                            'I am a UI/UX designer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}

                    />
                </div>

                <p className='text-gray-700'>
                    I am Shivam, I am a software Developer and here is my portfolio website. Here you'll
                    learn about my journey as a software developer.
                </p>
                <a href='/Resume.pdf' download="/Resume.pdf">
                    <button className='bg-blue-800 text-white rounded-xl py-2 px-5 mt-5 hover:bg-blue-900'>
                        Download Resume
                    </button>
                </a>

            </div>
        </div>
    )
}

export default About