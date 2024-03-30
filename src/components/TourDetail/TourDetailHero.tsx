import Slider from 'react-slick';
import React from 'react';
import Header, { getServerSideProps } from '../Home/Header';
import { Data } from '../Home/types/heroTypes';
import Description from './Description';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/component.json'
import CenterMode from './CenterMode';
import SimpleSlider from './CenterMode';

const TourDetailHero = ({ data }: { data: Data[] }) => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 1000,
        focusOnSelect: true,
        centerMode: true
    };

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
                            <h1 className='font-oswald drop-shadow-md font-bold text-[200px] leading-[200px] text-white text-center'>BEACH VACATION IN CANCUN</h1>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="slider-container mt-10 mb-10 pl-8 pr-8 w-full">
                <Slider {...settings}>
                    {data.slice(0, 5).map((item, index) => (
                        <div key={index} className='slide'>
                            <img src={item.cover_image} className="w-[832px] h-[500px] rounded-3xl m" />
                        </div>
                    ))}
                </Slider>
            </div>
            {/* <SimpleSlider /> */}
            <Description data={data} />

        </>
    );
};

{ getServerSideProps }

export default TourDetailHero;
