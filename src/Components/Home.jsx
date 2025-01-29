import React from 'react'
import Hero from './Main/Hero'
import About from './About/About'
import Projects from './Projects/Projects'
import Email from './Email/Email'
function Home() {
  return (
    <div className='overflow-hidden'>
    <Hero/>
    <About/>
    <Projects/>
    <Email/>
    </div>
  )
}

export default Home
