import React, { useState } from 'react'
import { DownArrow } from '../icons/HomeIcons/DownArrow'
import { UpArrow } from '../icons/HomeIcons/UpArrow';

export const QuestionCard = () => {
    const [showAnswers, setShowAnswers] = useState(false);

    return (
        <div className='w-[987px] p-6 rounded-3xl border'>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-primary font-medium'>How do I book a trip with Vacasky?</h1>
                <button onClick={() => { setShowAnswers(!showAnswers) }}>
                    {showAnswers
                        ? <div className='p-2 bg-blue rounded-full'><UpArrow width='24' height='24' /></div>
                        : <div className='p-2 border border-blue rounded-full'><DownArrow width='24' height='24' fill="#4997D3" /></div>
                    }
                </button>
            </div>
            <p className={`w-[841px] mt-5 ${showAnswers ? "" : "hidden"}`}>Vacasky offers a wide range of travel packages to destinations around the world, including customized tours, group tours, luxury travel, adventure travel, and more. Our travel specialists work with you to create an itinerary that meets your specific needs and preferences.</p>
        </div>
    )
}
