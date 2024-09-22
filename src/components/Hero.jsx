import React from 'react'
import HeroImage from '../assets/reenku1.png'

export const Hero = () => {
  return (
    <div className='bg-black text-white h-screen text-center py-16' id="hero">
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Reenku Choudhary</span>
            , AWS Cloud Practitioner
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in designing, deploying, and maintaining cloud-based solutions.
        </p>
        <div className='mt-8 space-x-4'>
           
        <div className='w-fit px-4 py-2 mt-5 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-yellow-500'>
                        <a href="/Reenku_Choudhary_Resume.pdf" download={true}>Resume </a>
                         </div>
        </div>

    </div>
  )
}
