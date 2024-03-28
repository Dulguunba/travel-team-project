import React from 'react'

interface Props {
    title: string
    textColor: string
    frontText: string
}

export const PageTitleDesign = ({ title, textColor, frontText }: Props) => {
    return (
        <div className='relative flex items-center justify-center'>
            <h1 className={`font-oswald text-[200px] ${textColor} drop-shadow-md`}>{title}</h1>
            <p className='absolute flex justify-center top-1/2 font-primary tracking-widest text-3xl text-blue'>{frontText}</p>
        </div>
    )
}
