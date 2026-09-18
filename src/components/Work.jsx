import React, { useRef } from 'react'
import { projectData } from '../assets/asstes.js'
import { motion } from 'framer-motion'
import { FaGithub, FaArrowRight } from 'react-icons/fa6'

const Work = () => {

    const scrollRef = useRef(null)

    const handleWheel = (e) => {
        if (scrollRef.current) {
            e.preventDefault()
            scrollRef.current.scrollLeft += e.deltaY
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='work'
            className='px-6 md:px-12 lg:px-20 bg-dark-200'>

            <div className='py-20'>

                <div className='max-w-7xl mx-auto'>

                    {/* Heading */}
                    <div className='mb-12 text-center'>
                        <h2 className='text-4xl sm:text-5xl font-bold text-slate-800 mb-4'>
                          Featured
                          <span className='text-teal-600'> Projects</span>
                        </h2>
                        <p className='text-slate-600 text-lg sm:text-xl'>
                          Here are some of my recent works
                        </p>
                    </div>

                    {/* Projects */}
                    <div
                        ref={scrollRef}
                        onWheel={handleWheel}
                        className='flex gap-6 overflow-x-auto pb-8 cursor-grab active:cursor-grabbing'
                        style={{
                            scrollbarWidth: 'thin',
                            scrollBehavior: 'smooth'
                        }}>
                        {projectData.map((project, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.25 }}
                                className='group min-w-[300px] sm:min-w-[340px] lg:min-w-[360px] bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition duration-300 flex-shrink-0'>

                                {/* Project Image */}
                                <div className='relative h-52 overflow-hidden bg-gray-100'>

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className='w-full h-full object-cover group-hover:scale-110 transition duration-500'
                                    />

                                    {/* Overlay */}
                                    <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center'>

                                        <a
                                            href={project.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='flex items-center gap-2 px-5 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-teal-500 hover:text-white transition'
                                        >
                                            <FaGithub />
                                            View Code
                                            <FaArrowRight />
                                        </a>

                                    </div>

                                </div>


                                {/* Project Details */}
                                <div className='p-6'>

                                    <h3 className='text-xl font-bold text-slate-800 mb-3'>
                                        {project.title}
                                    </h3>

                                    <p className='text-slate-600 text-sm leading-6 min-h-[72px]'>
                                        {project.description}
                                    </p>


                                    {/* Technologies */}
                                    <div className='flex flex-wrap gap-2 mt-5'>

                                        {project.tech.map((language, techIndex) => (

                                            <span
                                                key={techIndex}
                                                className='px-3 py-1 bg-gray-100 text-slate-700 text-xs rounded-full font-semibold'
                                            >
                                                {language}
                                            </span>

                                        ))}

                                    </div>


                                    {/* GitHub */}
                                    <a
                                        href={project.github}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='inline-flex items-center gap-2 mt-6 text-teal-600 font-semibold hover:text-teal-800 transition'
                                    >
                                        <FaGithub />
                                        GitHub
                                        <FaArrowRight className='text-sm' />
                                    </a>

                                </div>

                            </motion.div>

                        ))}

                    </div>


                    {/* Scroll Hint */}
                    <div className='text-center mt-4'>

                        <p className='text-sm text-slate-500'>
                            ← Scroll to explore more projects →
                        </p>

                    </div>

                </div>

            </div>

        </motion.div>
    )
}

export default Work