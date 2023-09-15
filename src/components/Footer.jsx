import React from 'react'
import { messageicon } from '../assets/index'
import { footerContact, footerSocials } from '../utils/data'
import Form from './Form'

function Footer() {
  return (
    <footer className="lg:h-[80vh] min-h-screen grid grid-rows-6">
      <div className='row-span-1 lg:row-span-2 lg:bg-bfooter-desk bg-bottom bg-contain bg-bfooter-mob bg-no-repeat lg:bg-contain lg:bg-bottom'>
      </div>
      <div className='bg-color-dark-cyan lg:row-span-4 row-span-5 text-color-pale-blue flex items-center'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-12 container mx-auto px-6 lg:px-0 pb-8 lg:pb-0'>
          {/* info footer side */}
          <div className='flex flex-col gap-6 lg:gap-12 order-2 lg:order-1'>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-2 items-center'>
                <img className='fill-white' src={messageicon} alt="footer-logo" />
                <h1 className='font-poppins text-3xl lg:text-5xl font-bold'>Huddle</h1>
              </div>
              <p className='lg:text-base text-sm max-w-sm'>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a,
                ultrices quis sem.
              </p>
              {footerContact.map((item) => (
                <div key={item.text} className='flex items-center gap-4'>
                  <img src={item.icon} alt={item.text} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            <div className='flex space-x-5'>
              {footerSocials.map(({id, Icon})=> (
                <a key={id} className='text-color-pale-blue hover:text-cyan' href="#">
                  <Icon size={30}/>
                </a>
              ))}
            </div>
          </div>
          {/* news side */}
          <div className='flex flex-col gap-4 lg:gap-8 order-1 lg:order-2'>
            <h1 className='text-2xl lg:text-3xl font-bold uppercase'>Newsletter</h1>
            <p className='max-w-sm'>
              To recieve tips on how to grow your community,
              sign up to our weekly newsletter. We’ll never
              send you spam or pass on your email address
            </p>
            <Form/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
