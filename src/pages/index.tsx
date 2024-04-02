import Image from "next/image";
import { Poppins } from "next/font/google";
import { Process } from "@/components/Home/Process";
import { Value } from "@/components/Home/Value";
import { Questions } from "@/components/Home/Questions";
import { MainFooter } from "@/components/Home/MainFooter";
import Hero, { getServerSideProps } from "@/components/Home/Hero";
import Gallery from "@/components/Home/Gallery";
import PopularDestinations from "@/components/Home/PopularDestinations";
import { Tours } from "@/types/toursTypes";
import { Travel } from "@/types/travelTypes";

interface Props {
  toursData: Tours
  travelDatas: Travel
}
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

function Home({ travelDatas, toursData }: Props) {
  return (
    <div>
      <Hero toursData={toursData} />
      <PopularDestinations travelDatas={travelDatas} />
      <Process />
      <Gallery travelDatas={travelDatas} />
      <Value />
      <Questions />
      <MainFooter />
    </div>
  );
}

export { getServerSideProps }

export default Home;
