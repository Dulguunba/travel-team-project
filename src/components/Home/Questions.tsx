import React from 'react'
import { QuestionCard } from './QuestionCard'

export const Questions = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='max-w-[1520px] w-[90%] mt-40 flex flex-col items-center justify-center'>
                <div className='text-center flex flex-col gap-2'>
                    <h1 className='text-[40px] font-oswald font-bold'>FREQUENTLY ASKED QUESTIONS</h1>
                    <p className='font-primary font-normal text-xl '>What our clients usually asked about our services and tours.</p>
                </div>
                <div className='flex gap-5 flex-col mt-20'>
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                </div>
            </div>
        </div>
    )
}
