import React from 'react';
import { IConsCom } from '../Main/Hero';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { MdHtml } from 'react-icons/md';
import { motion } from 'framer-motion';
function AboutWork() {


  return (
    <motion.div 
    initial={{opacity:0,scale:0}}
    whileInView={{opacity:1,scale:1}}
    viewport={{once:true}}
    transition={{duration:1.5}}
    exit={{opacity:0,scale:0}}
    className='border h-fit rounded-xl justify-center text-left md:p-8 p-4 md:w-[60%] w-[90%] font-serif font-bold m-4'>
      <WorkTitle
        Title="Skill"
        SkillF="Web Development:"
        SkillSen="UI/UX Design:"
        AboutSkill1={<IConsCom Icon={MdHtml} />}
        AboutSkill2={<IConsCom Icon={FaCss3Alt} />}
        AboutSkill3={<IConsCom Icon={RiJavascriptFill} />}
        AboutSkill4={<IConsCom Icon={FaReact} />}
      />
      <WorkTitle
        Title="Education"
        SkillF="ICS"/>
      <WorkTitle Title="Experenice" SkillF="Year" AboutSkill1="1 Year 6 Month"/>
    </motion.div>
  );
}

export default AboutWork;

let WorkTitle = ({ Title, SkillF, SkillSen, SkillThrid, AboutSkill1, AboutSkill2, AboutSkill3, AboutSkill4,SkillID }) => {
  return (
    <motion.div
    initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      viewport={{once:true}}
      transition={{duration:1.5}}
       className='text-left m-2 p-2'>
      <h1 id={SkillID} className='text-gray-100 text-3xl mb-4'>{Title}</h1>
      <div className="inline-flex flex-col pl-5">
        <div className="sm:flex grid text-left md:gap-4 gap-2">
          <span className='text-gray-300 mb-0'>{SkillF}</span>
          <span className='flex gap-2 text-gray-100 mb-4'>
            {AboutSkill1}
            {AboutSkill2}
            {AboutSkill3}
            {AboutSkill4}
          </span>
        </div>
        <div className="flex">
          <span className='text-gray-300 mb-1'>{SkillSen}</span>
        </div>
        <div className="flex">
          <span className='text-gray-300 mb-1'>{SkillThrid}</span>
        </div>
      </div>
    </motion.div>
  );
}
