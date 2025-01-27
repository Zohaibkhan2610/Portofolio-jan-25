import React from 'react'
import { motion } from 'framer-motion'
import myImg from './../../assets/me.png'
import { MdFacebook } from 'react-icons/md'
import { FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaTwitterSquare } from 'react-icons/fa'
function Hero() {
  return (
    <div>
    <section className=" flex items-center justify-center sm:h-[80vh] h-fit p-1 bg-transparent">
      <div className="text-center px-6 max-w-5xl">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-[#B2F5EA] flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8  }}
            animate={{ opacity: 1 , scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={myImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="text-left">
            <motion.h1
              className="text-2xl sm:text-4xl xl:text-6xl font-extrabold text-gray-800 mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hello, I'm <br /><span className="text-red-800">Zohaib Ur Rehman</span>
            </motion.h1>

            <motion.p
              className="text-sm md:text-xl text-gray-200 sm:mb-6 mb-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Hi, I'm a <span className='text-green-400 md:text-3xl font-extrabold'>Front End developer</span>, a passionate designer creating stunning and user-friendly designs.
            </motion.p>

            <motion.div 
              className="flex sm:gap-4 gap-2 sm:mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              < IConsCom Icon={MdFacebook}/>
              < IConsCom Icon={FaInstagram}/>
              < IConsCom Icon={FaTwitterSquare}/>
              < IConsCom Icon={FaLinkedin}/>
                       
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  )
}

export default Hero

export let IConsCom = ({Icon})=>{
  return(
    <Icon className='md:text-3xl sm:text-2xl text-xl p-[1px] text-white border-transparent rounded-full hover:bg-red-500'/>
  )
}