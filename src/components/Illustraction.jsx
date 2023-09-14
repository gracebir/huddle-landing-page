import React from 'react'
import IllustrationCard from './IllustrationCard'

const Illustraction = ({ title, isReverse = false, desc, imgUrl }) => {
    return (
        <div className='grid grid-cols-1 gap-0 lg:gap-16 lg:grid-cols-2'>
            <div className={`${isReverse ? 'order-1 lg:order-2' : 'order-1'} h-[50vh] lg:h-screen`}>
                <img className='w-full h-full object-contain' src={imgUrl} alt={title} />
            </div>
            <IllustrationCard
                title={title}
                desc={desc}
                order={isReverse ? "lg:order-1 order-2" : "order-2"}
            />
        </div>
    )
}

export default Illustraction
