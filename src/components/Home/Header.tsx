import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import { DownArrow } from '../icons/HomeIcons/DownArrow'
import Link from 'next/link';
import { getServerSideProps } from '@/utils/fetchTravelDatas';
import { BurgerMenu } from '../icons/HomeIcons/BurgerMenu';
import { XIcon } from '../icons/HomeIcons/XIcon';
import { Props } from '@/pages';
import { RightArrow } from '../TourDetail/RightArrow';

const Header = ({ toursData, destinationDatas, categoryDatas }: Props) => {
    const [showMenu, setShowMenu] = useState(false);
    const personalTours = toursData.result.filter(tour => tour.group === "personal tours");
    const groupTours = toursData.result.filter(tour => tour.group === "groups tour");

    const { y } = useWindowScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setIsScrolled(y > 450);
    }, [y]);

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className='flex max-w-[1520px] w-[90%] z-10'>
                    <div className={`${isScrolled ? "duration-700 ease-in-out transition-all lg:static fixed top-0 right-0 left-0 bg-white shadow-lg text-black" : ""} flex items-center justify-between w-full text-white lg:p-8 p-4 font-primary text-base`}>
                        <div className='p-2 bg-green-300'>
                            Logo
                        </div>
                        <div className='hidden lg:flex gap-14 lg:items-center lg:drop-shadow-lg'>
                            <div className='flex items-center relative gap-2 cursor-pointer hover:-translate-y-1 transition ease-in-out'>
                                <div className="dropdown dropdown-hover relative">
                                    <Link href={"/destination"}><div tabIndex={0} role="button" className="m-1 flex gap-2 items-center">Destination <DownArrow /></div></Link>
                                    <ul tabIndex={0} className="dropdown-content -left-80 z-[1] menu p-2 shadow bg-base-100 rounded-box w-[60vw] flex-row grid grid-cols-5">
                                        {categoryDatas.result.map((category) =>
                                            <div className="text-gray-700 flex justify-between font-semibold pb-2 capitalize">
                                                <h1 className='border-b-2 pb-2'>{category.english}</h1>
                                            </div>
                                        )}
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
                                    <ul tabIndex={0} className="dropdown-content absolute -left-40 z-50 menu p-2 shadow bg-base-100 w-[400px] rounded-box flex-row justify-around">
                                        <div className='flex flex-col'>
                                            <div className="text-gray-700 font-semibold border-b-2 pb-1 text-start capitalize">
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
                                            <div className="text-gray-700 font-semibold border-b-2 pb-1 text-start capitalize">
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
                        <div className='hidden lg:block p-3 border rounded-lg font-medium cursor-pointer hover:-translate-y-1 transition ease-in-out hover:scale-110'>
                            Sign in
                        </div>
                        <div className='lg:hidden block'>
                            <button onClick={() => { setShowMenu(true) }}>
                                {isScrolled ? <BurgerMenu fill='#4997D3' /> : <BurgerMenu fill='white' />}

                            </button>
                        </div>
                    </div>
                </div >

            </div >
            <div className='fixed right-0 left-auto top-0 z-50 transition-all bg-slate-900 text-white w-[200px] h-screen duration-500 ease-in-out' style={{ transform: showMenu ? 'translateX(0)' : 'translateX(100%)', opacity: showMenu ? '1' : '0', visibility: showMenu ? 'visible' : 'hidden' }}>
                <div className='flex flex-col gap-4'>
                    <div className='w-full border-b-2 pb-4'>
                        <button className='ml-4 mt-5' onClick={() => { setShowMenu(false) }}>
                            <XIcon width='18' fill='#4997D3' />
                        </button>
                        <div className='p-3 flex mt-10 w-10 h-10 m-auto bg-black text-white'>
                            Logo
                        </div>
                    </div>
                    <ul className='ml-2 mr-2 mt-10 font-primary flex flex-col gap-6'>
                        <Link className='w-full  text-xl font-semibold' href={'/'}><li>Home</li></Link>
                        <Link className='w-full  text-xl font-semibold' href={'/destination'}><li>Destination</li></Link>
                        <Link className='w-full  text-xl font-semibold' href={'/tours'}><li>Tours</li></Link>
                        <Link className='w-full text-xl font-semibold' href={'/about'}><li>About</li></Link>
                        <Link className='w-full text-xl font-semibold' href={'/about'}><li>Sign In</li></Link>
                    </ul>
                </div>
            </div>
        </>
    )
};

export { getServerSideProps };

export default Header;