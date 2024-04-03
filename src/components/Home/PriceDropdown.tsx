// import React, { useState } from 'react'
// import { DownArrow } from '../icons/HomeIcons/DownArrow';
// import { getServerSideProps } from './toursData';
// import { Data } from '../../types/toursTypes';

// export const PriceDropdown = ({ data }: { data: Data[] }) => {
//     const [selectedPrice, setSelectedPrice] = useState('');
//     const [toggleDropdown, setToggleDropdown] = useState(false);

//     const handleItemClick = (value: string) => {
//         setSelectedPrice(value);
//         setToggleDropdown(false)

//     }
//     const toggle = () => {
//         setToggleDropdown(!toggleDropdown)
//     }

//     return (
//         <div className='border-r-2 pr-8 w-[219px] h-[66px] flex flex-col gap-3 items-start'>
//             <div className='dropdown cursor-pointer w-full'>
//                 <div onClick={toggle} tabIndex={0} role="button" className="m-1 font-medium text-lg flex justify-between items-center w-full">
//                     Price
//                     <DownArrow fill='#4997D3' />
//                 </div>
//                 {toggleDropdown &&
//                     <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
//                         {data.map((item) => {
//                             return (
//                                 <li><a onClick={() => { handleItemClick(item.comments_count); }}>{item.comments_count}</a></li>
//                             )
//                         })}
//                     </ul>}
//             </div>
//             <p className='text-gray-500 pl-1'>{selectedPrice}</p>
//         </div>
//     )
// }

// { getServerSideProps };