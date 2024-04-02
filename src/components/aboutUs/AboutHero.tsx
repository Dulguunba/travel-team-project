import React from 'react'

export const AboutHero = () => {
    return (
        <div>
            <img src="Pic3.jpg" className='w-full h-[950px]' alt="" />
            <div className='absolute top-0 right-0 left-0'>

                <div className=' max-w-[1520px] m-auto w-[90%] h-[600px] flex mt-8 bg justify-center'>
                    <div className='flex flex-col items-center mt-20'>
                        <div className='flex flex-col items-center drop-shadow-lg'>
                            <div className='z-50 text-white flex gap-3 text-[20px] leading-[30px] font-primary'>
                                <p className='border-r-2 pr-3'>Home</p>
                                <p className='border-r-2 pr-3'>About Us</p>
                            </div>
                            <h1 className='font-oswald drop-shadow-md font-bold text-[200px] leading-[200px] text-white text-center'>ABOUT US</h1>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
