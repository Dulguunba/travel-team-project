import React, { ReactElement } from 'react'
import { PlanningSvg } from '../icons/HomeIcons/PlanningSvg'

interface Props {
    style: string
    svg: ReactElement
    title: string
    description: string
}

export const ProcessCard = ({ style, svg, title, description }: Props) => {
    return (
        <div className={`${style} flex flex-col gap-14 items-center max-w-[211px]`}>
            <div className='transition-all hover:scale-125 ease-in-out w-40 h-40 flex justify-center items-center bg-white rounded-full'>{svg}</div>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold font-primary'>{title}</h1>
                <p className='font-primary text-base text-center mt-2'>{description}</p>
            </div>
        </div>
    )
}
