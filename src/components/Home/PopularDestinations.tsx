import { LocationIcon } from '../icons/HomeIcons/LocationIcon';
import { getServerSideProps } from '../../utils/fetchTravelDatas'
import { Travel } from '../../types/travelTypes';

import Link from 'next/link';
import CarouselCard from './CarouselCard';

const PopularDestinations = ({ travelDatas }: { travelDatas: Travel }) => {
    const datas = travelDatas.result;
    const slicedData = datas.slice(0, 3)
    return (
        <div className='flex justify-center items-center'>
            <div className='md:max-w-[1520px] w-full md:w-[90%] mt-20 p-2'>
                <div className='flex md:h-[769px] flex-col md:gap-10 items-center '>
                    <div className='text-center flex gap-4 flex-col'>
                        <h1 className='font-oswald font-bold text-2xl md:text-4xl'>POPULAR DESTINATIONS</h1>
                        <p className='font-primary'>Explore our top destinations right from our beloved clients’ reviews.</p>
                    </div>
                    <div className="w-full mt-10 justify-center flex md:flex-row flex-col gap-5">
                        {slicedData.map((data) => <CarouselCard responsiveTitle={data.route[0].endPoint} responsivePackage={data.duration} image={data.image.supportImage} title={data.route[0].endPoint} icon={<LocationIcon />} miniTitle={data.travelCompany} description={data.travelCompany} />)}
                    </div>
                </div>
            </div>
        </div>
    );

};

export { getServerSideProps };

export default PopularDestinations;
