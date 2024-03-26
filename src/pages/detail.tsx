import { Data } from '@/components/Home/types/heroTypes'
import TourDetailHero from '@/components/TourDetail/TourDetailHero'
import React from 'react'
import { getServerSideProps } from '.'
import { Footer } from '@/components/Footer'

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