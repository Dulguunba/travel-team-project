import React from 'react'
import Header, { getServerSideProps } from '../Home/Header'
import { Data } from '../Home/types/heroTypes'

const TourDetailHero = ({ data }: { data: Data[] }) => {
    return (
        <>
            <img src="Pic2.jpg" className='w-full h-[950px]' alt="" />
            <div className='absolute top-0 right-0 left-0'>
                <Header data={data} />
                <div className=' max-w-[1520px] m-auto w-[90%] h-[600px] flex mt-8 bg justify-center'>
                    <div className='flex flex-col items-center mt-20'>
                        <div className='flex flex-col items-center drop-shadow-lg'>
                            <div className='z-50 text-white flex gap-3 text-[20px] leading-[30px] font-primary'>
                                <p className='border-r-2 pr-3'>Home</p>
                                <p className='border-r-2 pr-3'>Tours</p>
                                <p>Mexico</p>
                            </div>
                            <h1 className='font-oswald drop-shadow-md font-bold text-[200px] leading-[200px] text-white text-center'>BEACH VACATION
                                IN CANCUN</h1>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="carousel h-[500px] mt-8 w-full flex gap-3 relative">
                <div id="slide1" className="carousel-item relative flex justify-center">
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-[832px] rounded-3xl" />
                </div>
                <div id="slide2" className="carousel-item relative  flex justify-center">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-[832px] rounded-3xl" />
                </div>
                <div id="slide3" className="carousel-item relative flex justify-center">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-[832px] rounded-3xl" />
                </div>
                <div id="slide4" className="carousel-item relative flex justify-center">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-[832px] rounded-3xl" />
                </div>
                <div id="slide5" className="carousel-item relative flex justify-center">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-[832px] rounded-3xl" />
                </div>

            </div>
            {/* <div className="carousel carousel-center relative mt-8 w-full p-4 space-x-4 rounded-box">
                <div id='slide1' className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box w-[832px] h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id='slide2' className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="rounded-box w-[832px] h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id='slide3' className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box w-[832px] h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id='slide4' className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box w-[832px] h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id='slide5' className="carousel-item">
                    <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="rounded-box w-[832px] h-[500px]" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}
        </>
    )
}

{ getServerSideProps }

export default TourDetailHero