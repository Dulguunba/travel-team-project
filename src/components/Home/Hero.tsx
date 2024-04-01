import React, { useEffect, useState } from 'react'
import { DownArrow } from '../icons/HomeIcons/DownArrow'
import { getServerSideProps } from './fetchTravelDatas'
import { Tours } from '../../types/toursTypes'
import { PriceDropdown } from './PriceDropdown'
import Header from './Header'
import DestinationDropdown from './DestinationDropdown'
import { Travel } from '../../types/travelTypes'



const Hero = ({ toursData }: { toursData: Tours }) => {
    console.log('travel', toursData)
    return (
        <>
            <img src="Pic.jpg" className='md:w-full h-[700px] md:h-[1042px]' alt="" />
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
                            <div className='bg-white md:mt-12 md:w-[791px] w-[300px] md:h-[116px] shadow-lg mt-4 md:pb-6 md:p-6 flex rounded-lg md:rounded-3xl'>
                                <div className='flex md:flex-row flex-col md:justify-between w-full items-center md:w-full'>
                                    <DestinationDropdown toursData={toursData} />
                                    <div className='border-b-2 md:border-b-0 md:border-r-2 md:pr-5 md:w-[219px] md:h-[66px] flex flex-col md:flex-col gap-1 items-start md:justify-start w-full pb-2'>
                                        <div className='flex items-center justify-between w-full cursor-pointer'>
                                            <p className='font-medium md:text-lg text-md p-2 md:p-1'>Date</p>
                                            {/* <div className='hidden md:block'><DownArrow fill='#4997D3' /></div> */}
                                        </div>
                                        <input type="date" className='text-sm text-center outline-none border-none cursor-pointer' />
                                    </div>
                                    {/* <PriceDropdown data={data} /> */}
                                    <button className='px-5 py-2 md:mt-0 md:mb-0 mt-2 mb-2 md:w-40 md:h-full rounded-md bg-blue text-white'>
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
};

export { getServerSideProps };

export default Hero;
