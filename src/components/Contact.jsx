import React, { useState } from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

 export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        setErrorMessage(null);
      })
      .catch((error) => setErrorMessage(error.message));
  };

  // Handle form input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };


    
  return (
    <div className="bg-black text-white py-20" name="contact" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to work for cloud-based solutions or internship opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:youremail@example.com" className='hover:underline'>
                    reenkuchoudhary.vs19@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+918217614897</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>Bengaluru, Karnataka, India</span>
            </div>
          </div>

          
          
             {isSubmitted ? (
          <p className="text-green-500 font-semibold">
            Thank you for your message! We'll get back to you soon.
          </p>
        ) : (
               <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            {/* Netlify hidden input */}
            <input type="hidden" name="form-name" value="contact" />

                <div className='flex-1 w-full'>
                <div>
                  <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input required 
                      type="text"
                      id="name"
                    name="name"
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Name'
                      value={formState.name}
                onChange={handleInputChange}
                      />
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input required 
                      type="email" 
                      id="email"
                     name="email"
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter You Email'
                       value={formState.email}
                onChange={handleInputChange}
                      />
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea required
                      type="text"
                      id="message"
                      name="message"
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Enter You Message'
                      value={formState.message}
                onChange={handleInputChange} 
                      />
                </div>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                  
                <button type="submit" className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full' >Submit</button>
          </div>
        </form>
      )}
        </div>
      </div>
    </div>
  );
};


