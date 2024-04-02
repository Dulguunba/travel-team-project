import React, { useState } from 'react'
import { getServerSideProps } from '../../utils/fetchTravelDatas'
import { Tours } from '../../types/toursTypes';

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

    const filteredData = toursData.result.filter(item => item.english.toLowerCase().includes(inputValue.toLowerCase().trim()))

    console.log(inputValue)
    return (
        <>
            <div className='border-b-2 pb-6 lg:border-b-0 lg:border-r-2 lg:pr-8 lg:w-[219px] w-full lg:h-[66px] flex flex-col mb-1 gap-1 items-start justify-start '>
                <div className='dropdown cursor-pointer lg:w-full'>
                    <div onClick={toggle} tabIndex={0} role="button" className="m-1 font-medium text-md lg:text-lg flex justify-between items-center lg:w-full">
                        <input value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} type="text" placeholder='Destination' className='w-full p-1 mr-1 placeholder-black placeholder: font-medium' />

                    </div>
                    {toggleDropdown &&
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full lg:w-[45vw] lg:grid flex lg:grid-cols-3">
                            <div className="text-gray-700 font-semibold border-b-2 col-span-3 pb-2">Popular Destinations</div>
                            {filteredData.map((item) => (
                                <li className="flex">
                                    <a onClick={() => { handleItemClick(item.english); }} className="flex-1 lg:text-base text-sm">{item.english}</a>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
                <p className='text-gray-500 lg:w-[210px] px-2 lg:px-0 lg:h-[100px] lg:pl-2 text-sm'>{selectedItem}</p>
            </div >
        </>
    );
}

export { getServerSideProps };

export default DestinationDropdown;