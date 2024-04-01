import React, { useState } from 'react'
import { DownArrow } from '../icons/HomeIcons/DownArrow';
import { getServerSideProps } from './toursData'
import { Tours } from './types/toursTypes';

const DestinationDropdown = ({ toursData }: { toursData: Tours }) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState('');
    const [toggleDropdown, setToggleDropdown] = useState(false);

    const handleItemClick = (value: string) => {
        setSelectedItem(value);
        setInputValue('');
        setToggleDropdown(false)

    }
    const toggle = () => {
        setToggleDropdown(!toggleDropdown)
    }
    const tours = toursData.result;

    const filteredData = tours.filter(item => item.english.toLowerCase().includes(inputValue.toLowerCase().trim()))

    console.log(inputValue)
    return (
        <>
            <div className='border-b-2 pb-6 md:border-b-0 md:border-r-2 md:pr-8 md:w-[219px] w-full md:h-[66px] flex flex-col mb-1 gap-1 items-start justify-start '>
                <div className='dropdown cursor-pointer md:w-full'>
                    <div onClick={toggle} tabIndex={0} role="button" className="m-1 font-medium text-md md:text-lg flex justify-between items-center md:w-full">
                        <input value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} type="text" placeholder='Destination' className='w-full p-1 mr-1 placeholder-black placeholder: font-medium' />

                    </div>
                    {toggleDropdown &&
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full md:w-[45vw] md:grid flex md:grid-cols-3">
                            <div className="text-gray-700 font-semibold border-b-2 col-span-3 pb-2">Popular Destinations</div>
                            {filteredData.map((item) => (
                                <li className="flex">
                                    <a onClick={() => { handleItemClick(item.english); }} className="flex-1 md:text-base text-sm">{item.english}</a>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
                <p className='text-gray-500 md:w-[210px] px-2 md:px-0 md:h-[100px] md:pl-2 text-sm'>{selectedItem}</p>
            </div >
        </>
    );
}

export { getServerSideProps };

export default DestinationDropdown;