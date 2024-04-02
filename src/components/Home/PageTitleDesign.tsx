import React from 'react'

interface Props {
    title: string
    textColor: string
    frontText: string
}

export const PageTitleDesign = ({ title, textColor, frontText }: Props) => {
    return (
        <div className='relative flex items-center justify-center'>
            <h1 className={`font-oswald md:text-[200px] text-6xl ${textColor} drop-shadow-md`}>{title}</h1>
            <p className='absolute flex justify-center md:top-1/2 font-primary text-xl md:tracking-widest md:text-3xl text-blue'>{frontText}</p>
        </div>
    )
}
