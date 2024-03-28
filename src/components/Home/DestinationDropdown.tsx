import React, { useState } from 'react'
import { DownArrow } from '../icons/HomeIcons/DownArrow';
import { getServerSideProps } from './heroData';
import { Data } from './types/heroTypes';

export const DestinationDropdown = ({ data }: { data: Data[] }) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [toggleDropdown, setToggleDropdown] = useState(false);

    const handleItemClick = (value: string) => {
        setSelectedItem(value);
        setToggleDropdown(false)

    }
    const toggle = () => {
        setToggleDropdown(!toggleDropdown)
    }

    const filteredData = data.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase().trim()))

    console.log(inputValue)
    return (
        <div className='border-r-2 pr-8 w-[219px] h-[66px] flex flex-col mb-1 gap-1 items-start justify-start '>
            <div className='dropdown cursor-pointer w-full'>
                <div onClick={toggle} tabIndex={0} role="button" className="m-1 font-medium text-lg flex justify-between items-center w-full">
                    <input value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} type="text" placeholder='Destination' className='w-full p-1 mr-1 placeholder-black placeholder: font-medium' />
                    <DownArrow fill='#4997D3' />
                </div>
                {toggleDropdown &&
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[45vw] grid grid-cols-3">
                        <div className="text-gray-700 font-semibold border-b-2 col-span-3 pb-2">Popular Destinations</div>
                        {filteredData.map((item) => (
                            <li className="flex">
                                <a onClick={() => { handleItemClick(item.title); }} className="flex-1">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                }
            </div>
            <p className='text-gray-500 pl-1 text-sm'>{selectedItem}</p>
        </div>
    );
}

{ getServerSideProps };