import React from 'react'

 export const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container mx-auto py-2 flex flex-wrap justify-center md:justify-between items-center'>
            <div className='text-white text-2xl font-bold sm:w-auto md:inline'>Reenkz</div>
            <div className=' w-full lg:space-x-6 md:space-x-4 sm:space-x-2 sm:w-auto flex flex-wrap justify-between text-center'>
                <a href="#hero" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#project" className='hover:text-gray-400'>Projects</a>
                <a href="#skill" className='hover:text-gray-400'>Skills</a>
                <a href="#certification" className='hover:text-gray-400'>Certifications</a>
                <a href="#achievement" className='hover:text-gray-400'>Achievements</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            
        </div>
    </nav>
  )
}

