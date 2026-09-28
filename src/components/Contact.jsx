import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter, FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.6,ease:'easeOut'}}
    viewport={{once:false,amount:0.2}}
    id='contact'
    className='px-20 bg-dark-200'>


        <div id='contact' className='container mx-auto px-6'>

            <div className='text-center'>
                <h2 className='text-4xl font-bold md:text-5xl mb-4'>
                    <span className='text-teal-800'>Get In</span>
                    <span className=''> Touch</span>
                </h2>
                <p className='text-lg text-black-700 mb-4 mt-6'>
                    I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through the contact form below or via email.
                </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12max-w-5xl mx-auto'>
                {/* Contact Form */}
                <div>
                    <form className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-black mb-2'>Your Name</label>
                            <input type="text" placeholder='Enter Your Name'
                            className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-black mb-2'>Email-Adress</label>
                            <input type="text" placeholder='Enter Your Email'
                             className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-black mb-2">Your Message</label>
                            <textarea
                            id="message"
                            placeholder="Enter Your Message"
                            className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none text-left align-top resize-none"
                            ></textarea>
                        </div>


                        <div className='flex justify-center items-center'>
                            <button type='sumbit' 
                                 className='flex items-start gap-2 px-8 py-4 bg-zinc-800 text-white text-center hover:bg-zinc-900 transition rounded-full cursor-pointer'>Send Message <FaArrowRight/></button>
                        </div>
                    </form>
                </div>

                {/* Contact Information */}
                <div className='space-y-10'>
                    <div className='flex items-center ml-20 '>
                        <div className='w-12 h-12 flex items-center justify-center rounded-full bg-dark-300 text-purple text-2xl mr-4 flex-shrink-0'>
                            <FaMapMarkerAlt/>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2 '>Location</h3>
                            <p className='text-black'>New Delhi, Harsh Vihar</p>
                        </div>
                    </div>

                    <div className='flex items-center ml-20'>
                        <div className='w-12 h-12 flex items-center justify-center rounded-full bg-dark-300 text-purple text-2xl mr-4 flex-shrink-0'>
                            <FaEnvelope/>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2 '>Email</h3>
                            <p className='text-black'>Vivekpiwal2003@gmail.com</p>
                        </div>
                    </div>

                    <div className='flex items-center ml-20'>
                        <div className='w-12 h-12 flex items-center justify-center rounded-full bg-dark-300 text-purple text-2xl mr-4 flex-shrink-0'>
                            <FaPhone/>
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2 '>Phone</h3>
                            <p className='text-black'>+91 8448269828</p>
                        </div>
                    </div>

                    <div className='pt-4 ml-24'>
                        <h3 className='text-2xl font-semibold mb-4'>Follow Me</h3>
                        <div className='flex space-x-4'>
                            <a href="https://github.com/vivekpiwal2003" className='w-12 border rounded-full h-12 bg-dark-300 flex items-center justify-center text-purple hover:bg-purple-600  hover:text-white transition duration-300'>
                                <FaGithub/>
                            </a>
                            <a href="https://www.linkedin.com/in/vivekpiwal2003" className='w-12 border rounded-full h-12 bg-dark-300 flex items-center justify-center text-purple hover:bg-blue-400  hover:text-white transition duration-300'>
                                <FaLinkedin/>
                            </a>
                            <a href="https://x.com/vivekpiwal_1" className='w-12 border rounded-full h-12 bg-dark-300 flex items-center justify-center text-purple hover:bg-blue-600  hover:text-white transition duration-300'>
                                <FaTwitter/>
                            </a>
                            <a href="https://www.instagram.com/vivekpiwal_1" className='w-12 border rounded-full h-12 bg-dark-300 flex items-center justify-center text-purple hover:bg-red-500  hover:text-white transition duration-300'>
                                <FaInstagram/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </motion.div>
   
   
  )
}

export default Contact

