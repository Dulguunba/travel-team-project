import React from 'react'

import { Brand } from './icons/Brand'
import { Logo } from './icons/Logo'
import { Facebook } from './icons/Fb'
import { AppStoreDownload } from './icons/AppStoreDownload'
import { PlayStoreDownload } from './icons/PlayStoreDownload'
import { USFlag } from './icons/USFlag'
import { UpArrow } from './icons/UpArrow'

export const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex max-w-[1180px] w-[90%] py-5'>
                <div className='flex justify-between w-full'>
                    <div className='flex flex-col gap-2 w-[276px] h-[157px]'>
                        <div className='flex gap-2 items-center '>
                            <Logo />
                            <Brand />
                        </div>
                        <p className='text-[#505050] text-base w-full'>Best information about the company gies here but now lorem ipsum is</p>
                        <div className='flex gap-2'>
                            <button> <Facebook /></button>
                            <button> <Facebook /></button>
                            <button> <Facebook /></button>
                            <button> <Facebook /></button>
                            <button> <Facebook /></button>
                        </div>
                    </div>
                    <div>
                        <p className='font-medium mb-3'>About</p>
                        <div className='text-[#8B96A5]'>
                            <p>About Us</p>
                            <p>Find store</p>
                            <p>Categories</p>
                            <p>Blogs</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-medium mb-3'>Partnership</p>
                        <div className='text-[#8B96A5]'>
                            <p>About Us</p>
                            <p>Find store</p>
                            <p>Categories</p>
                            <p>Blogs</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-medium mb-3'>Information</p>
                        <div className='text-[#8B96A5]'>
                            <p>Help Center</p>
                            <p>Money Refund</p>
                            <p>Shipping</p>
                            <p>Contact us</p>
                        </div>
                    </div>
                    <div className='ml-3'>
                        <p className='font-medium mb-3'>For users</p>
                        <div className='text-[#8B96A5]'>
                            <p>About Us</p>
                            <p>Find store</p>
                            <p>Categories</p>
                            <p>Blogs</p>
                        </div>
                    </div>
                    <div className='ml-3'>
                        <p className='font-medium mb-3'>Get app</p>
                        <div className='flex flex-col gap-2'>
                            <button className='bg-black p-2 rounded-md'>  <AppStoreDownload /></button>
                            <button className='bg-black p-2 rounded-md'><PlayStoreDownload /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#DEE2E7] w-full'>
                <div className='max-w-[1180px] w-[90%] m-auto flex justify-between h-[68px] items-center'>
                    <p>© 2023 Ecommerce. </p>
                    <div className='flex items-end gap-1'>
                        <div className='w-[24px] h-[17px]'><USFlag /></div>
                        <div className='flex gap-1 items-center'>
                            <p>English</p>
                            <button><UpArrow /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

