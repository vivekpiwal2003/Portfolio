import React from 'react'
import { profileData } from '../assets/asstes.js'
import { FaCode } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.6,ease:'easeOut'}}
    viewport={{once:false,amount:0.2}}
    id='about'
    className='px-20 bg-dark-200'>

    <div id='about' className=' py-2 '>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='order-1'>
            <h2 className='text-4xl font-bold md:text-5xlmb-4'>
              <span className='text-teal-800'>About</span>
              <span className=''> Me</span>
            </h2>
            <p className='text-lg text-black-900 mb-4 mt-6'>
              Hi, I’m Vivek Piwal, a passionate Full Stack Developer who enjoys building modern, responsive, and user-friendly web applications.
            </p>
            <p className='text-lg text-black-900 mb-4'>
              I have hands-on experience with HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and Git/GitHub. I enjoy turning ideas into functional websites and continuously improving my development skills by working on real-world projects.
            </p>
            <p className='text-lg  text-black-700 mb-4'>
              I’m currently focused on strengthening my frontend and backend development skills, learning best practices, and building projects that solve real problems. I’m always curious to learn new technologies and improve my coding skills.
            </p>
            <p className='text-lg text-black-700 mb-4'>
              My goal is to grow as a professional developer, contribute to meaningful projects, and create web experiences that are fast, responsive, and easy to use.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-between gap-6 mb-6'>
              {
                profileData.map((data,index)=>(
                  <div key={index} className='w-full h-65 sm:w-50 rounded p-6 border border-zinc-400 hover:border-zinc-600 cursor-pointer hover:border-b-4 hover:border-r-4 hover:border-b-zinc hover:border-r-zinc-800 transition duration-300 hover:-translate-y-1 '>
                    <FaCode className="text-xl font-bold mb-4 "/>
                    <h1 className='text-xl font-bold mb-4'>{data.title}</h1>
                    <p className='text-lg text-black-700'>{data.technologies.join(', ')}</p>
                  </div>
                ))
              }
            </div>
         
            <a
            href="/Vivek-Piwal-Resume.pdf"
            download="Vivek_Piwal_ATS_Resume.docx"
            className="inline-block bg-zinc-700 text-white py-4 px-8 rounded-full hover:bg-zinc-900 transition duration-300">
            Download Resume
            </a>

          </div>

          <div className='order-2 relative floating'>
            <img src="https://cdnai.iconscout.com/ai-image/premium/thumb/ai-boy-standing-with-open-arms-3d-illustration-png-download-jpg-13227904.png" alt="About" className='w-full h-auto rounded-lg shadow-lg' />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default About
