import React, { ReactElement } from 'react'
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
    return (
        <div className='w-[264px] h-[230px] flex flex-col justify-center items-center cursor-pointer rounded-3xl hover:bg-blue hover:text-white hover:w-[357px] hover:h-[347px] hover:-translate-y-10 transition ease-out duration-300 hover:p-5'>
            {svg}
            <div className='text-center mt-8 flex gap-2 flex-col'>
                <h1 className='font-medium font-primary text-[20px]'>{title}</h1>
                <p className='font-primary'>{description}</p>
            </div>
        </div>
    )
}
