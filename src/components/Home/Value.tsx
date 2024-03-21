import React from 'react'
import { ValueCard } from './ValueCard'
import { SmileSvg } from '../icons/HomeIcons/SmileSvg'
import { MountainSvg } from '../icons/HomeIcons/MountainSvg'
import { FlagSvg } from '../icons/HomeIcons/FlagSvg'
import { TimeSvg } from '../icons/HomeIcons/TimeSvg'

export const Value = () => {
    return (
        <div className='flex items-center justify-center bg-grayColor pt-20'>
            <div className='max-w-[1520px] w-[90%] flex flex-col gap-5 justify-center items-center mb-20'>
                <div className='text-center'>
                    <p className='text-blue text-xl'>VALUES</p>
                    <h1 className='text-[100px] font-oswald font-bold'>OUR VALUES</h1>
                </div>
                <div className='flex mt-28 justify-between w-full'>
                    <ValueCard svg={<SmileSvg />} title='Customer Delight' description='We deliver the best service
and experience for our customer.'/>
                    <ValueCard svg={<MountainSvg />} title='Customer Delight' description='We deliver the best service
and experience for our customer.'/>
                    <ValueCard svg={<FlagSvg />} title='Customer Delight' description='We deliver the best service
and experience for our customer.'/>
                    <ValueCard svg={<TimeSvg />} title='Customer Delight' description='We deliver the best service
and experience for our customer.'/>
                </div>
            </div>
        </div>
    )
}
