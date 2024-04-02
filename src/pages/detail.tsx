import { Travel } from '@/types/travelTypes'
import TourDetailHero, { Props, getServerSideProps } from '@/components/TourDetail/TourDetailHero'
import React from 'react'
import { Footer } from '@/components/Footer'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Detail = ({ toursData, travelDatas }: Props) => {
    return (
        <div>
            <TourDetailHero travelDatas={travelDatas} toursData={toursData} />
            <Footer />
        </div>
    )
}

export { getServerSideProps };

export default Detail