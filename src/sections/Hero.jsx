import React from 'react'

const Hero = () => {
    return (
        <div className='lg:h-screen h-[50vh] flex items-center'>
            <div className='text-center flex flex-col flex-1 gap-10 lg:gap-16 items-center mx-auto'>
                <h1 className='text-color-dark-cyan text-3xl lg:text-6xl leading-10 font-poppins font-bold'>Build The Community Your Fans Will Love</h1>
                <p className='text-color-dark-cyan text-sm lg:text-2xl font-medium lg:max-w-3xl lg:px-8'>
                    Huddle re-imagines the way we build communities. You have a voice, but so does
                    your audience. Create connections with your users as you engage in genuine discussion.
                </p>
                <a href='#' className="bg-color-pink hover:bg-color-light-pink text-color-pale-blue font-bold lg:w-[30rem] w-auto lg:text-2xl px-8 lg:px-0 py-3 shadow-lg lg:py-7 rounded-full text-sm"> Get Started For Free</a>
            </div>
        </div>
    )
}

export default Hero
