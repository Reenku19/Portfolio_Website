import React from 'react'
import python from '../assets/python.png'
import aws from '../assets/aws.jpeg'
import react from '../assets/react.png'
import java from '../assets/java.png'
import github from '../assets/github.png'
import c from '../assets/c-.png'
import mysql from '../assets/mysql.png'
import terraform from '../assets/terraform.png'

export const Skills = () => {


    const technology = [
        {
            id: 1,
            icon: python,
            title: 'Python'
        },
       {
            id: 2,
            icon: aws,
            title: 'AWS'
        },
        {
            id: 3,
            icon: react,
            title: 'React'
        },
        {
            id: 4,
            icon: mysql,
            title: 'MySql'
        },
        {
            id: 5,
            icon: github,
            title: 'Github'
        },
        {
            id: 6,
            icon: c,
            title: 'C++'
        },
        {
            id: 7,
            icon: java,
            title: 'Java'
        },
        {
            id: 8,
            icon: terraform,
            title: 'Terraform'
        },
   
    ]
    return (
        <div name="skills" className='w-full md:min-h-screen bg-black' id="skill">
            <div className='max-w-screen-lg p-4 h-full w-full mx-auto flex flex-col justify-center items-center md:items-start text-white'>
                <div className='py-6 sm:text-center'>
                    <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500 '>Skills</h2>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {technology.map(({ id, icon, title }) => (
                        <div key={id} className='shadow-md hover:scale-100 duration-200 py-4 rounded-lg shadow-yellow-500'>
                            <img src={icon} alt=" " className='mx-auto' />
                            <p className='text-2xl mt-4 text-white'>{title}</p>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}
