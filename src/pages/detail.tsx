import { Data } from '@/components/Home/types/heroTypes'
import TourDetailHero from '@/components/TourDetail/TourDetailHero'
import React from 'react'
import { getServerSideProps } from '.'

const Detail = ({ data }: { data: Data[] }) => {
    return (
        <div>
            <TourDetailHero data={data} />
        </div>
    )
}

export { getServerSideProps }

export default Detail