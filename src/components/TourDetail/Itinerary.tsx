import React from 'react'
import ItineraryCard from './ItineraryCard'
import { getServerSideProps } from '../Home/heroData'
import { Data } from '../Home/types/heroTypes'

const Itinerary = ({ data }: { data: Data[] }) => {

    const sortedData = data.sort((a, b) => b.public_reactions_count - a.public_reactions_count).slice(0, 3)

    return (
        <div className='w-full flex flex-col gap-10 mt-14'>
            <div className='text-[40px] font-oswald font-bold'>
                ITINERARY
            </div>
            <div className='flex justify-between w-full overflow-scroll'>
                {sortedData.map((data) => <ItineraryCard image={data.cover_image} title={data.title} time={data.comments_count} />)}
            </div>
        </div>
    )
}

{ getServerSideProps }

export default Itinerary