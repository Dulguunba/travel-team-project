import React, { useEffect, useState } from 'react'
import { DownArrow } from '../icons/HomeIcons/DownArrow'
import { getServerSideProps } from './Header'
import { Data } from './types/heroTypes'
import { PriceDropdown } from './PriceDropdown'
import { DestinationDropdown } from './DestinationDropdown'
import Header from './Header'
import { Tours } from './Header'



const Hero = ({ toursData }: { toursData: Tours }) => {
    return (
        <>
            <img src="Pic.jpg" className='md:w-full h-[500px] md:h-[1042px]' alt="" />
            <div className='absolute top-0 right-0 left-0'>
                <Header toursData={toursData} />
                <div className='md:max-w-[1520px] md:m-auto md:w-[90%] md:h-[600px] mt-8 flex md:mt-8 justify-center'>
                    <div>
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-col items-center drop-shadow-lg'>
                                <h1 className='md:text-3xl text-white font-primary md:text-[32px] text-sm md:leading-10 drop-shadow-md md:tracking-widest'>UNFORGETTABLE TRAVEL AWAITS THE</h1>
                                <h1 className='font-oswald drop-shadow-md font-bold md:text-[280px] text-[50px] text-white'>ADVENTURE</h1>
                            </div>
                            <p className='text-white font-primary font-normal p-2 md:w-[730px] text-center'>Experience the thrill of exploring the world's most fascinating destinations
                                with our expertly curated travel packages.</p>
                            <div className='bg-white md:mt-12 md:w-[791px] w-[300px] md:h-[116px] shadow-lg md:pb-10 md:p-6 flex rounded-lg md:rounded-3xl'>
                                <div className='md:flex md:justify-between md:items-center md:w-full'>
                                    {/* <DestinationDropdown data={data} /> */}
                                    <div className='border-b-2 md:border-b-0 md:border-r-2 md:pr-5 md:w-[219px] md:h-[66px] w-[203px] flex md:flex-col gap-1 md:items-start md:justify-start'>
                                        <div className='flex items-center justify-between w-full cursor-pointer'>
                                            <p className='font-medium md:text-lg text-md p-2 md:p-1'>Date</p>
                                            <div className='hidden md:block'><DownArrow fill='#4997D3' /></div>
                                        </div>
                                        <input type="date" className='text-center outline-none border-none cursor-pointer' />
                                    </div>
                                    {/* <PriceDropdown data={data} /> */}
                                    <button className='md:px-5 md:py-2 md:w-40 md:h-full md:rounded-md bg-blue text-white'>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { getServerSideProps };

export default Hero;