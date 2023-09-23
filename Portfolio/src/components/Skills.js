import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import {BiLogoJavascript} from 'react-icons/bi'
import { BiLogoCss3 } from 'react-icons/bi'
import {BiLogoTailwindCss} from 'react-icons/bi'
import { BiLogoReact } from 'react-icons/bi'
import {SiRedux} from 'react-icons/si'
import {BsGit} from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import {FaNodeJs} from 'react-icons/fa'
import { BiLogoMongodb } from 'react-icons/bi'
const Skills = () => {
    return (
        <div className='flex justify-center items-center w-[70%] mx-auto flex-col gap-7 '>
            <h1 className='text-3xl font-bold text-blue-800'>Skills</h1>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-between gap-8'>
                <div className='lg:w-[50%] text-gray-700 text-center lg:text-left'>
                    <p>Hi Everyone My name is Shivam. I am a Full Stack Web Developer In my journey as a developer,
                        I have honed my skills across a versatile tech stack that empowers me to build innovative and
                        efficient solutions. Here's an overview of the technologies I'm proficient in:
                    </p>
                    <p>Front-end Development:

                        JavaScript: My go-to language for crafting interactive and dynamic user experiences.
                        React.js: I leverage the power of React.js to build scalable and maintainable front-end
                        applications.
                        HTML & CSS: I use semantic HTML and CSS3 to create visually appealing and responsive designs.


                    </p>
                    <p>
                        Back-end Development:

                        Node.js: As a server-side JavaScript runtime, Node.js allows me to build fast and scalable
                        network applications.
                        Express.js: I utilize Express.js to create robust and modular back-end APIs.
                    </p>
                    <p>
                        Databases:

                        MongoDB: Proficient in MongoDB, I work with NoSQL databases for flexible and scalable data
                        storage.
                    </p>
                    <p>
                        Version Control and Deployment:

                        Git: I use Git for version control and collaboration, enabling seamless teamwork and code
                        management.
                    </p>
                </div>
                
                <div className='grid grid-cols-3 grid-rows-3 grid-gap-[10px] lg:w-[50%] gap-y-4 mx-auto w-[80%]'>
                    <AiFillHtml5 fontSize={50} fill='red' className='hover:scale-[1.1] transition-all duration-200'/>
                    <BiLogoCss3 fontSize={50} fill='#2E80F2'  className='hover:scale-[1.1] transition-all duration-200'/>
                    <BiLogoJavascript fontSize={50} fill='#BFC22B'  className='hover:scale-[1.1] transition-all duration-200'/>
                    <BiLogoTailwindCss fontSize={50} fill='skyblue'  className='hover:scale-[1.1] transition-all duration-200'/>
                    <BiLogoReact fontSize={50} fill='#2786A2'  className='hover:scale-[1.1] transition-all duration-200'/>
                    <SiRedux fontSize={50} fill='#8427A2'  className='hover:scale-[1.1] transition-all duration-200'/>
                    <BsGit fontSize={50} fill='#F2862E'  className='hover:scale-[1.1] transition-all duration-200'/>
                    <AiFillGithub fontSize={50}  className='hover:scale-[1.1] transition-all duration-200'/>
                    <FaNodeJs fontSize={50} fill='#71C431' className='hover:scale-[1.1] transition-all duration-200'/>
                    <BiLogoMongodb fontSize={50} fill='#14770F' className='hover:scale-[1.1] transition-all duration-200'/>
                </div>

            </div>
        </div>
    )
}

export default Skills