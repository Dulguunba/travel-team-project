import React from 'react'
import ItineraryCard from './ItineraryCard'
import { Props, getServerSideProps } from './TourDetailHero'


const Itinerary = ({ toursData, travelDatas }: Props) => {
    const tourDatas = toursData.result;

    const sortedData = tourDatas.slice(0, 3)

    return (
        <div className='w-full flex flex-col gap-10 mt-14'>
            <div className='text-[40px] font-oswald font-bold'>
                ITINERARY
            </div>
            <div className='flex justify-between w-full overflow-scroll'>
                {sortedData.map((data) => <ItineraryCard image={data.name} title={data.name} time={data.name} />)}
            </div>
        </div>
    )
}

export { getServerSideProps };

export default Itinerary