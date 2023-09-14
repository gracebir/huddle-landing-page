import React from 'react'

const IllustrationCard = ({title, desc, order}) => {
  return (
    <div className={`h-[40vh] lg:h-screen ${order} flex  items-start lg:items-center`}>
      <div className='flex flex-col items-center lg:items-start gap-6 lg:gap-8 max-w-xl text-color-dark-cyan'>
        <h1 className='text-2xl lg:text-4xl font-poppins font-bold'>{title}</h1>
        <p className='text-sm text-center lg:text-start lg:text-lg lg:leading-7 font-normal'>{desc}</p>
      </div>
    </div>
  )
}

export default IllustrationCard
