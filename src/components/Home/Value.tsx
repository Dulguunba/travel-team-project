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
                    <p className='text-blue md:text-xl'>VALUES</p>
                    <h1 className='md:text-[100px] text-3xl font-oswald font-bold'>OUR VALUES</h1>
                </div>
                <div className='flex md:flex-row flex-col items-center gap-10 mt-10 md:mt-48 md:h-[350px] md:justify-between w-full'>
                    <div className='text-center md:w-[264px] md:h-[230px]' onMouseEnter={() => window.innerWidth > 768 ? setIsHoveredSmile(true) : setIsHoveredSmile(false)} onMouseLeave={() => window.innerWidth > 768 ? setIsHoveredSmile(false) : setIsHoveredSmile(true)}>
                        {isHoveredSmile
                            ? <ValueCard svg={<SmileSvg fill='white' />} title='Customer Delight' description='We deliver the best service
                            and experience for our customer.'/>
                            : <ValueCard svg={<SmileSvg />} title='Customer Delight' description='We deliver the best service
                            and experience for our customer.'/>
                        }
                    </div>
                    <div className='text-center w-[264px] h-[230px]' onMouseEnter={() => window.innerWidth > 768 ? setIsHoveredMountain(true) : setIsHoveredMountain(false)} onMouseLeave={() => window.innerWidth > 768 ? setIsHoveredMountain(false) : setIsHoveredMountain(true)}>
                        {isHoveredMountain
                            ? <ValueCard svg={<MountainSvg stroke='white' />} title='Authentic Adventure' description='We deliver the best service
                            and experience for our customer.'/>
                            : <ValueCard svg={<MountainSvg />} title='Authentic Adventure' description='We deliver the best service
                            and experience for our customer.'/>
                        }
                    </div>
                    <div className='text-center w-[264px] h-[230px]' onMouseEnter={() => window.innerWidth > 768 ? setIsHoveredFlag(true) : setIsHoveredFlag(false)} onMouseLeave={() => window.innerWidth > 768 ? setIsHoveredFlag(false) : setIsHoveredFlag(true)}>
                        {isHoveredFlag
                            ? <ValueCard svg={<FlagSvg stroke='white' />} title='Expert Guides' description='We deliver only expert
                            tour guides for our 
                            dear customer.'/>
                            : <ValueCard svg={<FlagSvg />} title='Expert Guides' description='We deliver only expert
                            tour guides for our 
                            dear customer.'/>
                        }
                    </div>
                    <div className='text-center w-[264px] h-[230px]' onMouseEnter={() => window.innerWidth > 768 ? setIsHoveredTime(true) : setIsHoveredTime(false)} onMouseLeave={() => window.innerWidth > 768 ? setIsHoveredTime(false) : setIsHoveredTime(true)}>
                        {isHoveredTime
                            ? <ValueCard svg={<TimeSvg stroke='white' />} title='Time Flexibility' description='We welcome time flexibility
                            of traveling for our 
                            dear customer.'/>
                            : <ValueCard svg={<TimeSvg />} title='Time Flexibility' description='We welcome time flexibility
                            of traveling for our 
                            dear customer.'/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
