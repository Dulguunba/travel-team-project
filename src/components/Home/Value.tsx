import React, { useState } from 'react'
import { ValueCard } from './ValueCard'
import { SmileSvg } from '../icons/HomeIcons/SmileSvg'
import { MountainSvg } from '../icons/HomeIcons/MountainSvg'
import { FlagSvg } from '../icons/HomeIcons/FlagSvg'
import { TimeSvg } from '../icons/HomeIcons/TimeSvg'
import { AirplaneSvg } from '../icons/HomeIcons/AirplaneSvg'

export const Value = () => {
    const [isHoveredSmile, setIsHoveredSmile] = useState(false);
    const [isHoveredMountain, setIsHoveredMountain] = useState(false);
    const [isHoveredFlag, setIsHoveredFlag] = useState(false);
    const [isHoveredTime, setIsHoveredTime] = useState(false);
    return (
        <div className='flex items-center justify-center bg-grayColor pt-20'>
            <div className='max-w-[1520px] w-[90%] flex flex-col gap-5 justify-center items-center mb-20'>
                <div className='text-center'>
                    <p className='text-blue text-xl'>VALUES</p>
                    <h1 className='text-[100px] font-oswald font-bold'>OUR VALUES</h1>
                </div>
                <div className='flex mt-48 h-[350px] justify-between w-full'>
                    <div className='text-center w-[264px] h-[230px]' onMouseEnter={() => setIsHoveredSmile(true)} onMouseLeave={() => setIsHoveredSmile(false)}>
                        {isHoveredSmile
                            ? <ValueCard svg={<SmileSvg fill='white' />} title='Customer Delight' description='We deliver the best service
                            and experience for our customer.'/>
                            : <ValueCard svg={<SmileSvg />} title='Customer Delight' description='We deliver the best service
                            and experience for our customer.'/>
                        }
                    </div>
                    <div className='text-center w-[264px] h-[230px]' onMouseEnter={() => setIsHoveredMountain(true)} onMouseLeave={() => setIsHoveredMountain(false)}>
                        {isHoveredMountain
                            ? <ValueCard svg={<MountainSvg stroke='white' />} title='Customer Delight' description='We deliver the best service
                            and experience for our customer.'/>
                            : <ValueCard svg={<MountainSvg />} title='Customer Delight' description='We deliver the best service
                            and experience for our customer.'/>
                        }
                    </div>
                    <div className='text-center w-[264px] h-[230px]' onMouseEnter={() => setIsHoveredFlag(true)} onMouseLeave={() => setIsHoveredFlag(false)}>
                        {isHoveredFlag
                            ? <ValueCard svg={<FlagSvg stroke='white' />} title='Customer Delight' description='We deliver the best service
                            and experience for our customer.'/>
                            : <ValueCard svg={<FlagSvg />} title='Customer Delight' description='We deliver the best service
                            and experience for our customer.'/>
                        }
                    </div>
                    <div className='text-center w-[264px] h-[230px]' onMouseEnter={() => setIsHoveredTime(true)} onMouseLeave={() => setIsHoveredTime(false)}>
                        {isHoveredTime
                            ? <ValueCard svg={<TimeSvg stroke='white' />} title='Customer Delight' description='We deliver the best service
                            and experience for our customer.'/>
                            : <ValueCard svg={<TimeSvg />} title='Customer Delight' description='We deliver the best service
                            and experience for our customer.'/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
