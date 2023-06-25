import React from 'react'

const Hero = () => {
    return (
        <div className='lg:h-[70vh] h-[50vh]  flex items-center'>
            <div className='text-center flex flex-col gap-10 lg:gap-12 items-center  mx-auto'>
                <h1 className='text-color-dark-cyan text-3xl lg:text-5xl leading-10 font-poppins font-bold'>Build The Community Your Fans Will Love</h1>
                <p className='text-color-dark-cyan text-sm lg:text-base font-semibold lg:max-w-xl lg:px-8'>
                    Huddle re-imagines the way we build communities. You have a voice, but so does
                    your audience. Create connections with your users as you engage in genuine discussion.
                </p>
                <button className="bg-color-pink hover:bg-color-light-pink text-color-pale-blue font-bold px-8 lg:px-12 py-3 shadow-lg lg:py-5 rounded-full text-sm"> Get Started For Free</button>
            </div>

        </div>
    )
}

export default Hero
