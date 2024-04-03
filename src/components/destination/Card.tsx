import React, { useState } from 'react'
import { LocationBlue, Dollar, LocationWhite } from '../icons/destination'

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
      <div id='card' className={`card ${props.style} '`}>
        <div className="image">
          <h1>Place name</h1>
          <div id='p' className='flex items-center w-[356px] gap-5'>
            <div className='flex items-center w-[132px] gap-2'>
              <LocationWhite />
              <p>20 Packages</p>
            </div>
            <p>|</p>
            <div className='flex items-center w-[132px] gap-2'>
              <Dollar />
              <p>500 1000</p>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="center">
            <h1>Place name</h1>
            <div className='flex items-center w-[356px] gap-5'>
              <div className='flex items-center w-[132px]'>
                <LocationWhite />
                <p>20 Packages </p>
              </div>
              <p>|</p>
              <div className='flex items-center w-[132px]'>
                <Dollar />
                <p>500 1000</p>
              </div>
            </div>
            <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
            <button className='button'>Learn more</button>
          </div>
        </div>

      </div >
    </>

  )
}
