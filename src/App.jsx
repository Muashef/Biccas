import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Support from './components/Support'
import Features from './components/Features'
import Metrics from './components/Metrics'
import Benefit from './components/Benefit'
import Plan from './components/Plan'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <Team />
     <Support />
     <Features />
     <Metrics />
     <Benefit />
     <Plan />
    </>
  )
}

export default App
