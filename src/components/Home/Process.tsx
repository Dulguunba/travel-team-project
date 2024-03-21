import React from 'react'
import { Line } from '../icons/HomeIcons/Line'
import { PlanningSvg } from '../icons/HomeIcons/PlanningSvg'
import { ProcessCard } from './ProcessCard'
import { CalendarSvg } from '../icons/HomeIcons/CalendarSvg'
import { TripSvg } from '../icons/HomeIcons/TripSvg'
import { AirplaneSvg } from '../icons/HomeIcons/AirplaneSvg'
import { PageTitleDesign } from '../PageTitleDesign'

export const Process = () => {
    return (
        <div className='mt-20 h-[1018px] flex justify-center pt-20 bg-[#F6F6F6]'>
            <div className='max-w-[1520px] w-[90%]'>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col'>
                        <PageTitleDesign title='PROCESS' textColor='text-white' frontText='HOW IT WORKS' />
                        <div className='mt-20'>
                            <div className='relative'>
                                <Line />
                                <ProcessCard style='absolute top-0 -left-28' svg={<PlanningSvg />} title='Trip Planning' description='We plan on what to do during the trip days.' />
                                <ProcessCard style='absolute top-[93px] left-[280px]' svg={<CalendarSvg />} title='Trip Booking' description='We book the necessary hotel and travels for your trip.' />
                                <ProcessCard style='absolute -top-16 right-[270px]' svg={<TripSvg />} title='Trip Booking' description='We book the necessary hotel and travels for your trip.' />
                                <ProcessCard style='absolute top-24 -right-28' svg={<AirplaneSvg />} title='Trip Booking' description='We book the necessary hotel and travels for your trip.' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
