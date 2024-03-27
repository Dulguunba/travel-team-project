import React, { useState } from 'react'
import Header, { getServerSideProps } from '../Home/Header'
import { Data } from '../Home/types/heroTypes'
import Description from './Description';
import Included from './Included';

const TourDetailHero = ({ data }: { data: Data[] }) => {
    const slicedData = data.sort((a, b) => b.reading_time_minutes - a.reading_time_minutes).slice(0, 5);
    const [currentSlide, setCurrentSlide] = useState(3);

    const handleCarousel = () => {

    }
    return (
        <>
            <img src="Pic2.jpg" className='w-full h-[950px]' alt="" />
            <div className='absolute top-0 right-0 left-0'>
                <Header data={data} />
                <div className=' max-w-[1520px] m-auto w-[90%] h-[600px] flex mt-8 bg justify-center'>
                    <div className='flex flex-col items-center mt-20'>
                        <div className='flex flex-col items-center drop-shadow-lg'>
                            <div className='z-50 text-white flex gap-3 text-[20px] leading-[30px] font-primary'>
                                <p className='border-r-2 pr-3'>Home</p>
                                <p className='border-r-2 pr-3'>Tours</p>
                                <p>Mexico</p>
                            </div>
                            <h1 className='font-oswald drop-shadow-md font-bold text-[200px] leading-[200px] text-white text-center'>BEACH VACATION
                                IN CANCUN</h1>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="carousel h-[500px] mt-14 mb-14 w-full flex gap-3 relative">
                <div className="carousel-item relative flex gap-5 justify-center">
                    <button className='carousel-control absolute left-0'>
                        Prev
                    </button>

                    {slicedData.map((data, index) => <img src={data.cover_image} className="w-[832px] h-[500px] rounded-3xl" />)}

                    <button className='absolute right-0'>
                        Next
                    </button>
                </div>
            </div>
            <Description data={data} />

        </>
    )
}

{ getServerSideProps }

export default TourDetailHero