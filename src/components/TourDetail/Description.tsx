import React from 'react'
import { LocationIcon } from '../icons/HomeIcons/LocationIcon'
import { Dollar } from '../icons/destinaton/Dollar'
import { TimeIcon } from './TimeIcon'
import { CalendarIcon } from './CalendarIcon'
import Included from './Included'
import { getServerSideProps } from '../Home/toursData'
import { Data } from '../../types/toursTypes'
import Itinerary from './Itinerary'
import Reviews from './Reviews'

const Description = ({ data }: { data: Data[] }) => {
    return (
        <div className='flex items-center justify-center'>
            <div className='max-w-[1520px] w-[90%]'>
                <div className='w-full flex justify-between items-center gap-2'>
                    <div className='font-primary w-[673px]'>
                        Escape to paradise with our 5-day Beach Vacation in Cancun tour package! Relax and unwind on the stunning beaches of the Caribbean while staying at an all-inclusive resort. Swim in crystal-clear waters and explore the colorful coral reefs and marine life through a snorkeling tour. Discover the ancient Mayan ruins of Chichen Itza, one of the Seven Wonders of the World, and take a refreshing dip in a nearby cenote. Enjoy the resort's amenities, including pools, beach, and activities, and take a cooking class to learn to make traditional Mexican dishes. With an optional visit to the nearby town of Playa del Carmen or Isla Mujeres, this tour package has everything you need for a beach vacation in Cancun.
                    </div>
                    <div className='w-[615px] flex p-10 bg-grayColor rounded-3xl'>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <h1 className='font-bold font-oswald text-4xl'>Tour Package Details</h1>
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex gap-4'>
                                        <LocationIcon width='24' height='24' fill='#4997D3' />
                                        Cancun, Mexico
                                    </div>
                                    <div className='flex gap-4'>
                                        <Dollar width='24' height='24' fill='#4997D3' />
                                        Start from $1,400
                                    </div>
                                    <div className='flex gap-4'>
                                        <TimeIcon />
                                        10 Days
                                    </div>
                                    <div className='flex gap-4'>
                                        <CalendarIcon />
                                        May 15, 2026 - May 25, 2026
                                    </div>
                                </div>
                                {/* <div className='flex flex-col'>
                                    <div>Quota</div>
                                    <div className='flex gap-4'>10 <div>/</div></div>
                                    <div className='font-oswald font-bold text-blue text-[100px] float-right'>50</div>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
                <Included data={data} />
                <Itinerary data={data} />
                <Reviews data={data} />
            </div>

        </div>
    )
}

{ getServerSideProps }

export default Description