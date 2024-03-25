import React from 'react'
import { DownArrow } from '../icons/destinaton/DownArrow'
import { Header } from '../Header'

export const Hero = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(Pic.jpg)` }}>
                <Header />
                <div className=' max-w-[1180px] m-auto w-[90%] h-[600px] flex mt-8 bg justify-center'>
                    <div className='z-10'>
                        <div className='flex flex-col gap-8 items-center'>
                            <div className='flex flex-col items-center drop-shadow-lg'>
                                <h1 className='text-3xl text-white'>UNFORGETTABLE TRAVEL AWAITS THE</h1>
                                <h1 className='font-bold text-9xl text-white'>ADVENTURE</h1>
                            </div>
                            <p className='text-white'>Expericen the asdaklsdjaksldjaskldjaskldjaslkdajsldkasjdlkasjdlkaslkdjsalkdjsalkdjas</p>
                            <div className='bg-white shadow-lg p-5 flex gap-5 rounded-md'>
                                <div className='border-r-2 pr-5'>
                                    <div className='flex items-center gap-5'>
                                        <p className='font-medium text-lg'>Destination</p>
                                        <DownArrow />
                                    </div>
                                    <p className='text-gray-500'>Khuvsgul Lake</p>
                                </div>
                                <div className='border-r-2 pr-5'>
                                    <div className='flex items-center gap-3'>
                                        <p className='font-medium text-lg'>Destination</p>
                                        <DownArrow />
                                    </div>
                                    <p className='text-gray-500'>Khuvsgul Lake</p>
                                </div>
                                <div className='border-r-2 pr-5'>
                                    <div className='flex items-center gap-3'>
                                        <p className='font-medium text-lg'>Destination</p>
                                        <DownArrow />
                                    </div>
                                    <p className='text-gray-500'>Khuvsgul Lake</p>
                                </div>
                                <button className='px-5 py-2 rounded-md bg-blue-600 text-white'>
                                    Search
                                </button>
                                import React, {useEffect, useState} from 'react'
                                import {DownArrow} from '../icons/HomeIcons/DownArrow'
                                import {getServerSideProps} from './heroData'
                                import {Data} from './types/heroTypes'
                                import {PriceDropdown} from './PriceDropdown'
                                import {DestinationDropdown} from './DestinationDropdown'
                                import Header from './Header'



                                const Hero = ({data}: {data: Data[] }) => {
                                    console.log('data', data)
    return (
                                <>
                                    <img src="Pic.jpg" className='w-full h-[1042px]' alt="" />
                                    <div className='absolute top-0 right-0 left-0'>
                                        <Header data={data} />
                                        <div className=' max-w-[1520px] m-auto w-[90%] h-[600px] flex mt-8 bg justify-center'>
                                            <div>
                                                <div className='flex flex-col items-center'>
                                                    <div className='flex flex-col items-center drop-shadow-lg'>
                                                        <h1 className='text-3xl text-white font-primary text-[32px] leading-10 drop-shadow-md tracking-widest'>UNFORGETTABLE TRAVEL AWAITS THE</h1>
                                                        <h1 className='font-oswald drop-shadow-md font-bold text-[280px] text-white'>ADVENTURE</h1>
                                                    </div>
                                                    <p className='text-white font-primary font-normal w-[730px] text-center'>Experience the thrill of exploring the world's most fascinating destinations
                                                        with our expertly curated travel packages.</p>
                                                    <div className='bg-white mt-12 w-[791px] h-[116px] shadow-lg p-6 flex rounded-3xl'>
                                                        <div className='flex justify-between items-center w-full'>
                                                            <DestinationDropdown data={data} />
                                                            <div className='border-r-2 pr-5 w-[219px] h-[66px] flex flex-col gap-1 items-start justify-start'>
                                                                <div className='flex items-center justify-between w-full  cursor-pointer'>
                                                                    <p className='font-medium text-lg p-1'>Date</p>
                                                                    <DownArrow fill='#4997D3' />
                                                                </div>
                                                                <input type="date" className='outline-none border-none cursor-pointer' />
                                                            </div>
                                                            {/* <PriceDropdown data={data} /> */}
                                                            <button className='px-5 py-2 w-40 h-full rounded-md bg-blue text-white'>
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

                                export {getServerSideProps};

                                export default Hero;
