import Image from "next/image";
import { Poppins } from "next/font/google";
import { Process } from "@/components/Home/Process";
import { Value } from "@/components/Home/Value";
import { Questions } from "@/components/Home/Questions";
import { MainFooter } from "@/components/Home/MainFooter";
import { Data } from "@/components/Home/types/heroTypes";
import { PopularDestinations } from "@/components/Home/PopularDestinations";
import { getServerSideProps } from "@/components/Home/heroData";
import Hero from "@/components/Home/Hero";
import Gallery from "@/components/Home/Gallery";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

function Home({ data }: { data: Data[] }) {
  return (
    <div>
      <Hero data={data} />
      <PopularDestinations data={data} />
      <Process />
      <Gallery data={data} />
      <Value />
      <Questions />
      <MainFooter />
    </div>
  );
}

export { getServerSideProps };

export default Home;