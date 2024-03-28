import React, { useState } from 'react'
import Header, { getServerSideProps } from '../Home/Header'
import { Data } from '../Home/types/heroTypes'
import Description from './Description';
import Included from './Included';

const TourDetailHero = ({ data }: { data: Data[] }) => {
    const slicedData = data.sort((a, b) => b.reading_time_minutes - a.reading_time_minutes).slice(0, 6);
    const [currentSlide, setCurrentSlide] = useState(1);

    const handlePrev = () => {
        setCurrentSlide(oldSlide => (oldSlide > 0 ? oldSlide - 1 : slicedData.length - 1));
    }

    const handleNext = () => {
        setCurrentSlide(oldSlide => (oldSlide < slicedData.length - 1 ? oldSlide + 1 : 0));
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
            <div className="h-[500px] mt-14 mb-14 w-full flex gap-3 relative">
                <button className='absolute left-5 top-1/2 p-2 bg-white' onClick={handlePrev}>
                    Prev
                </button>
                <div className="flex gap-5 justify-center">
                    {slicedData.map((data, index) => (
                        <div className={`relative w-[832px] h-[500px] rounded-3xl`}>
                            <img
                                src={data.cover_image}
                                className="w-full h-full"
                                style={{ display: (index === currentSlide || index === currentSlide - 1 || index === currentSlide + 1) ? 'block' : 'none' }}
                            />
                            <div className={`absolute top-0 left-0 w-full h-full bg-black ${index === currentSlide ? 'opacity-0' : 'opacity-50'}`}></div>
                        </div>
                    ))}
                </div>
                <button className='absolute right-5 top-1/2 p-2 bg-white' onClick={handleNext}>
                    Next
                </button>
            </div>
            <Description data={data} />

        </>
    )
}

{ getServerSideProps }

export default TourDetailHero;