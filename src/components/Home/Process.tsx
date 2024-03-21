import React from 'react'
import { Line } from '../icons/Line'
import { PlanningSvg } from '../icons/PlanningSvg'
import { ProcessCard } from './ProcessCard'
import { CalendarSvg } from '../icons/CalendarSvg'
import { TripSvg } from '../icons/TripSvg'
import { AirplaneSvg } from '../icons/AirplaneSvg'

export const Process = () => {
    return (
        <div className='flex justify-center items-center bg-[#F6F6F6]'>
            <div className='max-w-[1520px] w-[90%]'>
                <div className='mt-20 mb-20 flex justify-center items-center'>
                    <div className='flex flex-col'>
                        <div className='relative flex items-center justify-center'>
                            <h1 className='font-oswald text-[200px] text-white drop-shadow-md'>PROCESS</h1>
                            <p className='absolute flex justify-center top-1/2 font-primary tracking-widest text-3xl text-blue'>HOW IT WORKS</p>
                        </div>
                        <div className='mt-20'>
                            <div className='relative'>
                                <Line />
                                <ProcessCard style='absolute top-0 -left-28' svg={<PlanningSvg />} title='Trip Planning' description='We plan on what to do
during the trip days.'/>
                                <ProcessCard style='absolute top-[93px] left-[280px]' svg={<CalendarSvg />} title='Trip Booking' description='We book the necessary
hotel and travels for your trip.'/>
                                <ProcessCard style='absolute -top-16 right-[270px]' svg={<TripSvg />} title='Trip Booking' description='We book the necessary
hotel and travels for your trip.'/>
                                <ProcessCard style='absolute top-24 -right-28' svg={<AirplaneSvg />} title='Trip Booking' description='We book the necessary
hotel and travels for your trip.'/>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
