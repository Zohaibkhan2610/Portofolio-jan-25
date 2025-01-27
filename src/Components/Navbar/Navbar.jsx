import React from 'react'
import { MdChat, MdEmail, MdHome, MdPerson, MdWork } from 'react-icons/md'
import { IConsCom } from '../Main/Hero'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
function Navbar() {
  return (
    <>
        <div className="inline-flex bg-transparent justify-center h-[20vh] p-5 w-full ">
          <div className="inline-flex justify-center mt-3 sm:w-[80%] w-full items-center">
            <div className="inline-flex sm:px-8 sm:w-[90%] w-full p-1 items-center justify-evenly">
              <div className="sm:w-[120px] w-[100px] overflow-hidden border-transparent rounded-full">
                <span className='text-xl md:text-3xl sm:text-2xl font-bold font-serif'>Zohaib</span>
              </div>
              <div className="inline-flex sm:w-[250px] w-[200px] h-12 gap-4 justify-center items-center bg-[black]/30 border-transparent rounded-full">
              <Link to="/">
              <IConsCom Icon={MdHome} />
              </Link>
 
              <IConsCom Icon={MdPerson} />
              <IConsCom Icon={MdWork} />
              <IConsCom Icon={MdEmail} />
              <IConsCom Icon={MdChat} />
              </div>
            </div>
          </div>
        </div>



    </>
  )
}

export default Navbar
