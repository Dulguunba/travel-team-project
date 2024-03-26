import React from 'react'
import { Loc } from './icons/destinaton/Loc'
import { Dollar } from './icons/destinaton/Dollar'

export const Form = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-[url('/place.png')] bg-no-repeat bg-cover">
                <div className='flex max-w-[1520px] w-[90%] py-5 flex-col h-[950px]'>
                    <div className='flex items-center justify-center h-full flex-col'>
                        <p className='text-white'> Home    |   Destination</p>
                        <h1 className='font-oswald text-white font-bold text-[200px] leading-[200px]'>BOOKING FORM</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-white pt-20">
                <div className='flex max-w-[1520px] w-[90%] flex-col '>
                    <h1 className='pb-[60px] font-oswald font-bold text-[40px] leading-[50px]'>PERSONAL IDENTITY</h1>
                    <div className='flex gap-[30px]'>
                        <div>
                            <div className='flex pb-4'>
                                <h2 className=''> FIRST NAME </h2>
                                <p className='text-blue'>*</p>
                            </div>
                            <div className='flex gap-[30px]'>
                                <button className='w-[184px] rounded-[15px] bg-grayColor h-[100px]'> Mrs</button>
                                <div className='w-[531px] flex items-center rounded-[15px] bg-grayColor h-[100px]'><input className='bg-grayColor rounded-[15px] pl-12 w-full h-full' type="text" placeholder='Amelia' /></div>
                            </div>
                        </div>
                        <div>
                            <div className='flex pb-4'>
                                <h2 className=''> LAST NAME </h2>
                                <p className='text-blue'>*</p>
                            </div>
                            <div className='w-[745px] flex items-center rounded-[15px] bg-grayColor h-[100px]'> <input type="text" className='bg-grayColor rounded-[15px] pl-12 w-full h-full' placeholder='Watson' /></div>
                        </div>
                    </div>
                    <div className='flex gap-[30px] pt-12'>
                        <div>
                            <div className='flex pb-4'>
                                <h2 className=''> EMAIL ADDRESS </h2>
                                <p className='text-blue'>*</p>
                            </div>
                            <div className='w-[745px] flex items-center rounded-[15px] bg-grayColor h-[100px]'>  <input type="text" className='bg-grayColor rounded-[15px] pl-12 w-full h-full' placeholder='AmeliaWatson@gmail.com' /></div>
                        </div>
                        <div>
                            <div className='flex pb-4'>
                                <h2 className=''> PHONE NUMBER </h2>
                                <p className='text-blue'>*</p>
                            </div>
                            <div className='w-[745px] flex items-center rounded-[15px] bg-grayColor h-[100px]'>  <input type="text" className='bg-grayColor rounded-[15px] pl-12 w-full h-full' placeholder='123 - 456 - 7890' /></div>
                        </div>
                    </div>
                    <div className='flex gap-[30px] pt-12'>
                        <div>
                            <div className='flex pb-4'>
                                <h2 className=''> START DATE </h2>
                                <p className='text-blue'>*</p>
                            </div>
                            <div className='flex gap-[30px]'>
                                <button className='w-[164px] rounded-[15px] bg-grayColor h-[100px]'> Mrs</button>
                                <button className='w-[164px] rounded-[15px] bg-grayColor h-[100px]'> Mrs</button>
                                <button className='w-[193px] rounded-[15px] bg-grayColor h-[100px]'> Mrs</button>
                            </div>
                        </div>
                        <div>
                            <div className='flex pb-4'>
                                <h2 className=''>DURATION </h2>
                                <p className='text-blue'>*</p>
                            </div>
                            <button className='w-[328px] rounded-[15px] bg-grayColor h-[100px]'>Mrs</button>
                        </div>
                        <div>
                            <div className='flex pb-4'>
                                <h2 className=''>DESTINATION </h2>
                                <p className='text-blue'>*</p>
                            </div>
                            <button className='w-[551px] rounded-[15px] bg-grayColor h-[100px]'> Mrs</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between pt-20'>
                        <h1 className=' font-oswald font-bold text-[40px] leading-[50px] pb-12'>PACKAGE</h1>
                        <div className='flex gap-[64px]' >
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.1">
                                    <path d="M14.9999 24C14.9999 23.6163 15.1465 23.2323 15.4394 22.9395L30.4394 7.93947C31.0255 7.35335 31.9747 7.35335 32.5604 7.93947C33.1462 8.5256 33.1465 9.47472 32.5604 10.0605L18.6209 24L32.5604 37.9395C33.1465 38.5256 33.1465 39.4747 32.5604 40.0605C31.9743 40.6462 31.0252 40.6466 30.4394 40.0605L15.4394 25.0605C15.1465 24.7676 14.9999 24.3836 14.9999 24Z" fill="#222222" />
                                </g>
                            </svg>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.0001 24C33.0001 24.3837 32.8535 24.7677 32.5606 25.0605L17.5606 40.0605C16.9745 40.6467 16.0253 40.6467 15.4396 40.0605C14.8538 39.4744 14.8535 38.5253 15.4396 37.9395L29.3791 24L15.4396 10.0605C14.8535 9.4744 14.8535 8.52527 15.4396 7.93952C16.0257 7.35377 16.9748 7.3534 17.5606 7.93952L32.5606 22.9395C32.8535 23.2324 33.0001 23.6164 33.0001 24Z" fill="#4997D3" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[url('/sakura.png')] rounded-3xl h-[562px] flex flex-col pl-9 justify-between">
                            <div className='w-[56px] h-[56px] rounded-full border-white border-2 flex items-center justify-center bg-blue mt-8'>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4844 7.53163C28.0443 8.02153 28.0951 8.87498 27.5971 9.42769L13.5786 24.9874C13.078 25.543 12.2185 25.5783 11.674 25.0658L3.56194 17.429C3.05604 16.9527 3.00762 16.1591 3.44166 15.6166C3.92059 15.0179 4.81247 14.9355 5.38246 15.4482L11.6763 21.1094C12.2233 21.6014 13.0654 21.5574 13.5581 21.0111L25.6161 7.64193C26.104 7.10091 26.9361 7.05187 27.4844 7.53163Z" fill="white" />
                                </svg>
                            </div>
                            <div className='pb-[64px]'>
                                <h1 className='font-oswald font-bold text-[100px] leading-[100px] text-white'>DISCOVER JAPAN TOUR PACKAGE</h1>
                                <div className='flex items-center pt-10'>
                                    <Loc />
                                    <p className='font-normal text-[20px] text-white leading-[30px] pl-4 pr-6'>   Tokyo & Kyoto , Japan </p>
                                    <p className='font-normal text-[20px] text-white leading-[30px] pr-4 '>|</p>
                                    <Dollar />
                                    <p className='font-normal text-[20px] text-white leading-[30px] pl-4 pr-6'>Start from $ 3,500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between pt-20 pb-[120px]'>
                        <div>
                            <div className='flex gap-4'>
                                <input type="checkbox" defaultChecked className="checkbox" />
                                <p>Get me a travel insurance that covers my whole trip safety and cancellation.</p>
                            </div>
                            <div className='flex gap-4 pt-4'>
                                <input type="checkbox" defaultChecked className="checkbox" />
                                <p>Get me a travel insurance that covers my whole trip safety and cancellation.</p>
                            </div>
                        </div>
                        <button className='py-[30px] px-[100px] bg-blue text-white rounded-xl'>Book Now</button>
                    </div>

                </div>
            </div>
        </>
    )
}

