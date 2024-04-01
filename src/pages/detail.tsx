import { Data } from '@/components/Home/types/heroTypes'
import TourDetailHero from '@/components/TourDetail/TourDetailHero'
import React from 'react'
import { getServerSideProps } from '.'
import { Footer } from '@/components/destination/Footer'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Detail = ({ data }: { data: Data[] }) => {
    return (
        <div>
            <TourDetailHero data={data} />
            <Footer />
        </div>
    )
}

export { getServerSideProps }

export default Detail