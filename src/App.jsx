import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Support from './components/Support'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Team />
     <Support />
    </>
  )
}

export default App
