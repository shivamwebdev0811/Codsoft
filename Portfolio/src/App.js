import React from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'
import './App.css'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <div className='z-[200]'>
        <Header/>
      </div>
      <div className='fixed'>
        <SideBar/>
      </div>
      <div className='relative h-screen w-screen flex justify-start items-center left-[20%] '>
        <About/>
      </div>
      
      <div>
        <Skills/>
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <Footer/>
      </div>
     
    </div>
    
  )
}

export default App