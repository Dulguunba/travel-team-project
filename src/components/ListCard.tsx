import React from 'react'

export const ListCard = (props: any) => {
    const LearnMore = () => {
        console.log("click learn more")
    }
    return (
        <div className='md:flex'>
            <img className='w-[358px] h-[206px]' src={`${props.img}`} alt="winter" />
            <div className='pl-12 pr-[98px]'>
                <div className='max-w-[659px]'>
                    <div className='flex items-center gap-[10px]'>
                        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.00001 0C2.69167 0 0 2.69167 0 6.00001C0 6.99318 0.248309 7.9779 0.720351 8.85132L5.6719 17.8066C5.73782 17.926 5.86343 18 6.00001 18C6.13659 18 6.26221 17.926 6.32812 17.8066L11.2815 8.84837C11.7517 7.9779 12 6.99314 12 5.99998C12 2.69167 9.30836 0 6.00001 0ZM6.00001 9C4.34584 9 3.00002 7.65418 3.00002 6.00001C3.00002 4.34584 4.34584 3.00002 6.00001 3.00002C7.65418 3.00002 9 4.34584 9 6.00001C9 7.65418 7.65418 9 6.00001 9Z" fill="#4997D3" />
                        </svg>
                        <h3 className='font-normal text-blue text-[20px] leading-[30px]'> {props.where}</h3>
                    </div>
                    <h1 className='font-medium text-[32px] leading-[40px] pt-[10px] pb-9'>{props.title}</h1>
                    <p className='font-normal text-[20px] leading-[30px]  text-[#222222]'>{props.details}</p>
                </div>
            </div>
            <div className='flex flex-col justify-end'>
                <div className='flex items-center gap-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.75" >
                            <path d="M16.2756 14.1192L12.9294 11.6096V6.49728C12.9294 5.98325 12.5139 5.56775 11.9998 5.56775C11.4858 5.56775 11.0703 5.98325 11.0703 6.49728V12.0744C11.0703 12.3672 11.2079 12.6432 11.4421 12.818L15.1602 15.6065C15.3275 15.732 15.5227 15.7925 15.7169 15.7925C16.0004 15.7925 16.2793 15.6651 16.4615 15.4197C16.7702 15.0097 16.6865 14.4269 16.2756 14.1192Z" fill="#222222" />
                            <path d="M12 0C5.3828 0 0 5.3828 0 12C0 18.6172 5.3828 24 12 24C18.6172 24 24 18.6172 24 12C24 5.3828 18.6172 0 12 0ZM12 22.141C6.40898 22.141 1.85902 17.591 1.85902 12C1.85902 6.40898 6.40898 1.85902 12 1.85902C17.592 1.85902 22.141 6.40898 22.141 12C22.141 17.591 17.591 22.141 12 22.141Z" fill="#222222" />
                        </g>
                        <defs>

                        </defs>
                    </svg>
                    <h3 className='font-normal text-[20px] leading-[30px]  text-[#222222]'>{props.time}</h3>
                </div>
                <div className='flex items-center gap-4 pt-4'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.75" >
                            <path d="M12 0C5.37204 0 0 5.37256 0 12C0 18.6274 5.37204 24 12 24C18.628 24 24 18.6269 24 12C24 5.37308 18.6274 0 12 0ZM12.7264 17.3454V18.7345C12.7264 18.9512 12.5577 19.1089 12.3405 19.1089H11.4146C11.1974 19.1089 11.0224 18.9512 11.0224 18.7345V17.4676C10.1702 17.429 9.31059 17.2472 8.65991 16.9997C8.30741 16.866 8.11106 16.4884 8.20454 16.1229L8.35546 15.5349C8.4082 15.3286 8.54606 15.1563 8.73458 15.0597C8.9231 14.9615 9.14452 14.9516 9.34244 15.0273C9.96231 15.267 10.6945 15.4414 11.4762 15.4414C12.4716 15.4414 13.1531 15.0571 13.1531 14.3583C13.1531 13.6946 12.5943 13.2753 11.3013 12.8382C9.43227 12.2094 8.15231 11.3363 8.15231 9.64167C8.15231 8.10479 9.24009 6.89952 11.0997 6.5324V5.2655C11.0997 5.04878 11.2851 4.85452 11.5023 4.85452H12.4282C12.6455 4.85452 12.8047 5.04878 12.8047 5.2655V6.40968C13.6178 6.44467 14.2048 6.5653 14.6957 6.7251C15.067 6.84625 15.2863 7.2353 15.1887 7.61443L15.056 8.14082C15.0043 8.34136 14.8717 8.5116 14.6899 8.60977C14.5082 8.70795 14.2936 8.72571 14.0972 8.65834C13.6512 8.50533 13.0695 8.36642 12.3321 8.36642C11.1968 8.36642 10.8297 8.85574 10.8297 9.34505C10.8297 9.92158 11.4412 10.2882 12.9259 10.8475C15.0043 11.5812 15.8393 12.5421 15.8393 14.1134C15.8388 15.668 14.7406 16.9966 12.7264 17.3454Z" fill="#222222" />
                        </g>
                        <defs>

                        </defs>
                    </svg>
                    <h3 className='font-normal text-[20px] leading-[30px]  text-[#222222]'>{props.price}</h3>
                </div>
                <div className='flex gap-4 pt-6' >
                    <button className=' cursor-pointer hover:-translate-y-1 transition ease-in-out rounded-[10px] bg-blue text-white font-medium text-[20px] leading-[30px] py-4 px-8'>Book now</button>
                    <button onClick={LearnMore} className='cursor-pointer hover:-translate-y-1 transition ease-in-out rounded-[10px] border-2 border-blue py-4 px-8 text-blue font-medium text-[20px] leading-[30px]'>Learn more</button>
                </div>
            </div>
        </div>
    )
}
