import React from 'react'
import { getServerSideProps } from '../Home/heroData'
import { Data } from '../Home/types/heroTypes'

const Included = ({ data }: { data: Data[] }) => {
    const slicedData = data.slice(0, 8)
    const notIncludedData = data.slice(8, 13)
    return (
        <div className='mt-14 flex justify-between'>
            <div className='flex flex-col gap-5'>
                <div className='text-[40px] font-oswald font-bold'>
                    INCLUDED
                </div>
                <ul className='list-disc ml-5 font-primary'>
                    {slicedData.map((data) => <li>{data.title}</li>)}
                </ul>
            </div>
            <div className='flex flex-col gap-5 w-[615px]'>
                <div className='text-[40px] font-oswald font-bold'>
                    NOT INCLUDED
                </div>
                <ul className='list-disc font-primary ml-5'>
                    {notIncludedData.map((data) => <li>{data.title}</li>)}
                </ul>
                <div className='relative'>
                    <img src="Pic2.jpg" className='w-full h-[204px] rounded-3xl' alt="" />
                    <div className='w-full h-[204px] rounded-3xl bg-[#D9D9D9] absolute top-0 opacity-30'>
                    </div>
                    <div className='absolute flex top-12 left-10 items-start flex-col gap-5 justify-center '>
                        <h1 className='font-oswald text-black font-bold text-3xl'>  Ready for an adventure?</h1>
                        <button className='p-3 bg-black font-normal text-white text-[20px] font-primary rounded-xl border border-black btn'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

{ getServerSideProps }

export default Included