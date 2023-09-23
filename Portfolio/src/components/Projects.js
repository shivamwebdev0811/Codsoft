import React from 'react'
import projectData from '../projectData'
import Project from './Project'
const Projects = () => {
    return (
        <div className='flex justify-center items-center mt-20 flex-col'>
            <h1 className='text-3xl font-bold text-blue-800 mb-10'>
                Projects
            </h1>
            <div className='w-[100%] flex flex-col items-center gap-10'>
                {
                    projectData.map((project) => (<Project key={project.id} project={project} />))
                }
            </div>

        </div>
    )
}

export default Projects