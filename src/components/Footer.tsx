import React from 'react'
import { Brand } from './icons/Brand'
import { Facebook } from './icons/Fb'
import { Ig } from './icons/Ig'
import { Twitter } from './icons/Twitter'

export const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-[#222222]'>
            <div className='flex max-w-[1580px] w-[90%] py-5 flex-col'>
                <div className='flex items-center justify-between w-full '>
                    <div className='flex'>
                        <Brand />
                    </div>
                    <div className='flex gap-20'>

                        <a className='text-white font-light text-base ' href="">Destination</a>
                        <a className='text-white font-light text-base ' href="">Tours</a>
                        <a className='text-white font-light text-base ' href="">About</a>
                        <a className='text-white font-light text-base ' href="">Blog</a>
                        <a className='text-white font-light text-base ' href="">Contact</a>
                    </div>
                    <div className='flex gap-6'>
                        <Facebook />
                        <Ig />
                        <Twitter />
                    </div>
                </div>
                <hr className='text-white w-full mt-[64px] mb-[16px]' />
                <div className='flex justify-between items-center w-full'>
                    <p className='text-white font-light text-base'>Copyright © 2023 Vacasky. All rights reserved.</p>
                    <p className='text-white font-light text-base'>Privacy Policy | Terms & Condition</p>
                </div>
            </div>
        </div>
    )
}

