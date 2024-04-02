import React from 'react'
import { Line } from '../icons/HomeIcons/Line'
import { PlanningSvg } from '../icons/HomeIcons/PlanningSvg'
import { ProcessCard } from './ProcessCard'
import { CalendarSvg } from '../icons/HomeIcons/CalendarSvg'
import { TripSvg } from '../icons/HomeIcons/TripSvg'
import { AirplaneSvg } from '../icons/HomeIcons/AirplaneSvg'
import { PageTitleDesign } from './PageTitleDesign'

export const Process = () => {
    return (
        <div className='mt-20 w-full md:h-[1018px] flex justify-center md:pb-0 pb-20 pt-20 bg-[#F6F6F6]'>
            <div className='md:max-w-[1520px] md:w-[90%]'>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col'>
                        <PageTitleDesign title='PROCESS' textColor='text-white' frontText='HOW IT WORKS' />
                        <div className='md:mt-20'>
                            <div className='relative mt-20'>
                                <div className='md:block hidden'><Line /></div>
                                <ProcessCard style='md:absolute md:top-0 md:-left-28' svg={<PlanningSvg />} title='Trip Planning' description='We plan on what to do during the trip days.' />
                                <ProcessCard style='md:absolute md:top-[93px] md:left-[280px]' svg={<CalendarSvg />} title='Trip Booking' description='We book the necessary hotel and travels for your trip.' />
                                <ProcessCard style='md:absolute md:-top-16 md:right-[270px]' svg={<TripSvg />} title='Trip Preparation' description='We prepare all accommodation
and trip necessities.' />
                                <ProcessCard style='md:absolute md:top-24 md:-right-28' svg={<AirplaneSvg />} title='Trip Experience' description='We give you the best travel
experience with our tour guide.' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
