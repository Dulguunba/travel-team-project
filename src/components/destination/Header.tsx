import React from 'react'
import { Brand } from '../icons/destination/Brand'
import { DownArrow } from '../icons/destination/DownArrow'


export const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <div className='flex max-w-[1520px] w-[90%] z-10 absolute mt-16'>
                <div className='flex justify-between w-full text-white p-8 font-primary text-base'>
                    <div className='flex'>
                        <Brand />
                    </div>
                    <div className='flex gap-14 items-center drop-shadow-md'>
                        <div className='flex items-center gap-2 cursor-pointer hover:-translate-y-1 transition ease-in-out'>
                            <p>Destinations</p>
                            <DownArrow />
                        </div>
                        <div className='flex items-center gap-2 cursor-pointer hover:-translate-y-1 transition ease-in-out'>
                            <p>Tours</p>
                            <DownArrow />
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
}
