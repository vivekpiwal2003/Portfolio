import React from 'react'
import {motion} from 'framer-motion'
import { assets } from '../assets/asstes.js'


const Hero = () => {
  return (
    <motion.div
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.6,ease:'easeOut'}}
    viewport={{once:false,amount:0.2}}
    id='home'
    className='px-20 bg-dark-200'>

    <div id="home" className='min-h-screen flex items-center pt-16 gap-6'>
        <div className='max-w-7xl mx-auto px-6 py-20 flex gap-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                {/* Rigt side wala  */}

                <div className='text-center lg:text-left'>
                    <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-10'>
                        <span className=" text-zinc-800 typewriter ">FullStack Developer</span>
                        <br></br>
                        <span className=" text-2xl text-cyan-600">React.JS || Express.JS</span>
                    </h1>
                    <p className='text-xl  text-zinc-900 mb-6 '>
                        I create stunning web experiences with modern technologies and innovative designs.
                    </p>
                    <div className='flex flex-col md:flex-row items-center gap-4'>
                        <button
                         onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })} className="flex gap-2 items-center px-10 py-4 bg-gray-800 rounded-full text-slate-200 hover:bg-black cursor-pointer transition duration-300">View Work</button>
                        <button
                         onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="flex gap-2 items-center px-10 py-4 bg-transparent border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white cursor-pointer transition duration-300">Contact Me</button>
                    </div>
                </div>

                {/* Left Image  side wala  */}

                <div className='flex justify-center'>
                    <div className='relative  w-80 h-80 sm:w-82 sm:h-82 floating '>
                        <div className='absolute inset-0 rounded-2xl overflow-hidden border-4 border-slate-600/30 glow '>
                        <img src={assets.profileImg} alt='Profile' className='w-full h-full object-cover'/>
                        </div>
                    </div>
                </div>

            </div>

        </div>
      
    </div>
    </motion.div>
  )
}

export default Hero
