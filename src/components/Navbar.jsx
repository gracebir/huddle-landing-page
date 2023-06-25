import React from 'react'
import logo from '../assets/logo.svg'

function Navbar() {
  return (
    <header className='container mx-auto py-10 px-4 lg:px-0'>
      <nav className='flex justify-between items-center'>
        <a href="#">
            <img className="lg:w-40 w-32" src={logo} alt="logo" />
        </a>
        <button className='lg:px-8 py-2 px-6 border border-color-light-pink rounded-full text-color-light-pink text-xs lg:text-sm hover:shadow-md hover:shadow-color-light-pink'>Try it Free</button>
      </nav>
    </header>
  )
}

export default Navbar
