import React from 'react'
import { Loc } from './icons/destinaton/Loc'
import { Correct } from './icons/destinaton/Correct'
import { Wrong } from './icons/destinaton/Wrong'

export const Order = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-white'>
            <div className='md:flex max-w-[1520px] w-[90%] py-5 md:justify-between'>
                <div className='md:w-[877px]'>
                    <h1 className='font-oswald font-bold text-[40px] leading-[50px]'>OVERVIEW</h1>
                    <p className='py-8 font-normal text-[20px] leading-[30px] text-[#222222]'>Discover the stunning landscapes of Halong Bay, where you'll cruise on a traditional junk boat and explore the breathtaking limestone karsts that rise from the emerald waters. Discover the beauty and charm of this unique region through a boat tour.</p>
                    <div className='grid grid-cols-2'>
                        <div className='flex gap-4 items-center'>
                            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00002 0C3.58889 0 0 3.58889 0 8.00002C0 9.32423 0.331078 10.6372 0.960469 11.8018L7.56253 23.7422C7.65042 23.9014 7.81791 24 8.00002 24C8.18213 24 8.34961 23.9014 8.4375 23.7422L15.042 11.7978C15.669 10.6372 16 9.32419 16 7.99997C16 3.58889 12.4111 0 8.00002 0ZM8.00002 12C5.79445 12 4.00003 10.2056 4.00003 8.00002C4.00003 5.79445 5.79445 4.00003 8.00002 4.00003C10.2056 4.00003 12 5.79445 12 8.00002C12 10.2056 10.2056 12 8.00002 12Z" fill="#4997D3" />
                            </svg>
                            <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>Halong Bay , Vietnam</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1C9.82441 1 7.69767 1.64514 5.88873 2.85383C4.07979 4.06253 2.66989 5.78049 1.83733 7.79048C1.00477 9.80047 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7886C11.9878 23.2131 14.1995 22.9952 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3023 23 14.1756 23 12C23 9.08262 21.8411 6.28473 19.7782 4.22183C17.7153 2.15893 14.9174 1 12 1ZM16 13H12C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V6C11 5.73478 11.1054 5.48043 11.2929 5.29289C11.4804 5.10536 11.7348 5 12 5C12.2652 5 12.5196 5.10536 12.7071 5.29289C12.8946 5.48043 13 5.73478 13 6V11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13Z" fill="#4997D3" />
                            </svg>
                            <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>5 Days</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.37204 0 0 5.37256 0 12C0 18.6274 5.37204 24 12 24C18.628 24 24 18.6269 24 12C24 5.37308 18.6274 0 12 0ZM12.7264 17.3454V18.7345C12.7264 18.9512 12.5577 19.1089 12.3405 19.1089H11.4146C11.1974 19.1089 11.0224 18.9512 11.0224 18.7345V17.4676C10.1702 17.429 9.31059 17.2472 8.65991 16.9997C8.30741 16.866 8.11106 16.4884 8.20454 16.1229L8.35546 15.5349C8.4082 15.3286 8.54606 15.1563 8.73458 15.0597C8.9231 14.9615 9.14452 14.9516 9.34244 15.0273C9.96231 15.267 10.6945 15.4414 11.4762 15.4414C12.4716 15.4414 13.1531 15.0571 13.1531 14.3583C13.1531 13.6946 12.5943 13.2753 11.3013 12.8382C9.43227 12.2094 8.15231 11.3363 8.15231 9.64167C8.15231 8.10479 9.24009 6.89952 11.0997 6.5324V5.2655C11.0997 5.04878 11.2851 4.85452 11.5023 4.85452H12.4282C12.6455 4.85452 12.8047 5.04878 12.8047 5.2655V6.40968C13.6178 6.44467 14.2048 6.5653 14.6957 6.7251C15.067 6.84625 15.2863 7.2353 15.1887 7.61443L15.056 8.14082C15.0043 8.34136 14.8717 8.5116 14.6899 8.60977C14.5082 8.70795 14.2936 8.72571 14.0972 8.65834C13.6512 8.50533 13.0695 8.36642 12.3321 8.36642C11.1968 8.36642 10.8297 8.85574 10.8297 9.34505C10.8297 9.92158 11.4412 10.2882 12.9259 10.8475C15.0043 11.5812 15.8393 12.5421 15.8393 14.1134C15.8388 15.668 14.7406 16.9966 12.7264 17.3454Z" fill="#4997D3" />
                            </svg>

                            <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>Strated from $2,200</p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10.6667C11.1302 10.6667 12.235 10.3539 13.1747 9.76784C14.1144 9.1818 14.8468 8.34885 15.2793 7.37431C15.7118 6.39977 15.825 5.32742 15.6045 4.29285C15.384 3.25829 14.8398 2.30798 14.0406 1.5621C13.2415 0.816219 12.2233 0.308269 11.1148 0.102481C10.0063 -0.103307 8.85739 0.00231083 7.81324 0.405978C6.76909 0.809645 5.87664 1.49323 5.24875 2.37029C4.62085 3.24736 4.28571 4.2785 4.28571 5.33333C4.28571 6.74782 4.88775 8.10438 5.95939 9.10457C7.03103 10.1048 8.48448 10.6667 10 10.6667ZM18.5714 24C18.9503 24 19.3137 23.8595 19.5816 23.6095C19.8495 23.3594 20 23.0203 20 22.6667C20 20.1913 18.9464 17.8173 17.0711 16.067C15.1957 14.3167 12.6522 13.3333 10 13.3333C7.34784 13.3333 4.8043 14.3167 2.92893 16.067C1.05357 17.8173 3.95203e-08 20.1913 0 22.6667C0 23.0203 0.15051 23.3594 0.418419 23.6095C0.686328 23.8595 1.04969 24 1.42857 24H18.5714Z" fill="#4997D3" />
                            </svg>
                            <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>50 People</p>
                        </div>
                    </div>
                    <div className='flex pb-20 w-full md:gap-[100px]'>
                        <div>
                            <h1 className='font-oswald font-bold pt-20 pb-10 md:text-[40px] text-[20px] leading-[25px] md:leading-[50px]'>INCLUDED</h1>
                            <div className='flex gap-4 items-center'>
                                <Correct />
                                <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>Accommodation in 4-star hotels</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <Correct />
                                <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>Accommodation in 4-star hotels</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <Correct />
                                <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>Accommodation in 4-star hotels</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <Correct />
                                <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>Accommodation in 4-star hotels</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <Correct />
                                <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>Accommodation in 4-star hotels</p>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-oswald font-bold pt-20 pb-10 md:text-[40px] text-[20px] leading-[25px] md:leading-[50px]'>NOT INCLUDED</h1>
                            <div className='flex gap-4 items-center'>
                                <Wrong />
                                <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>Accommodation in 4-star hotels</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <Wrong />
                                <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>Accommodation in 4-star hotels</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <Wrong />
                                <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>Accommodation in 4-star hotels</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <Wrong />
                                <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>Accommodation in 4-star hotels</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <Wrong />
                                <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>Accommodation in 4-star hotels</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='order' className='rounded-[25px] p-12 max-w-[581px] flex flex-col gap-6'>
                    <h1 className='font-oswald font-bold md:text-[40px] text-[20px] leading-[25px] md:leading-[50px]'>JOIN THIS TOUR</h1>
                    <p className='font-normal text-[20px] leading-[30px] text-[#222222]'>No extra hassle, just fill the form and let us contact you for more informations.</p>
                    <div className='flex'>
                        <h2 className='text-[20px] leading-[30px] font-medium'>Full Name</h2>
                        <h2 className='text-blue'>*</h2>
                    </div>
                    <div className='bg-grayColor rounded-xl'>
                        <input className='bg-grayColor p-4 rounded-xl' type="text" placeholder='Amelia Watson' />
                    </div>
                    <div className='flex'>
                        <h2 className='text-[20px] leading-[30px] font-medium'>Full Name</h2>
                        <h2 className='text-blue'>*</h2>
                    </div>
                    <div className='bg-grayColor rounded-xl'>
                        <input className='bg-grayColor p-4 rounded-xl' type="text" placeholder='Amelia Watson' />
                    </div>
                    <div className='flex'>
                        <h2 className='text-[20px] leading-[30px] font-medium'>Full Name</h2>
                        <h2 className='text-blue'>*</h2>
                    </div>
                    <div className='bg-grayColor rounded-xl'>
                        <input className='bg-grayColor p-4 rounded-xl' type="text" placeholder='Amelia Watson' />
                    </div>
                    <div className='flex'>
                        <h2 className='text-[20px] leading-[30px] font-medium'>Full Name</h2>
                        <h2 className='text-blue'>*</h2>
                    </div>
                    <div className='bg-grayColor rounded-xl'>
                        <input className='bg-grayColor p-4 rounded-xl' type="text" placeholder='Amelia Watson' />
                    </div>
                    <div className='flex w-full justify-between pt-4'>
                        <div>
                            <h2 className='text-[20px] leading-[30px] font-medium'>Total Payment</h2>
                            <h1 className='font-oswald font-bold text-[40px] leading-[50px]'>$2200</h1>
                        </div>
                        <button className='bg-blue p-4 rounded-[10px] text-white'>Book This Tour</button>
                    </div>

                </div>

            </div>
        </div>
    )
}
