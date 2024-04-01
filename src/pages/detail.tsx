import { Travel } from '@/components/Home/types/travelTypes'
import TourDetailHero from '@/components/TourDetail/TourDetailHero'
import React from 'react'
import { getServerSideProps } from '../components/Home/travelData'
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

export { getServerSideProps }

export default Detail