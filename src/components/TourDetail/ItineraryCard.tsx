import React, { useState } from 'react'
import { TimeIcon } from './TimeIcon'

interface Props {
    image: string
    title: string
    time: string
    description?: string
}

const ItineraryCard = ({ image, title, time, description }: Props) => {

    return (
        <div className='relative overflow-hidden w-[487px] h-[459px] rounded-3xl cursor-pointer'>
            <div className='w-full h-full scale-100 hover:scale-125 transform transition-all duration-700'>
                <img src={image} alt="" className='h-full w-full ' />
                <div className='w-full h-full absolute top-0 bg-gradient-to-t from-black'>
                </div>
            </div>
            <div className='text-white absolute bottom-0 p-10 font-primary '>
                <h1 className='text-3xl font-medium'>{title}</h1>
                <div className='flex gap-3 items-center mt-5 font-light'>
                    <TimeIcon width='20' height='20' fill='white' />
                    {time}
                </div>
                <div className='mt-5 font-light'>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default ItineraryCard