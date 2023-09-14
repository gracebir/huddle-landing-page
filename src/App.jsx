import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Mockup from './sections/Mockup'
import Illustractions from './sections/Illustractions'
import Action from './sections/Action'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='container mx-auto px-4 lg:px-0'>
        <Hero />
        <Mockup />
      </main>
      <Illustractions />
      <Action />
      <Footer />
    </>
  )
}

export default App

