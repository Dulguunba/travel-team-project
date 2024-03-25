import React, { useState } from 'react'
import { DownArrow } from '../icons/HomeIcons/DownArrow'
import { DestinationDropdown } from './DestinationDropdown'
import { Data } from './types/heroTypes'
import { getServerSideProps } from './heroData'

export const Header = ({ data }: { data: Data[] }) => {
    const [toggleDropdown, setToggleDropdown] = useState(false);

    const handleItemClick = (value: string) => {
        setToggleDropdown(false)

    }
    const toggle = () => {
        setToggleDropdown(!toggleDropdown)
    }

    const TenData = data.slice(0, 10)

    return (
        <div className="flex flex-col items-center justify-center">
            <div className='flex max-w-[1520px] w-[90%] z-10'>
                <div className='flex justify-between w-full text-white p-8 font-primary text-base'>
                    <div className='p-2 bg-green-300'>
                        Logo
                    </div>
                    <div className='flex gap-14 items-center drop-shadow-md'>
                        <div className='flex items-center relative gap-2 cursor-pointer hover:-translate-y-1 transition ease-in-out'>
                            <div className="dropdown relative">
                                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                                <ul tabIndex={0} className="dropdown-content -left-48 z-50 menu p-2 shadow bg-base-100 rounded-box flex-row">
                                    {data.map((item) => <li className='text-black'><a>{item.title}</a></li>)}
                                </ul>
                            </div>
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

{ getServerSideProps }