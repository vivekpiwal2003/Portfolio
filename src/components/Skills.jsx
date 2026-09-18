import React from 'react'
import { skillsData } from '../assets/asstes.js'
import { motion } from 'framer-motion'

const Skills = () => {
    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='skills'
            className='px-6 md:px-12 lg:px-20 bg-dark-200'
        >

            <div className='py-20'>

                <div className='max-w-7xl mx-auto px-6'>

                    {/* Heading */}
                    <div className='text-center mb-14'>

                        <h2 className='text-4xl sm:text-5xl font-bold mb-6 text-slate-800'>
                            <span className='text-teal-700'>
                                Technical
                            </span>{' '}
                            Skills
                        </h2>

                        <p className='text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto'>
                            Technologies and tools I use to build modern,
                            responsive and scalable web applications.
                        </p>

                    </div>


                    {/* Skills Cards */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6'>

                        {skillsData.map((skill, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                                viewport={{ once: true }}

                                whileHover={{
                                    y: -8,
                                    scale: 1.03
                                }}

                                className='group border border-teal-700 bg-teal-50/10 p-6 rounded-2xl cursor-pointer text-center hover:border-teal-800 hover:shadow-xl transition-all duration-300'
                            >

                                {/* Icon */}
                                <div className='w-16 h-16 mx-auto rounded-full flex items-center justify-center border border-gray-300 bg-gray-50 mb-6 group-hover:bg-teal-50 transition duration-300'>

                                    <skill.icon
                                        className='w-8 h-8 text-teal-700 group-hover:scale-110 transition duration-300'
                                    />

                                </div>


                                {/* Title */}
                                <h3 className='text-lg font-bold text-slate-800 mb-4'>
                                    {skill.title}
                                </h3>


                                {/* Technologies */}
                                <div className='flex flex-wrap justify-center gap-2'>

                                    {skill.technologies.map(
                                        (technology, techIndex) => (

                                            <span
                                                key={techIndex}
                                                className='px-2.5 py-1 bg-white/70 border border-gray-200 rounded-full text-xs font-medium text-slate-600'
                                            >
                                                {technology}
                                            </span>

                                        )
                                    )}

                                </div>

                            </motion.div>

                        ))}

                    </div>


                    {/* Bottom Text */}
                    <div className='text-center mt-12'>

                        <p className='text-sm text-slate-500'>
                            Continuously learning and improving my development skills.
                        </p>

                    </div>

                </div>

            </div>

        </motion.div>
    )
}

export default Skills

