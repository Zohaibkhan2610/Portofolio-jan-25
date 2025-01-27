import React from 'react'
import { motion } from 'framer-motion'
function Aboutme() {
  return (
    <motion.div  initial={{opacity:0,scale:0}}
    whileInView={{opacity:1,scale:1}}
    viewport={{once:true}}
    transition={{duration:1.5}}
    exit={{opacity:0}}

    
    className='border h-[400px] rounded-xl justify-center text-left p-4 w-[60%] font-serif font-bold m-4'>
        <div className="flex">
            <span className='text-white text-3xl p-3'>Journey of my web development</span>
        </div>
      <div className="flex text-gray-200 text-left p-5">
      <span className='text-2xl capitalize'>When I started <span className='text-3xl text-green-300'>web development</span>, I was inspired by the creativity and seamless designs I saw in the field. I began with <span className='text-3xl text-green-300'>HTML</span> for structure, then learned <span className='text-3xl text-green-300'>CSS</span> for styling, <span className='text-3xl text-green-300'>JavaScript</span> for interactivity, and finally <span className='text-3xl text-green-300'>React</span> to build modern, dynamic applications. Each step deepened my passion for creating engaging web experiences</span>
      </div>
    </motion.div>
  )
}

export default Aboutme
