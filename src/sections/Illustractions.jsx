import React from 'react'
import Illustration from '../components/Illustraction'
import { data } from '../utils/data'


function Illustractions() {
  return (
    <section className='w-full flex flex-col'>
      <div className='container mx-auto px-6 lg:px-0'>
        {data.map((item)=> (
          <Illustration {...item} key={item.id}/>
        ))}
      </div>
    </section>
  )
}

export default Illustractions
