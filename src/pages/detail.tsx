import { Travel } from '@/types/travelTypes'
import TourDetailHero from '@/components/TourDetail/TourDetailHero'
import React from 'react'
import { Footer } from '@/components/Footer'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Detail = ({ travelDatas }: { travelDatas: Travel }) => {
    return (
        <div>
            {/* <TourDetailHero data={data} /> */}
            <Footer />
        </div>
    )
}


export default Detail