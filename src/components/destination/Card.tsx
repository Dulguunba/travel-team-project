import React, { useState } from 'react'

import { LocationBlue, Dollar } from '../icons/destination'

type Props = {
  style: String;
  place: String;
  country: String;
  price: String;
  details: String;
}
export const Card = (props: Props) => {
  const LearnMore = () => {
    console.log("first")
  }
  return (
    <>
      <div id='card' className={` ${props.style} relative w-full h-full rounded-3xl bg-cover bg-center flex flex-col duration-1000 p-[34px] hover:justify-center hover:items-center' : 'justify-end'`}>
        <h1 className='font-medium text-white  text-[32px] leading-[40px]'>{props.place}</h1>
        <div className='flex items-center gap-2'>
          <LocationBlue />
          <h3 className='text-white font-light text-base pr-3'>{props.country}</h3>
          <Dollar />
          <h3 className='text-white font-light text-base '>{props.price}</h3>
        </div>
        <div className={'hover:flex hover:flex-col hover:duration-500'}>
          <p className='text-white w-[356px]'>{props.details}</p>
          <button onClick={LearnMore} className='mt-2 w-[160px] rounded-[10px] text-white border-2 border-white py-4 px-6 font-medium text-[20px] leading-[30px]'>Learn More</button>
        </div>
      </div >

      {/* 
          <div className='group absolute top-0 w-full h-full hover:bg-black hover:duration-500 hover:ease-in  hover:opacity-75 rounded-3xl'>
        <div className='flex items-center h-full justify-center w-full flex-col'>
          <h1 className='font-medium  text-white text-[32px] leading-[40px]  '>{props.place}</h1>
          <div className='flex items-center gap-2 pt-6 pb-4'>
            <LocationBlue />
            <h3 className='text-white  font-light text-base pr-3'>{props.country}</h3>
            <Dollar />
            <h3 className='text-white font-light text-base '>{props.price}</h3>
          </div>
          <p className='text-white max-w-[356px] '>{props.details}</p>
          <button onClick={LearnMore} className='mt-10  rounded-[10px] text-white border-2 border-white py-4 px-6 font-medium text-[20px] leading-[30px]'>Learn More</button>
        </div>
      </div>
      
      <div>
        <h1 className='font-medium text-white  text-[32px] leading-[40px]'>{props.place}</h1>
        <div className='flex items-center gap-2 flex-wrap'>
          <LocationBlue />
          <h3 className='text-white font-light text-base pr-3'>{props.country}</h3>
          <Dollar />
          <h3 className='text-white font-light text-base '>{props.price}</h3>

        </div>
      </div> */}
    </>

  )
}
