import React, { useState } from 'react';
import { LeftArrow } from './LeftArrow';
import { RightArrow } from './RightArrow';
import ReviewCard from './ReviewCard';
import { Data } from '../Home/types/heroTypes';

const Reviews = ({ data }: { data: Data[] }) => {
    const pageSize = 2; // Number of items per page
    const [currentPage, setCurrentPage] = useState(0);

    const startIndex = currentPage * pageSize;
    const endIndex = startIndex + pageSize;
    const totalPages = Math.ceil(data.length / pageSize);

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className='flex flex-col mt-20 mb-20'>
            <div className='flex justify-between'>
                <div className='text-[40px] font-oswald font-bold'>
                    REVIEWS
                </div>
                <div className='flex gap-20'>
                    {currentPage !== 0 && <button onClick={handlePrevPage}><LeftArrow /></button>}
                    {currentPage !== totalPages - 1 && <button onClick={handleNextPage}><RightArrow /></button>}
                </div>
            </div>
            <div className='mt-10 flex justify-between'>
                {data.slice(startIndex, endIndex).map((review,) => (
                    <ReviewCard

                        message={review.title}
                        proPic={review.cover_image}
                        name={review.title}
                        bio={review.comments_count}
                    />
                ))}
            </div>
            {/* <div className="pagination">
                <span>{`Page ${currentPage + 1} of ${totalPages}`}</span>
            </div> */}
        </div>
    );
};

export default Reviews;
