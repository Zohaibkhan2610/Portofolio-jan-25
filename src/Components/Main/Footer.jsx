import React from 'react'
import { MdEmail, MdHome, MdPerson, MdWork } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { IConsCom } from './Hero'

function Footer() {
  return (
    <div className="flex w-full flex-col justify-center items-center">
         <div className='flex flex-col bg-[red]/30 border-transparent rounded-2xl border w-fit p-3 justify-center items-center my-5'>
      <p className='md:text-3xl text-xl mb-2 font-serif font-bold text-center w-full text-gray-200'>Copyright by Zohaib</p>
      <div className="inline-flex sm:w-[250px] w-[200px] h-12 gap-4 justify-center items-center md:bg-[black]/30 border-transparent rounded-full">
              <Link to="/">
              <IConsCom Icon={MdHome} />
              </Link>
              <Link to="/About"> <IConsCom Icon={MdPerson} /></Link>
              <Link to="/Projects"> <IConsCom Icon={MdWork} /></Link>
              <Link to="/Email"> <IConsCom Icon={MdEmail} /></Link>
              
              </div>
    </div>
    </div>
   
  )
}

export default Footer
