import React from 'react'
import { PageTitleDesign } from './PageTitleDesign'
import { Line } from '../icons/HomeIcons/Line'
import { PlanningSvg } from '../icons/HomeIcons/PlanningSvg'
import { CalendarSvg } from '../icons/HomeIcons/CalendarSvg'
import { TripSvg } from '../icons/HomeIcons/TripSvg'
import { AirplaneSvg } from '../icons/HomeIcons/AirplaneSvg'
import { getServerSideProps } from '../../utils/fetchTravelDatas'
import { Travel } from '../../types/travelTypes'

const Gallery = ({ travelDatas }: { travelDatas: Travel }) => {
    const slicedData = travelDatas.result.slice(0, 6)
    return (
        <div className='mb-40 flex justify-center pt-20'>
            <div className='max-w-[1520px] w-[90%]'>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col'>
                        <PageTitleDesign title='GALLERY' textColor='text-grayColor' frontText='OUR ADVENTURES' />
                        <div className='mt-20'>
                            <div>
                                <div className="lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-4 flex flex-col gap-4">
                                    {slicedData.map((data) => <img className='lg:w-[900px] lg:h-[400px] w-full h-[400px] rounded-3xl' src={data.image.mainImage} alt="" />)}
                                    {/* <div className="row-span-5">
                                        <img className='w-full h-full rounded-3xl' src="Pic2.jpg" alt="" />
                                    </div>
                                    <div className="row-span-2">
                                        <img className='w-full h-full rounded-3xl' src="Pic.jpg" alt="" />
                                    </div>
                                    <div className="row-span-3">
                                        <img className='h-full rounded-3xl' src="Pic2.jpg" alt="" />
                                    </div>
                                    <div className="row-span-2">
                                        <img className='h-full rounded-3xl' src="Pic3.jpg" alt="" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { getServerSideProps };

export default Gallery;