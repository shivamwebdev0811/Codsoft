import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineLink} from 'react-icons/ai'
const Project = ({project}) => {
  return (
    <div className='border w-[50%] p-6 shadow-xl hover:shadow-2xl hover:scale-[1.1] transition-all duration-300 flex flex-col gap-7 rounded-3xl bg-gray-900 text-white'>
        <h2 className='font-semibold text-2xl text-center'>{project.title}</h2>
        <div className='flex items-center justify-center'>
            <img src={project.image} width={280}/>
        </div>
        <div>
            <p>{project.desc}</p>
        </div>
        <Link to={project.link} target='_blank'>
            <AiOutlineLink fontSize={30}/>
        </Link>
    </div>
  )
}

export default Project