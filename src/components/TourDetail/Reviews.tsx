import React, { useState } from 'react';
import { LeftArrow } from './LeftArrow';
import { RightArrow } from './RightArrow';
import ReviewCard from './ReviewCard';
import { Data } from '../Home/types/heroTypes';

const Reviews = ({ data }: { data: Data[] }) => {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        if (index > 0) setIndex(index - 2);
    }

    const handleNext = () => {
        if (index < data.length - 2) setIndex(index + 2);
    }

    return (
        <div className='flex flex-col mt-20 mb-20'>
            <div className='flex justify-between'>
                <div className='text-[40px] font-oswald font-bold'>
                    REVIEWS
                </div>
                <div className='flex gap-20'>
                    <button onClick={handlePrev}>
                        {index > 0 ? <LeftArrow /> : <LeftArrow fill='#F6F6F6' />}
                    </button>
                    <button onClick={handleNext}>
                        {index < data.length - 2 ? <RightArrow /> : <RightArrow fill='#F6F6F6' />}
                    </button>
                </div>
            </div>
            <div className='mt-10 flex justify-between'>
                {data.slice(index, index + 2).map((review) => (
                    <ReviewCard
                        message={review.title}
                        proPic={review.cover_image}
                        name={review.title}
                        bio={review.comments_count}
                    />
                ))}
            </div>

        </div>
    );
};

export default Reviews;