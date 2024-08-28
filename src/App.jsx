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
import About from './components/About'
import Footer from './components/Footer'

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
     <About />
     <Footer />
    </>
  )
}

export default App
