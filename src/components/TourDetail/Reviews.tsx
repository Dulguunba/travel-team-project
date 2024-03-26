import React from 'react'
import { LeftArrow } from './LeftArrow'
import { RightArrow } from './RightArrow'
import ReviewCard from './ReviewCard'
import { getServerSideProps } from '../Home/heroData'
import { Data } from '../Home/types/heroTypes'

const Reviews = ({ data }: { data: Data[] }) => {
    const sortedData = data.sort((a, b) => b.public_reactions_count - a.public_reactions_count).slice(0, 2)
    return (
        <div className='flex flex-col mt-20 mb-20'>
            <div className='flex justify-between'>
                <div className='text-[40px] font-oswald font-bold'>
                    REVIEWS
                </div>
                <div className='flex gap-20'>
                    <button><LeftArrow /></button>
                    <button><RightArrow /></button>
                </div>
            </div>
            <div className='mt-10 flex justify-between'>
                {sortedData.map((data) => <ReviewCard message={data.title} proPic={data.cover_image} name={data.title} bio={data.comments_count} />)}
            </div>
        </div>
    )
}

{ getServerSideProps }

export default Reviews