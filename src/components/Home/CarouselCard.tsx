import React, { ReactElement, useState } from 'react'

interface Props {
  image: string
  title: string
  icon: ReactElement
  miniTitle: string
  description: string
}

export const CarouselCard = ({ image, title, icon, miniTitle, description }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setIsHovered(true);
    }
  };
  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setIsHovered(false)
    }
  }
  return (
    <div className='relative'>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='border cursor-pointer rounded-3xl'>
        <img src={image} className={`${isHovered ? "md:w-[713px] md:h-[609px]" : "md:w-[372px] md:h-[503px]"} transition-all w-[417px] h-[564px] ease-out duration-700 rounded-3xl`} />
        <div className={`hidden md:block absolute top-0 w-full h-full transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-t from-black to-transparent absolute inset-0 rounded-3xl">
            <div className='absolute bottom-0'>
              <div className='md:p-8 flex font-primary flex-col gap-3 text-white transition-all duration-700'>
                <h1 className='text-3xl font-medium '>{title}</h1>
                <div className='flex gap-2 items-center'>
                  {icon}
                  <p className='text-xl font-normal'>{miniTitle}</p>
                </div>
                <p className='text-xl text-gray-500'>{description}</p>
                <div className='flex gap-5'>
                  <button className='md:p-3  md:w-[147px] rounded-lg font-medium bg-white text-black'>Book now</button>
                  <button className='border md:w-[147px] rounded-lg font-medium border-white p-3'>Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
