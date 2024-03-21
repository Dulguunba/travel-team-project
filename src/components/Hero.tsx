import React, { useEffect, useState } from 'react'
import { Loc } from './icons/Loc'
import { Dollar } from './icons/Dollar'

export const Hero = () => {
    const [select, setSelect] = useState('select')
    const [grid, setGrid] = useState('grid')
    const [best, setBest] = useState('select')
    const [nature, setNature] = useState('select')
    const [city, setCity] = useState('select')
    const [sea, setSea] = useState('select')
    const selectCity = () => {
        if (city === 'select') {
            setCity('selected')
            setSelect('select')
            setBest('select')
            setSea('select')
            setNature('select')
            console.log("select city")
        }
        else {
            setCity('select')
        }
    }
    const selectSea = () => {
        if (sea === 'select') {
            setSea('selected')
            setSelect('select')
            setBest('select')
            setCity('select')
            setNature('select')
            console.log("select sea ")
        }
        else {
            setSea('select')
        }
    }
    const selectNature = () => {
        if (nature === 'select') {
            setNature('selected')
            setSelect('select')
            setBest('select')
            setCity('select')
            setSea('select')
            console.log("select nature")
        }
        else {
            setNature('select')
        }
    }
    const selectBest = () => {
        if (best === 'select') {
            setBest('selected')
            setSelect('select')
            setSea('select')
            setCity('select')
            setNature('select')
            console.log("select best")
        }
        else {
            setBest('select')
        }
    }
    const selectBtn = () => {

        if (select === 'select') {
            setSelect('selected')
            setSea('select')
            setBest('select')
            setCity('select')
            setNature('select')
            console.log("select all")
        }
        else {
            setSelect('select')
        }
    };
    const toggleGrid = () => {
        if (grid === 'grid') {
            setGrid('list')

        }
        else {
            setGrid('grid')
            console.log("type " + grid)
        }
    }
    return (
        <div className='flex flex-col items-center justify-center bg-[white]'>
            <div className='flex max-w-[1520px] w-[90%] py-5 flex-col'>
                <div className='flex justify-between w-full items-center'>
                    <h1 className='font-oswald font-bold text-[40px] leading-[50px] '>POPULAR DESTINATION</h1>
                    <div className='flex items-center border-b-2 py-4'>
                        <input type="search" placeholder='Search' />
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.65925 19.3102C11.8044 19.3103 13.8882 18.5945 15.5806 17.2764L21.9653 23.6611C22.4423 24.1218 23.2023 24.1086 23.663 23.6316C24.1123 23.1663 24.1123 22.4287 23.663 21.9635L17.2782 15.5788C20.5491 11.3682 19.7874 5.30332 15.5769 2.03241C11.3663 -1.2385 5.30149 -0.476814 2.03058 3.73373C-1.24033 7.94427 -0.478646 14.0092 3.73189 17.2801C5.42702 18.5969 7.51269 19.3113 9.65925 19.3102ZM4.52915 4.52728C7.36245 1.69393 11.9561 1.69388 14.7895 4.52718C17.6229 7.36049 17.6229 11.9542 14.7896 14.7875C11.9563 17.6209 7.36261 17.6209 4.52925 14.7876C4.5292 14.7876 4.5292 14.7876 4.52915 14.7875C1.69584 11.9749 1.67915 7.39793 4.49181 4.56462C4.50424 4.55214 4.51667 4.53971 4.52915 4.52728Z" fill="#222222" />
                        </svg>

                    </div>
                </div>
                <div className='pt-16 flex justify-between items-center w-full'>
                    <div className='flex gap-4 '>
                        <button onClick={selectBtn} className={`py-3 px-8 font-medium text-xl  rounded-[10px] text-${select == 'select' ? 'black' : 'white'} bg-${select == 'select' ? '[#F6F6F6]' : 'blue'}`}>All</button>
                        <button onClick={selectBest} className={`py-3 px-8 font-medium text-xl  rounded-[10px] text-${best == 'select' ? 'black' : 'white'} bg-${best == 'select' ? '[#F6F6F6]' : 'blue'}`}>Best seller</button>
                        <button onClick={selectNature} className={`py-3 px-8 font-medium text-xl  rounded-[10px] text-${nature == 'select' ? 'black' : 'white'} bg-${nature == 'select' ? '[#F6F6F6]' : 'blue'}`}>Nature</button>
                        <button onClick={selectCity} className={`py-3 px-8 font-medium text-xl  rounded-[10px] text-${city == 'select' ? 'black' : 'white'} bg-${city == 'select' ? '[#F6F6F6]' : 'blue'}`}>City</button>
                        <button onClick={selectSea} className={`py-3 px-8 font-medium text-xl  rounded-[10px] text-${sea == 'select' ? 'black' : 'white'} bg-${sea == 'select' ? '[#F6F6F6]' : 'blue'}`}>Seasonal</button>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button onClick={toggleGrid} className={`bg-${grid == 'list' ? '[#F6F6F6]' : 'blue'} flex items-center gap-3 px-4  rounded-[10px] py-[17px] text-${grid == 'list' ? '#222222' : 'white'}`}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_56_1573)">
                                    <path d="M6.90594 0H2.31281C1.03754 0 0 1.03754 0 2.31281V6.90594C0 8.18121 1.03754 9.21875 2.31281 9.21875H6.90594C8.18121 9.21875 9.21875 8.18121 9.21875 6.90594V2.31281C9.21875 1.03754 8.18121 0 6.90594 0ZM7.65625 6.90594C7.65625 7.31965 7.31965 7.65625 6.90594 7.65625H2.31281C1.8991 7.65625 1.5625 7.31965 1.5625 6.90594V2.31281C1.5625 1.8991 1.8991 1.5625 2.31281 1.5625H6.90594C7.31965 1.5625 7.65625 1.8991 7.65625 2.31281V6.90594Z" fill={`${grid == 'list' ? '#222222' : 'white'}`} />
                                    <path d="M17.6562 0H13.125C11.8327 0 10.7812 1.05141 10.7812 2.34375V6.875C10.7812 8.16734 11.8327 9.21875 13.125 9.21875H17.6562C18.9486 9.21875 20 8.16734 20 6.875V2.34375C20 1.05141 18.9486 0 17.6562 0ZM18.4375 6.875C18.4375 7.30578 18.087 7.65625 17.6562 7.65625H13.125C12.6942 7.65625 12.3438 7.30578 12.3438 6.875V2.34375C12.3438 1.91297 12.6942 1.5625 13.125 1.5625H17.6562C18.087 1.5625 18.4375 1.91297 18.4375 2.34375V6.875Z" fill={`${grid == 'list' ? '#222222' : 'white'}`} />
                                    <path d="M6.90594 10.7812H2.31281C1.03754 10.7812 0 11.8188 0 13.0941V17.6872C0 18.9625 1.03754 20 2.31281 20H6.90594C8.18121 20 9.21875 18.9625 9.21875 17.6872V13.0941C9.21875 11.8188 8.18121 10.7812 6.90594 10.7812ZM7.65625 17.6872C7.65625 18.1009 7.31965 18.4375 6.90594 18.4375H2.31281C1.8991 18.4375 1.5625 18.1009 1.5625 17.6872V13.0941C1.5625 12.6804 1.8991 12.3438 2.31281 12.3438H6.90594C7.31965 12.3438 7.65625 12.6804 7.65625 13.0941V17.6872Z" fill={`${grid == 'list' ? '#222222' : 'white'}`} />
                                    <path d="M17.6562 10.7812H13.125C11.8327 10.7812 10.7812 11.8327 10.7812 13.125V17.6562C10.7812 18.9486 11.8327 20 13.125 20H17.6562C18.9486 20 20 18.9486 20 17.6562V13.125C20 11.8327 18.9486 10.7812 17.6562 10.7812ZM18.4375 17.6562C18.4375 18.087 18.087 18.4375 17.6562 18.4375H13.125C12.6942 18.4375 12.3438 18.087 12.3438 17.6562V13.125C12.3438 12.6942 12.6942 12.3438 13.125 12.3438H17.6562C18.087 12.3438 18.4375 12.6942 18.4375 13.125V17.6562Z" fill={`${grid == 'list' ? '#222222' : 'white'}`} />
                                </g>
                                <defs>
                                    <clipPath id="clip0_56_1573">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Grid view</p>
                        </button>
                        <button onClick={toggleGrid} className={`${grid == 'grid' ? 'bg-[#F6F6F6]' : 'bg-blue'} flex items-center gap-3 px-4  rounded-[10px] py-[17px] text-${grid == 'grid' ? '#222222' : 'white'}`}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_56_1616)">
                                    <path d="M19 11H1C0.734784 11 0.48043 10.8946 0.292893 10.7071C0.105357 10.5196 0 10.2652 0 10C0 9.73478 0.105357 9.48043 0.292893 9.29289C0.48043 9.10536 0.734784 9 1 9H19C19.2652 9 19.5196 9.10536 19.7071 9.29289C19.8946 9.48043 20 9.73478 20 10C20 10.2652 19.8946 10.5196 19.7071 10.7071C19.5196 10.8946 19.2652 11 19 11ZM19 4H1C0.734784 4 0.48043 3.89464 0.292893 3.70711C0.105357 3.51957 0 3.26522 0 3C0 2.73478 0.105357 2.48043 0.292893 2.29289C0.48043 2.10536 0.734784 2 1 2H19C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3C20 3.26522 19.8946 3.51957 19.7071 3.70711C19.5196 3.89464 19.2652 4 19 4ZM19 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17C0 16.7348 0.105357 16.4804 0.292893 16.2929C0.48043 16.1054 0.734784 16 1 16H19C19.2652 16 19.5196 16.1054 19.7071 16.2929C19.8946 16.4804 20 16.7348 20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18Z"
                                        fill={`${grid == 'grid' ? '#222222' : 'white'}`} />
                                </g>
                                <defs>
                                    <clipPath id="clip0_56_1616">
                                        <rect width="20" height="20" fill="black" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>List view</p>
                        </button>
                    </div>
                </div>
                <div className=' grid grid-cols-3 grid-rows-5 h-[2545px]  w-full pt-20 gap-[30px] '>
                    <div id='card' className=" col-span-1 rounded-3xl bg-[url('/winter.png')] bg-cover bg-center flex flex-col p-[34px] justify-end relative shadow-inner ">
                        {/* <div className='absolute bg-gradient-to-t from-black to-white w-full h-1/2 '></div> */}
                        <h1 className='font-medium text-white text-[32px] leading-[40px]'>Place name </h1>
                        <div className='flex items-center gap-2'>
                            <Loc />
                            <h3 className='text-white font-light text-base pr-3'>country name  |</h3>
                            <Dollar />
                            <h3 className='text-white font-light text-base '>How much</h3>
                        </div>
                    </div>
                    <div id='card' className="col-span-2 rounded-3xl  bg-cover bg-no-repeat bg-center bg-[url('/japan.png')]  flex flex-col p-[34px] justify-end " >
                        <h1 className='font-medium text-white text-[32px] leading-[40px]'>Place name </h1>
                        <div className='flex items-center gap-2'>
                            <Loc />
                            <h3 className='text-white font-light text-base pr-3'>country name  |</h3>
                            <Dollar />
                            <h3 className='text-white font-light text-base '>How much</h3>
                        </div>
                    </div>
                    <div id='card' className=" col-span-1 rounded-3xl bg-[url('/winter.png')] bg-cover bg-center flex flex-col p-[34px] justify-end relative shadow-inner ">
                        {/* <div className='absolute bg-gradient-to-t from-black to-white w-full h-1/2 '></div> */}
                        <h1 className='font-medium text-white text-[32px] leading-[40px]'>Place name </h1>
                        <div className='flex items-center gap-2'>
                            <Loc />
                            <h3 className='text-white font-light text-base pr-3'>country name  |</h3>
                            <Dollar />
                            <h3 className='text-white font-light text-base '>How much</h3>
                        </div>
                    </div>
                    <div id='card' className=" col-span-1 rounded-3xl bg-[url('/winter.png')] bg-cover bg-center flex flex-col p-[34px] justify-end relative  ">
                        {/* <div className='absolute bg-gradient-to-t from-black to-white w-full h-1/2 '></div> */}
                        <h1 className='font-medium text-white text-[32px] leading-[40px]'>Place name </h1>
                        <div className='flex items-center gap-2'>
                            <Loc />
                            <h3 className='text-white font-light text-base pr-3'>country name  |</h3>
                            <Dollar />
                            <h3 className='text-white font-light text-base '>How much</h3>
                        </div>
                    </div>
                    <div id='card' className=" col-span-1 row-span-2 rounded-3xl bg-[url('/winter.png')] bg-cover bg-center flex flex-col p-[34px] justify-end relative  ">
                        {/* <div className='absolute bg-gradient-to-t from-black to-white w-full h-1/2 '></div> */}
                        <h1 className='font-medium text-white text-[32px] leading-[40px]'>Place name </h1>
                        <div className='flex items-center gap-2'>
                            <Loc />
                            <h3 className='text-white font-light text-base pr-3'>country name  |</h3>
                            <Dollar />
                            <h3 className='text-white font-light text-base '>How much</h3>
                        </div>
                    </div>
                    <div id='card' className=" col-span-2 row-span-1 rounded-3xl bg-[url('/winter.png')] bg-cover bg-center flex flex-col p-[34px] justify-end relative  ">
                        {/* <div className='absolute bg-gradient-to-t from-black to-white w-full h-1/2 '></div> */}
                        <h1 className='font-medium text-white text-[32px] leading-[40px]'>Place name </h1>
                        <div className='flex items-center gap-2'>
                            <Loc />
                            <h3 className='text-white font-light text-base pr-3'>country name  |</h3>
                            <Dollar />
                            <h3 className='text-white font-light text-base '>How much</h3>
                        </div>
                    </div>
                    <div id='card' className=" col-span-1 row-span-2 rounded-3xl bg-[url('/winter.png')] bg-cover bg-center flex flex-col p-[34px] justify-end relative  ">
                        {/* <div className='absolute bg-gradient-to-t from-black to-white w-full h-1/2 '></div> */}
                        <h1 className='font-medium text-white text-[32px] leading-[40px]'>Place name </h1>
                        <div className='flex items-center gap-2'>
                            <Loc />
                            <h3 className='text-white font-light text-base pr-3'>country name  |</h3>
                            <Dollar />
                            <h3 className='text-white font-light text-base '>How much</h3>
                        </div>
                    </div>
                    <div id='card' className=" col-span-1 rounded-3xl bg-[url('/winter.png')] bg-cover bg-center flex flex-col p-[34px] justify-end relative  ">
                        {/* <div className='absolute bg-gradient-to-t from-black to-white w-full h-1/2 '></div> */}
                        <h1 className='font-medium text-white text-[32px] leading-[40px]'>Place name </h1>
                        <div className='flex items-center gap-2'>
                            <Loc />
                            <h3 className='text-white font-light text-base pr-3'>country name  |</h3>
                            <Dollar />
                            <h3 className='text-white font-light text-base '>How much</h3>
                        </div>
                    </div>
                    <div id='card' className=" col-span-1 rounded-3xl bg-[url('/winter.png')] bg-cover bg-center flex flex-col p-[34px] justify-end relative  ">
                        {/* <div className='absolute bg-gradient-to-t from-black to-white w-full h-1/2 '></div> */}
                        <h1 className='font-medium text-white text-[32px] leading-[40px]'>Place name </h1>
                        <div className='flex items-center gap-2'>
                            <Loc />
                            <h3 className='text-white font-light text-base pr-3'>country name  |</h3>
                            <Dollar />
                            <h3 className='text-white font-light text-base '>How much</h3>
                        </div>
                    </div>
                    <div id='card' className=" col-span-1 rounded-3xl bg-[url('/winter.png')] bg-cover bg-center flex flex-col p-[34px] justify-end relative  ">
                        {/* <div className='absolute bg-gradient-to-t from-black to-white w-full h-1/2 '></div> */}
                        <h1 className='font-medium text-white text-[32px] leading-[40px]'>Place name </h1>
                        <div className='flex items-center gap-2'>
                            <Loc />
                            <h3 className='text-white font-light text-base pr-3'>country name  |</h3>
                            <Dollar />
                            <h3 className='text-white font-light text-base '>How much</h3>
                        </div>
                    </div>
                    <div id='card' className=" col-span-1 rounded-3xl bg-[url('/winter.png')] bg-cover bg-center flex flex-col p-[34px] justify-end relative  ">
                        {/* <div className='absolute bg-gradient-to-t from-black to-white w-full h-1/2 '></div> */}
                        <h1 className='font-medium text-white text-[32px] leading-[40px]'>Place name </h1>
                        <div className='flex items-center gap-2'>
                            <Loc />
                            <h3 className='text-white font-light text-base pr-3'>country name  |</h3>
                            <Dollar />
                            <h3 className='text-white font-light text-base '>How much</h3>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div >
    )
}
