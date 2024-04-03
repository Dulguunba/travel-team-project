import { Travel } from '@/types/travelTypes'
import TourDetailHero, { getServerSideProps } from '@/components/TourDetail/TourDetailHero'
import React from 'react'
import { Footer } from '@/components/Footer'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Props } from './index'

const Detail = ({ toursData, travelDatas, destinationDatas, categoryDatas }: Props) => {
    return (
        <div>
            <TourDetailHero destinationDatas={destinationDatas} categoryDatas={categoryDatas} travelDatas={travelDatas} toursData={toursData} />
            <Footer />
        </div>
    )
}

export { getServerSideProps };

export default Detail