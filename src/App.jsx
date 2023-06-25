import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mockup from './components/Mockup'
import Illustractions from './components/Illustractions'
import Action from './components/Action'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <main className='container mx-auto px-4 lg:px-0'>
        <Hero/>
        <Mockup/>
        <Illustractions/>
        <Action/>
      </main>
      <Footer/>
    </>
  )
}

export default App

