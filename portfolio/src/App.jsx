import { useState } from 'react'

import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import About from './components/about'
import Contact from './components/contact'
import Navigation from './components/navigation'
import './App.css'

const App = () => {
  return (
    <>
        <div className="navigation">
          <Navigation/>
        </div>
        <Hero/>
        <Projects/>
        <Skills/>
        <About/>
        <Contact/>

      
    </>
  )
}

export default App
