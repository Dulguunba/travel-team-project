import React, { useState } from 'react'
import { Loc } from './icons/destinaton/Loc'
import { Dollar } from './icons/destinaton/Dollar'
export const Card = (props: any) => {
  const [isHover, setIsHover] = useState(false)
  const LearMore = () => {
    console.log("first")
  }
  return (
    <>

      <div id='card' onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} className={` ${props.style} relative w-full h-full rounded-3xl bg-cover bg-center flex flex-col duration-1000 p-[34px]
       ${isHover ? 'justify-center items-center' : 'justify-end'}   `}>
        {/* <div>
          <h1 className='font-medium text-white  text-[32px] leading-[40px]'>{props.place}</h1>
          <div className='flex items-center gap-2'>
            <Loc />
            <h3 className='text-white font-light text-base pr-3'>{props.country}</h3>
            <Dollar />
            <h3 className='text-white font-light text-base '>{props.price}</h3>
          </div>
          <div className={`${isHover ? 'flex flex-col duration-500' : 'hidden'}`}>
            <p className='text-white w-[356px]'>{props.details}</p>
            <button onClick={LearMore} className='mt-2 w-[160px] rounded-[10px] text-white border-2 border-white py-4 px-6 font-medium text-[20px] leading-[30px]'>Learn More</button>
          </div>
        </div> */}

        {isHover
          ?
          <div className='group absolute top-0 w-full h-full hover:bg-black hover:duration-500 hover:ease-in  hover:opacity-75 rounded-3xl'>
            <div className='flex items-center h-full justify-center w-full flex-col'>
              <h1 className='font-medium  text-white text-[32px] leading-[40px]  '>{props.place}</h1>
              <div className='flex items-center gap-2 pt-6 pb-4'>
                <Loc />
                <h3 className='text-white  font-light text-base pr-3'>{props.country}</h3>
                <Dollar />
                <h3 className='text-white font-light text-base '>{props.price}</h3>
              </div>
              <p className='text-white w-[356px]'>{props.details}</p>
              <button onClick={LearMore} className='mt-10  rounded-[10px] text-white border-2 border-white py-4 px-6 font-medium text-[20px] leading-[30px]'>Learn More</button>
            </div>
          </div>
          :
          <div>
            <h1 className='font-medium text-white  text-[32px] leading-[40px]'>{props.place}</h1>
            <div className='flex items-center gap-2'>
              <Loc />
              <h3 className='text-white font-light text-base pr-3'>{props.country}</h3>
              <Dollar />
              <h3 className='text-white font-light text-base '>{props.price}</h3>

            </div>
          </div>
        }

      </div>

    </>

  )
}
