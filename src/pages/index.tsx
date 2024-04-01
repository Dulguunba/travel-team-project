import Image from "next/image";
import { Poppins } from "next/font/google";
import { Process } from "@/components/Home/Process";
import { Value } from "@/components/Home/Value";
import { Questions } from "@/components/Home/Questions";
import { MainFooter } from "@/components/Home/MainFooter";
import PopularDestinations from "@/components/Home/PopularDestinations";
import { getServerSideProps } from "@/components/Home/toursData";
// import { getServerSideProps } from "../components/Home/heroData"
import Hero from "@/components/Home/Hero";
import Gallery from "@/components/Home/Gallery";
import { Tours } from "@/components/Home/types/toursTypes";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

function Home({ toursData }: { toursData: Tours }) {
  return (
    <div>
      <Hero toursData={toursData} />
      <PopularDestinations data={data} />
      <Process />
      <Gallery data={data} />
      {/* <Value />
      <Questions />
      <MainFooter /> */}
    </div>
  );
}

export { getServerSideProps };

export default Home;
