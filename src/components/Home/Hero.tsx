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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
