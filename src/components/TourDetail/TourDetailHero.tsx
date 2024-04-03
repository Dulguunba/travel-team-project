import Slider from 'react-slick';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/component.json'
import { getServerSideProps } from '../../utils/fetchTravelDatas'
import Description from './Description';
import { Props } from '@/pages';
import Header from '../home/Header';


const TourDetailHero = ({ toursData, travelDatas, destinationDatas, categoryDatas }: Props) => {
    const travelData = travelDatas.result;
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 1000,
        focusOnSelect: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                },
            },

        ]
    };

    return (
        <>
            <img src="Pic2.jpg" className='w-full h-[400px] lg:h-[950px]' alt="" />
            <div className='absolute top-0 right-0 left-0'>
                <Header toursData={toursData} destinationDatas={destinationDatas} categoryDatas={categoryDatas} travelDatas={travelDatas} />
                <div className=' max-w-[1520px] m-auto w-[90%] h-[600px] flex lg:mt-8 bg justify-center'>
                    <div className='flex flex-col items-center mt-20'>
                        <div className='flex flex-col items-center drop-shadow-lg'>
                            <div className='z-50 text-white flex gap-3 lg:text-[20px] lg:leading-[30px] font-primary'>
                                <p className='border-r-2 pr-3'>Home</p>
                                <p className='border-r-2 pr-3'>Tours</p>
                                <p>Mexico</p>
                            </div>
                            <h1 className='font-oswald lg:mt-0 mt-5 drop-shadow-md font-bold text-4xl lg:text-[200px] lg:leading-[200px] text-white text-center'>BEACH VACATION IN CANCUN</h1>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="slider-container mt-10 mb-10 lg:pl-8 lg:pr-8 w-full overflow-hidden">
                <Slider {...settings}>
                    {travelData.slice(0, 5).map((item, index) => (
                        <div key={index} className='slide w-full'>
                            <img src={item.image.supportImage} className="lg:w-[832px] w-full h-[250px] lg:h-[500px] rounded-3xl" />
                        </div>
                    ))}
                </Slider>
            </div>
            {/* <SimpleSlider /> */}
            <Description destinationDatas={destinationDatas} categoryDatas={categoryDatas} toursData={toursData} travelDatas={travelDatas} />
        </>
    );
};

export { getServerSideProps };

export default TourDetailHero;
