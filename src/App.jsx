import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Support from './components/Support'
import Features from './components/Features'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Team />
     <Support />
     <Features />
    </>
  )
}

export default App
