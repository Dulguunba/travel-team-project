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

  return (

    <div className='relative'>
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='border cursor-pointer rounded-3xl'>
        <img src={image} className={`${isHovered ? "w-[713px] h-[609px]" : "w-[372px] h-[503px]"} transition-all ease-out duration-700 rounded-3xl`} />
        {isHovered
          ? <div className='absolute top-0 w-full h-full'>
            <div className="bg-gradient-to-t from-black transform transition-all duration-700 to-transparent absolute inset-0 rounded-3xl">
              <div className='absolute bottom-0'>
                <div className='p-8 flex font-primary flex-col gap-3 text-white transform transition-all duration-700'>
                  <h1 className='text-3xl font-medium'>{title}</h1>
                  <div className='flex gap-2 items-center'>
                    {icon}
                    <p className='text-xl font-normal'>{miniTitle}</p>
                  </div>
                  <p className='text-xl text-gray-500'>{description}</p>
                  <div className='flex gap-5'>
                    <button className='p-3  w-[147px] rounded-lg font-medium bg-white text-black'>Book now</button>
                    <button className='border w-[147px] rounded-lg font-medium border-white p-3'>Learn more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          : <div></div>
        }
      </div>
    </div>

  )
}
