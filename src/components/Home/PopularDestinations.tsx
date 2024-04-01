import { LocationIcon } from '../icons/HomeIcons/LocationIcon';
import { getServerSideProps } from './travelData'
import { Travel } from '../../types/travelTypes';
import { CarouselCard } from './CarouselCard';
import Link from 'next/link';

const PopularDestinations = ({ travelDatas }: { travelDatas: Travel }) => {
    const datas = travelDatas.result;
    const slicedData = datas.slice(0, 3)
    return (
        <div className='flex justify-center items-center'>
            <div className='max-w-[1520px] w-[90%] mt-20'>
                <div className='flex h-[769px] flex-col gap-10 items-center '>
                    <div className='text-center flex gap-4 flex-col'>
                        <h1 className='font-oswald font-bold text-4xl'>POPULAR DESTINATIONS</h1>
                        <p>Explore our top destinations right from our beloved clients’ reviews.</p>
                    </div>
                    <div className="w-full mt-10 justify-center flex gap-5">
                        {slicedData.map((data) => <CarouselCard image={data.image.supportImage} title={data.route[0].endPoint} icon={<LocationIcon />} miniTitle={data.additionalInfo} description={data.travelCompany} />)}
                    </div>

                </div>
            </div>
        </div>
    );

};

export { getServerSideProps };

export default PopularDestinations;
