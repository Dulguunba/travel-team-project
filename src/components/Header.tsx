import React from 'react'
import { DownArrow } from './Icons/DownArrow'

export const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center relative">
            <div className='flex max-w-[1180px] w-[90%] z-10'>
                <div className='flex justify-between w-full text-white p-8'>
                    <div className='p-2 bg-green-300'>
                        Logo
                    </div>
                    <div className='flex gap-14 items-center'>
                        <div className='flex items-center gap-2'>
                            <p>Destinations</p>
                            <DownArrow />
                        </div>
                        <div className='flex items-center gap-2'>
                            <p>Tours</p>
                            <DownArrow />
                        </div>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>
                    <div className='p-2 border rounded-md'>
                        Sign in
                    </div>
                </div>
            </div>
            <img className='absolute top-0 w-full h-[90vh]' src="Pic.png" alt="" />
        </div>
    )
}
