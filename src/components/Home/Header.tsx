import React, { useState } from 'react'
import { DownArrow } from '../icons/HomeIcons/DownArrow'
import { Data } from './types/heroTypes'
import { getServerSideProps } from './heroData';

const Header = ({ data }: { data: Data[] }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className='flex max-w-[1520px] w-[90%] z-10'>
                <div className='flex justify-between w-full text-white p-8 font-primary text-base'>
                    <div className='p-2 bg-green-300'>
                        Logo
                    </div>
                    <div className='flex gap-14 items-center drop-shadow-md'>
                        <div className='flex items-center relative gap-2 cursor-pointer hover:-translate-y-1 transition ease-in-out'>
                            <div className="dropdown dropdown-hover relative">
                                <div tabIndex={0} role="button" className="m-1 flex gap-2 items-center">Destination <DownArrow /></div>
                                <ul tabIndex={0} className="dropdown-content -left-16 z-[1] menu p-2 shadow bg-base-100 rounded-box w-[40vw] flex-row">
                                    <div className="text-gray-700 font-semibold border-b-2 w-full pb-2">Popular Destinations</div>
                                    {data.map((item) => (
                                        <li className='text-black'>
                                            <a>{item.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer hover:-translate-y-1 transition ease-in-out'>
                            <div className="dropdown dropdown-hover relative">
                                <div tabIndex={0} role="button" className="m-1 flex gap-2 items-center">Tours <DownArrow /></div>
                                <ul tabIndex={0} className="dropdown-content -left-48 z-50 menu p-2 shadow w-[45vw] bg-base-100 rounded-box flex-row">
                                    {data?.map((item) => <li className='text-black'><a>{item.title}</a></li>)}
                                </ul>
                            </div>
                        </div>
                        <p className='cursor-pointer hover:-translate-y-1 transition ease-in-out'>About</p>
                        <p className='cursor-pointer hover:-translate-y-1 transition ease-in-out'>Blog</p>
                        <p className='cursor-pointer hover:-translate-y-1 transition ease-in-out'>Contact</p>
                    </div>
                    <div className='p-3 border rounded-md font-medium cursor-pointer hover:-translate-y-1 transition ease-in-out hover:scale-110'>
                        Sign in
                    </div>
                </div>
            </div>
        </div>
    )
};

export { getServerSideProps }

export default Header