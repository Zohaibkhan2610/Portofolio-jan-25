import React from 'react'
import Aboutme from './Aboutme'
import AboutWork from './AboutWork'
import { motion } from 'framer-motion'

function About() {
  return (
    <div id='About' className="flex bg-transparent my-4 h-fit justify-center overflow-hidden">
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{once:true}}
      transition={{duration:1.5}}
      exit={{opacity:0}}
        className="flex md:px-[5%] h-fit justify-center items-center flex-col"
      >
        <motion.h1
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{once:true}}
        transition={{duration:1.5}} 
        className='text-gray-100 font-extrabold text-2xl sm:text-4xl xl:text-6xl mb-4'>About</motion.h1>
        <Aboutme />
        <AboutWork />
      </motion.div>
    </div>
  )
}

export default About
