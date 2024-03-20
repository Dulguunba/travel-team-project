import React from 'react'
import { LocationIcon } from '../icons/LocationIcon'

export const PopularDestinations = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='max-w-[1520px] w-[90%] mt-20'>
                <div className='flex h-[769px] flex-col gap-10 items-center '>
                    <div className='text-center flex gap-4 flex-col'>
                        <h1 className='font-oswald font-bold text-4xl'>POPULAR DESTINATIONS</h1>
                        <p>Explore our top destinations right from our beloved clients’ reviews.</p>
                    </div>
                    <div>
                        <div className="carousel w-full flex gap-5">
                            <div id="slide1" className="carousel-item">
                                <img src="Pic.jpg" className="w-[372px] h-[503px] rounded-3xl" />
                            </div>
                            <div id="slide2" className="carousel-item">
                                <div className='relative'>
                                    <img src="Pic.jpg" className="w-[713px] h-[609px] rounded-3xl" />
                                    <div className='absolute top-0 w-[713px] h-[609px]'>
                                        <div className="bg-gradient-to-t from-black to-transparent absolute inset-0 rounded-3xl">
                                            <div className='absolute bottom-0'>
                                                <div className='p-8 flex font-primary flex-col gap-3 text-white'>
                                                    <h1 className='text-3xl font-medium'>Switzerland</h1>
                                                    <div className='flex gap-2 items-center'>
                                                        <LocationIcon />
                                                        <p className='text-xl font-normal'>20 Packages</p>
                                                    </div>
                                                    <p className='text-xl text-gray-500'>Switzerland, officially the Swiss Confederation, is a landlocked
                                                        country located at the northern part of Europe.</p>
                                                    <div className='flex gap-5'>
                                                        <button className='p-3  w-[147px] rounded-lg font-medium bg-white text-black'>Book now</button>
                                                        <button className='border w-[147px] rounded-lg font-medium border-white p-3'>Learn more</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item">
                                <img src="Pic.jpg" className="w-[372px] h-[503px] rounded-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
