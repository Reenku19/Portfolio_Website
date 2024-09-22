import React from 'react'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpeg'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.jpeg'
import p5 from '../assets/p5.jpeg'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.jpg'

import { FaGithub } from 'react-icons/fa6'

export const Projects = () => {
    const projects = [
        {
            id: 1,
            image: p1,
            github: "https://github.com/Reenku19/Movie_Recommendation.git"
        },
        {
            id: 2,
            image: p2,
            github: "https://github.com"
        },
        {
            id: 3,
            image: p3,
            github: "https://github.com"
        },
        {
            id: 4,
            image: p4,
            github: "https://github.com"
        },
        {
            id: 5,
            image: p5,
            github: "https://github.com"
        },
        {
            id: 6,
            image: p6,
            github: "https://github.com/Reenku19/Reenu_Boutique.git"
        },
         {
            id: 7,
            image: p7,
            github: "https://github.com/Reenku19/Portfolio_Website.git"
        },
    ]
    return (
        <div name="Projects" className='w-full md:min-h-screen bg-black' id="project">
            <div className='max-w-screen-lg p-4 h-full w-full mx-auto flex flex-col justify-center items-center md:items-start text-white'>
                <div className='pb-8'>
                    <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500' >Projects</h2>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {projects.map(({ id, image, github }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={image}></img>
                            <div className='flex items-center justify-evenly p-2'>
                                <a href={github} className='hover:scale-110 duration-200'>
                                    {" "}
                                    <FaGithub size={30}></FaGithub>
                                </a>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}


