import { TravelType } from '@/pages/types/travelType'
import React from 'react'

export const About = ({ travelData }: { travelData: TravelType[] }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-[url('/place.png')] bg-no-repeat bg-cover">
            <div className='flex max-w-[1520px] w-[90%] py-5 flex-col h-[600px] md:h-[950px]'>
                <div className='flex items-center justify-center h-full flex-col'>
                    <p className='text-white'> Home    |   Destination</p>
                    <h1 className='font-oswald text-white font-bold  md:text-[200px] md:leading-[200px]  text-[40px] leading-[50px]'>DESTINATION</h1>
                </div>
            </div>
        </div>

    )
}
