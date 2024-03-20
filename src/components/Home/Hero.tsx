import React from 'react'
import { DownArrow } from '../icons/DownArrow'
import { Header } from '../Header'

export const Hero = () => {
    return (
        <>
            <img src="Pic.jpg" className='w-full h-[1042px]' alt="" />
            <div className='absolute top-0 right-0 left-0'>
                <Header />
                <div className=' max-w-[1520px] m-auto w-[90%] h-[600px] flex mt-8 bg justify-center'>
                    <div className='z-10'>
                        <div className='flex flex-col items-center'>
                            <div className='flex flex-col items-center drop-shadow-lg'>
                                <h1 className='text-3xl text-white font-primary text-[32px] leading-10 drop-shadow-md tracking-widest'>UNFORGETTABLE TRAVEL AWAITS THE</h1>
                                <h1 className='font-oswald drop-shadow-md font-bold text-[280px] text-white'>ADVENTURE</h1>
                            </div>
                            <p className='text-white font-primary font-normal w-[730px] text-center'>Experience the thrill of exploring the world's most fascinating destinations
                                with our expertly curated travel packages.</p>
                            <div className='bg-white mt-12 w-[1091px] h-[146px] shadow-lg p-10 flex rounded-3xl'>
                                <div className='flex justify-between w-full'>
                                    <div className='border-r-2 pr-8 w-[219px] h-[66px] flex flex-col gap-3 items-start'>
                                        <div className='flex items-center justify-between w-full'>
                                            <p className='font-medium text-lg'>Destination</p>
                                            <DownArrow fill='#4997D3' />
                                        </div>
                                        <p className='text-gray-500'>Khuvsgul Lake</p>
                                    </div>
                                    <div className='border-r-2 pr-5 w-[219px] h-[66px] flex flex-col gap-3 items-start'>
                                        <div className='flex items-center justify-between w-full'>
                                            <p className='font-medium text-lg'>Destination</p>
                                            <DownArrow fill='#4997D3' />
                                        </div>
                                        <p className='text-gray-500'>Khuvsgul Lake</p>
                                    </div>
                                    <div className='w-[219px] h-[66px] flex flex-col gap-3 items-start'>
                                        <div className='flex items-center justify-between w-full'>
                                            <p className='font-medium text-lg'>Destination</p>
                                            <DownArrow fill='#4997D3' />
                                        </div>
                                        <p className='text-gray-500'>Khuvsgul Lake</p>
                                    </div>
                                    <button className='px-5 py-2 w-40 rounded-md bg-blue text-white'>
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
