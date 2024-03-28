import React from 'react'

interface Props {
    message: string
    proPic: string
    name: string
    bio: string
}

const ReviewCard = ({ message, proPic, name, bio }: Props) => {
    return (
        <div className='w-[745px] h-[428px] rounded-3xl p-16 font-primary shadow-xl flex flex-col justify-between'>
            <p className='text-[20px] font-normal'>{message}</p>
            <div className='flex gap-5 items-center'>
                <div className='overflow-hidden w-20 h-20 rounded-full'> <img src={proPic} alt="" className='w-full h-full' /></div>
                <div className='flex flex-col'>
                    <h1 className='text-[20px] font-medium'>{name}</h1>
                    <p className='font-light'>{bio}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard