import React from 'react'

 export const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Reenkz</div>
            <div className='space-x-6'>
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

