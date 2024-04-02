import React, { ReactElement, useState } from 'react'
import { SmileSvg } from '../icons/HomeIcons/SmileSvg'
import { MountainSvg } from '../icons/HomeIcons/MountainSvg'
import { TimeSvg } from '../icons/HomeIcons/TimeSvg'
import { FlagSvg } from '../icons/HomeIcons/FlagSvg'

interface Props {
    svg: ReactElement
    title: string
    description: string
}

export const ValueCard = ({ svg, title, description }: Props) => {
    // const [isHovered, setIsHovered] = useState(false);
    // const handleMouseEnter = () => {
    //     setIsHovered(true);
    // }
    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    // }

    return (
        <div className='md:w-[264px] md:h-[230px] flex flex-col justify-center items-center cursor-pointer rounded-3xl md:hover:bg-blue md:hover:text-white md:hover:scale-125 md:hover:-translate-y-10 transition ease-out duration-300 md:hover:p-5'>
            {svg}
            < div className='text-center mt-8 flex gap-2 flex-col' >
                <h1 className='font-medium font-primary text-[20px]'>{title}</h1>
                <p className='font-primary'>{description}</p>
            </div >
        </div >
    )
}