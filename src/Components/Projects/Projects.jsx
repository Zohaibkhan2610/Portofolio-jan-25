import React from 'react'
import Img1 from './../../assets/me.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
function Projects() {
  return (
    <motion.div
    initial={{ opacity: 0,y:50 }}
    whileInView={{ opacity: 1,y:0 }}
    transition={{ duration: 1 }}
    exit={{ opacity: 0,y:50 }}


     className='sm:flex grid justify-center items-center gap-3 md:gap-10 m-2 h-fit md:h-[80vh] p-2'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
    </motion.div>
  )
}

export default Projects

let ProjectCard = ()=>{
  return(
    <>
    <div className="grid sm:w-80 w-full bg-white/30 border-2 rounded-3xl overflow-hidden justify-center items-center p-4">
      <img className='w-[95%] border-transparent border-2 p-3 rounded-3xl overflow-hidden' src={Img1} alt="" />
      <div className="grid justify-start items-center p-3">
        <p className='text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-50 mb-2'>Project</p>
        <Link className='text-sm sm:text-lg md:text-2xl p-2 font-bold text-gray-200 hover:text-black sm:mb-2  bg-gray-400 py-3 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-400 duration-700'>click here</Link>
      </div>
    </div>
    </>
  )
}