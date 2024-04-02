import React, { useState } from 'react';
import { LeftArrow } from './LeftArrow';
import { RightArrow } from './RightArrow';
import ReviewCard from './ReviewCard';
import { Props, getServerSideProps } from './TourDetailHero';


const Reviews = ({ toursData, travelDatas }: Props) => {
    const tourDatas = toursData.result;
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        if (index > 0) setIndex(index - 2);
    }

    const handleNext = () => {
        if (index < tourDatas.length - 2) setIndex(index + 2);
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
                        {index < tourDatas.length - 2 ? <RightArrow /> : <RightArrow fill='#F6F6F6' />}
                    </button>
                </div>
            </div>
            <div className='mt-10 flex justify-between'>
                {tourDatas.slice(index, index + 2).map((review) => (
                    <ReviewCard
                        message={review.english}
                        proPic={review.english}
                        name={review.english}
                        bio={review.english}
                    />
                ))}
            </div>

        </div>
    );
};

export { getServerSideProps }

export default Reviews;