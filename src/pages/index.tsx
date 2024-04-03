import Image from "next/image";
import { Poppins } from "next/font/google";
import { Process } from "@/components/home/Process";
import { Value } from "@/components/home/Value";
import { Questions } from "@/components/home/Questions";
import { MainFooter } from "@/components/home/MainFooter";
import Hero from "@/components/home/Hero";
import Gallery from "@/components/home/Gallery";
import PopularDestinations from "@/components/home/PopularDestinations";
import { Tours } from "@/types/toursTypes";
import { Travel } from "@/types/travelTypes";
import { Footer } from "@/components/Footer";
import { Destination } from "@/types/destinationTypes";
import { DestinationCategory } from "@/types/destinationCategoryTypes";
import { getServerSideProps } from '@/utils/fetchTravelDatas'

export interface Props {
  toursData: Tours
  travelDatas: Travel
  destinationDatas: Destination
  categoryDatas: DestinationCategory
}
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

function Home({ travelDatas, toursData, destinationDatas, categoryDatas }: Props) {
  return (
    <div>
      <Hero travelDatas={travelDatas} destinationDatas={destinationDatas} categoryDatas={categoryDatas} toursData={toursData} />
      <PopularDestinations travelDatas={travelDatas} destinationDatas={destinationDatas} />
      <Process />
      <Gallery travelDatas={travelDatas} />
      <Value />
      <Questions />
      <MainFooter />
      <Footer />
    </div>
  );
}

export { getServerSideProps }

export default Home;
