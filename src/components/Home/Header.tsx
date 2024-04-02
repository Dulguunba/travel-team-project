import React, { useState } from 'react'
import { DownArrow } from '../icons/HomeIcons/DownArrow'
import { Tours } from '../../types/toursTypes'
import Link from 'next/link';
import { getServerSideProps } from '@/utils/fetchTravelDatas'
import { BurgerMenu } from '../icons/HomeIcons/BurgerMenu';
import { XIcon } from '../icons/HomeIcons/XIcon';



const Header = ({ toursData }: { toursData: Tours }) => {

    const [showMenu, setShowMenu] = useState(false);
    const tours = toursData.result;
    const personalTours = tours.filter(tour => tour.group === "personal tours");
    const groupTours = tours.filter(tour => tour.group === "groups tour");

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className='flex max-w-[1520px] w-[90%] z-10'>
                    <div className='flex items-center justify-between w-full text-white md:p-8 p-4 font-primary text-base'>
                        <div className='p-2 bg-green-300'>
                            Logo
                        </div>
                        <div className='hidden md:flex gap-14 md:items-center md:drop-shadow-md'>
                            <div className='flex items-center relative gap-2 cursor-pointer hover:-translate-y-1 transition ease-in-out'>
                                <div className="dropdown dropdown-hover relative">
                                    <Link href={"/destination"}><div tabIndex={0} role="button" className="m-1 flex gap-2 items-center">Destination <DownArrow /></div></Link>
                                    <ul tabIndex={0} className="dropdown-content -left-80 z-[1] menu p-2 shadow bg-base-100 rounded-box w-[60vw] flex-row grid grid-cols-5">
                                        <div className="text-gray-700 font-semibold border-b-2 w-full pb-2 col-span-5">Popular Destinations</div>
                                        {/* {data.map((item) => (
                                        <li className='text-black'>
                                            <a>{item.title}</a>
                                        </li>
                                    ))} */}
                                    </ul>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 cursor-pointer hover:-translate-y-1 transition ease-in-out'>
                                <div className="dropdown dropdown-hover relative">
                                    <div tabIndex={0} role="button" className="m-1 flex gap-2 items-center">Tours <DownArrow /></div>
                                    <ul tabIndex={0} className="dropdown-content z-50 menu p-2 shadow bg-base-100 w-[400px] rounded-box flex-row justify-around">
                                        <div className='flex flex-col'>
                                            <div className="text-gray-700 font-semibold border-b-2 pb-1 text-center capitalize">
                                                {personalTours.length > 0 ? personalTours[0].group : ''}
                                            </div>
                                            <div className='text-black mt-2 flex flex-col gap-1 capitalize'>
                                                {personalTours.map((tour) =>
                                                (
                                                    <Link href={`/tours/${tour.english}`}>
                                                        < div className='cursor-pointer hover:text-blue transition-all' > {tour.english} </div>
                                                    </Link>)
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-gray-700 font-semibold border-b-2 pb-1 text-center capitalize">
                                                {groupTours.length > 0 ? groupTours[0].group : ''}

                                            </div>
                                            <div className='text-black mt-2 flex flex-col gap-1 capitalize'>
                                                {groupTours.map((tour) => (
                                                    <Link href={`/tours/${tour.english}`}>
                                                        <div className='cursor-pointer hover:text-blue transition-all'> {tour.english} </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <p className='cursor-pointer hover:-translate-y-1 transition ease-in-out'>About</p>
                            <p className='cursor-pointer hover:-translate-y-1 transition ease-in-out'>Blog</p>
                            <p className='cursor-pointer hover:-translate-y-1 transition ease-in-out'>Contact</p>
                        </div>
                        <div className='hidden md:block p-3 border rounded-md font-medium cursor-pointer hover:-translate-y-1 transition ease-in-out hover:scale-110'>
                            Sign in
                        </div>
                        <div className='md:hidden block'>
                            <button onClick={() => { setShowMenu(true) }}><BurgerMenu fill='white' /></button>
                        </div>
                    </div>
                </div >

            </div >
            <div className='fixed right-0 left-auto top-0 z-50 transition-all bg-white w-[200px] h-[300px] duration-500 ease-in-out' style={{ transform: showMenu ? 'translateX(0)' : 'translateX(100%)', opacity: showMenu ? '1' : '0', visibility: showMenu ? 'visible' : 'hidden' }}>
                <div className='flex flex-col gap-4'>
                    <div className='w-full border-b-2 pb-2'>
                        <button className='ml-2' onClick={() => { setShowMenu(false) }}>
                            <XIcon width='18' fill='black' />
                        </button>
                    </div>
                    <ul className='ml-2 font-primary flex flex-col gap-6'>
                        <Link href={'/'}><li>Home</li></Link>
                        <Link href={'/destination'}><li>Destination</li></Link>
                        <Link href={'/tours'}><li>Tours</li></Link>
                        <Link href={'/about'}><li>About</li></Link>
                    </ul>
                    <div className='p-3 bg-black text-white'>
                        Logo
                    </div>
                </div>
            </div>
        </>
    )
};

export { getServerSideProps };

export default Header;