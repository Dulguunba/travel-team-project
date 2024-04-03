import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import { ListCard } from './ListCard'
import { TravelType } from '@/pages/types/travelType'



export const Hero = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const [toggle, setToggle] = useState('toggle')

    const [grid, setGrid] = useState('grid')

    const toggleFunction = () => {
        setToggle('toggle')
        setGrid('grid')
    }
    const toggleGrid = () => {
        setGrid('list')
        setToggle('')
    };
    type CategoryType = 'All' | 'Best' | 'Nature' | 'City' | 'Seasonal';

    const selectCategory = (category: CategoryType) => {
        setSelectedCategory(category);
    };
    return (
        <>
            <div className='flex flex-col items-center justify-center bg-[white]'>
                <div className='flex max-w-[1520px] w-[90%] py-5 flex-col'>
                    <div className='flex justify-between w-full items-center flex-wrap'>
                        <h1 className='font-oswald font-bold md:text-[40px] md:leading-[50px] '>POPULAR DESTINATION</h1>
                        <div className='flex justify-between w-full items-center flex-wrap'>
                            <div className='flex items-center border-b-2 py-4'>
                                <input className='outline-0' type="search" placeholder='Search' />
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.65925 19.3102C11.8044 19.3103 13.8882 18.5945 15.5806 17.2764L21.9653 23.6611C22.4423 24.1218 23.2023 24.1086 23.663 23.6316C24.1123 23.1663 24.1123 22.4287 23.663 21.9635L17.2782 15.5788C20.5491 11.3682 19.7874 5.30332 15.5769 2.03241C11.3663 -1.2385 5.30149 -0.476814 2.03058 3.73373C-1.24033 7.94427 -0.478646 14.0092 3.73189 17.2801C5.42702 18.5969 7.51269 19.3113 9.65925 19.3102ZM4.52915 4.52728C7.36245 1.69393 11.9561 1.69388 14.7895 4.52718C17.6229 7.36049 17.6229 11.9542 14.7896 14.7875C11.9563 17.6209 7.36261 17.6209 4.52925 14.7876C4.5292 14.7876 4.5292 14.7876 4.52915 14.7875C1.69584 11.9749 1.67915 7.39793 4.49181 4.56462C4.50424 4.55214 4.51667 4.53971 4.52915 4.52728Z" fill="#222222" />
                                </svg>
                            </div>
                        </div>
                        {/* <p>{articles.name}</p> */}
                        <div className='pt-16 flex justify-between gap-4 items-center flex-wrap w-full'>
                            <div className='flex md:gap-10 gap-4 flex-wrap'>
                                <button onClick={() => selectCategory('All')} className={`hover:bg-blue hover:text-white hover:duration-500 md:py-3 md:px-8 py-2 px-4  font-medium text-xl  rounded-[10px] ${selectedCategory === 'All' ? 'text-white bg-blue' : 'text-black bg-[#F6F6F6]'} `}>All</button>
                                <button onClick={() => selectCategory('Best')} className={`hover:bg-blue hover:text-white hover:duration-500 md:py-3 md:px-8 py-2 px-4 font-medium text-xl  rounded-[10px] ${selectedCategory === 'Best' ? 'text-white bg-blue' : 'text-black bg-[#F6F6F6]'} `}>Best seller</button>
                                <button onClick={() => selectCategory('Nature')} className={`hover:bg-blue hover:text-white hover:duration-500 md:py-3 md:px-8 py-2 px-4 font-medium text-xl  rounded-[10px] ${selectedCategory === 'Nature' ? 'text-white bg-blue' : 'text-black bg-[#F6F6F6]'} `}>Nature</button>
                                <button onClick={() => selectCategory('City')} className={`hover:bg-blue hover:text-white hover:duration-500 md:py-3 md:px-8 py-2 px-4 font-medium text-xl  rounded-[10px] ${selectedCategory === 'City' ? 'text-white bg-blue' : 'text-black bg-[#F6F6F6]'} `}>City</button>
                                <button onClick={() => selectCategory('Seasonal')} className={`hover:bg-blue hover:text-white hover:duration-500 md:py-3 md:px-8 py-2 px-4 font-medium text-xl  rounded-[10px] ${selectedCategory === 'Seasonal' ? 'text-white bg-blue' : 'text-black bg-[#F6F6F6]'}`}>Seasonal</button>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button onClick={toggleFunction} className={`bg-${grid == 'list' ? '[#F6F6F6]' : 'blue'} flex items-center gap-3 md:py-3 md:px-8 py-2 px-4 rounded-[10px]  text-${grid == 'list' ? '#222222' : 'white'}`}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g >
                                            <path d="M6.90594 0H2.31281C1.03754 0 0 1.03754 0 2.31281V6.90594C0 8.18121 1.03754 9.21875 2.31281 9.21875H6.90594C8.18121 9.21875 9.21875 8.18121 9.21875 6.90594V2.31281C9.21875 1.03754 8.18121 0 6.90594 0ZM7.65625 6.90594C7.65625 7.31965 7.31965 7.65625 6.90594 7.65625H2.31281C1.8991 7.65625 1.5625 7.31965 1.5625 6.90594V2.31281C1.5625 1.8991 1.8991 1.5625 2.31281 1.5625H6.90594C7.31965 1.5625 7.65625 1.8991 7.65625 2.31281V6.90594Z" fill={`${grid == 'list' ? '#222222' : 'white'}`} />
                                            <path d="M17.6562 0H13.125C11.8327 0 10.7812 1.05141 10.7812 2.34375V6.875C10.7812 8.16734 11.8327 9.21875 13.125 9.21875H17.6562C18.9486 9.21875 20 8.16734 20 6.875V2.34375C20 1.05141 18.9486 0 17.6562 0ZM18.4375 6.875C18.4375 7.30578 18.087 7.65625 17.6562 7.65625H13.125C12.6942 7.65625 12.3438 7.30578 12.3438 6.875V2.34375C12.3438 1.91297 12.6942 1.5625 13.125 1.5625H17.6562C18.087 1.5625 18.4375 1.91297 18.4375 2.34375V6.875Z" fill={`${grid == 'list' ? '#222222' : 'white'}`} />
                                            <path d="M6.90594 10.7812H2.31281C1.03754 10.7812 0 11.8188 0 13.0941V17.6872C0 18.9625 1.03754 20 2.31281 20H6.90594C8.18121 20 9.21875 18.9625 9.21875 17.6872V13.0941C9.21875 11.8188 8.18121 10.7812 6.90594 10.7812ZM7.65625 17.6872C7.65625 18.1009 7.31965 18.4375 6.90594 18.4375H2.31281C1.8991 18.4375 1.5625 18.1009 1.5625 17.6872V13.0941C1.5625 12.6804 1.8991 12.3438 2.31281 12.3438H6.90594C7.31965 12.3438 7.65625 12.6804 7.65625 13.0941V17.6872Z" fill={`${grid == 'list' ? '#222222' : 'white'}`} />
                                            <path d="M17.6562 10.7812H13.125C11.8327 10.7812 10.7812 11.8327 10.7812 13.125V17.6562C10.7812 18.9486 11.8327 20 13.125 20H17.6562C18.9486 20 20 18.9486 20 17.6562V13.125C20 11.8327 18.9486 10.7812 17.6562 10.7812ZM18.4375 17.6562C18.4375 18.087 18.087 18.4375 17.6562 18.4375H13.125C12.6942 18.4375 12.3438 18.087 12.3438 17.6562V13.125C12.3438 12.6942 12.6942 12.3438 13.125 12.3438H17.6562C18.087 12.3438 18.4375 12.6942 18.4375 13.125V17.6562Z" fill={`${grid == 'list' ? '#222222' : 'white'}`} />
                                        </g>
                                        <defs>
                                        </defs>
                                    </svg>
                                    <p>Grid view</p>
                                </button>
                                <button onClick={toggleGrid} className={`${toggle == 'toggle' ? 'bg-[#F6F6F6] text-[#222222]' : 'bg-blue text-white'} flex items-center gap-3  rounded-[10px]  md:py-3 md:px-8 py-2 px-4`}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M19 11H1C0.734784 11 0.48043 10.8946 0.292893 10.7071C0.105357 10.5196 0 10.2652 0 10C0 9.73478 0.105357 9.48043 0.292893 9.29289C0.48043 9.10536 0.734784 9 1 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10C20 10.2652 19.8946 10.5196 19.7071 10.7071C19.5196 10.8946 19.2652 11 19 11ZM19 4H1C0.734784 4 0.48043 3.89464 0.292893 3.70711C0.105357 3.51957 0 3.26522 0 3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3C20 3.26522 19.8946 3.51957 19.7071 3.70711C19.5196 3.89464 19.2652 4 19 4ZM19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17C0 16.7348 0.105357 16.4804 0.292893 16.2929C0.48043 16.1054 0.734784 16 1 16H19C19.2652 16 19.5196 16.1054 19.7071 16.2929C19.8946 16.4804 20 16.7348 20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18Z"
                                                fill={`${grid == 'grid' ? '#222222' : 'white'} `} />
                                        </g>
                                        <defs>

                                        </defs>
                                    </svg>
                                    <p>List view</p>
                                </button>
                            </div>
                        </div>

                        <div className=' flex flex-col w-full py-20 gap-12 '>
                            <ListCard img="./winter.png" where="WHERE" title="Classic Italy Tour Package" details="A journey to visit Rome, Florence, and Venice, with guided tours of famous landmarks like the Colosseum, Vatican City, and the Leaning Tower of Pisa and activities like wine tasting and a ride."
                                time="10 Days" price="Start from $3,500" />
                            <ListCard img="./winter.png" where="WHERE" title="Classic Italy Tour Package" details="A journey to visit Rome, Florence, and Venice, with guided tours of famous landmarks like the Colosseum, Vatican City, and the Leaning Tower of Pisa and activities like wine tasting and a ride."
                                time="10 Days" price="Start from $3,500" />
                            <ListCard img="./winter.png" where="WHERE" title="Classic Italy Tour Package" details="A journey to visit Rome, Florence, and Venice, with guided tours of famous landmarks like the Colosseum, Vatican City, and the Leaning Tower of Pisa and activities like wine tasting and a ride."
                                time="10 Days" price="Start from $3,500" />
                            <ListCard img="./winter.png" where="WHERE" title="Classic Italy Tour Package" details="A journey to visit Rome, Florence, and Venice, with guided tours of famous landmarks like the Colosseum, Vatican City, and the Leaning Tower of Pisa and activities like wine tasting and a ride."
                                time="10 Days" price="Start from $3,500" />
                            <ListCard img="./winter.png" where="WHERE" title="Classic Italy Tour Package" details="A journey to visit Rome, Florence, and Venice, with guided tours of famous landmarks like the Colosseum, Vatican City, and the Leaning Tower of Pisa and activities like wine tasting and a ride."
                                time="10 Days" price="Start from $3,500" />
                            <ListCard img="./winter.png" where="WHERE" title="Classic Italy Tour Package" details="A journey to visit Rome, Florence, and Venice, with guided tours of famous landmarks like the Colosseum, Vatican City, and the Leaning Tower of Pisa and activities like wine tasting and a ride."
                                time="10 Days" price="Start from $3,500" />
                            <ListCard img="./winter.png" where="WHERE" title="Classic Italy Tour Package" details="A journey to visit Rome, Florence, and Venice, with guided tours of famous landmarks like the Colosseum, Vatican City, and the Leaning Tower of Pisa and activities like wine tasting and a ride."
                                time="10 Days" price="Start from $3,500" />
                            <ListCard img="./winter.png" where="WHERE" title="Classic Italy Tour Package" details="A journey to visit Rome, Florence, and Venice, with guided tours of famous landmarks like the Colosseum, Vatican City, and the Leaning Tower of Pisa and activities like wine tasting and a ride."
                                time="10 Days" price="Start from $3,500" />
                            <ListCard img="./winter.png" where="WHERE" title="Classic Italy Tour Package" details="A journey to visit Rome, Florence, and Venice, with guided tours of famous landmarks like the Colosseum, Vatican City, and the Leaning Tower of Pisa and activities like wine tasting and a ride."
                                time="10 Days" price="Start from $3,500" />
                        </div>

                    </div>
                </div >
            </div>

        </>
    )
}
