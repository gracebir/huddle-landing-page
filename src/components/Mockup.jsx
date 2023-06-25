import React from 'react'
import screen from '../assets/screen-mockups.svg'
import communityIcon from '../assets/icon-communities.svg'

function Mockup() {
  return (
    <div className='w-full flex flex-col gap-14'>
      <div className="max-w-5xl mx-auto">
        <img className='w-full' src={screen} alt="mock" />
      </div>
      <div className='max-w-4xl mx-auto grid lg:grid-cols-3 grid-cols-1 gap-10 lg:gap-0'>
        <div className='flex flex-col gap-2 lg:gap-4 items-start'>
          <img src={communityIcon} alt="communityIcon" />
          <h1 className='lg:text-8xl text-6xl font-bold font-poppins'>1.4k+</h1>
          <p className='text-gray-400 text-lg lg:text-xl'>Communities Formed</p>
        </div>
        <div className='hidden lg:block'/>
        <div className='flex flex-col gap-2 lg:gap-4 items-start'>
          <img src={communityIcon} alt="communityIcon" />
          <h1 className='lg:text-8xl text-6xl font-bold font-poppins'>2.7m+</h1>
          <p className='text-gray-400 text-lg lg:text-xl'>Messages Sent</p>
        </div>
      </div>
    </div>
  )
}

export default Mockup
