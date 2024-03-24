import Image from "next/image";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Home/Header";
import { PopularDestinations } from "@/components/Home/PopularDestinations";
import { Process } from "@/components/Home/Process";
import { Gallery } from "@/components/Home/Gallery";
import { Value } from "@/components/Home/Value";
import { Questions } from "@/components/Home/Questions";
import { MainFooter } from "@/components/Home/MainFooter";
import { Data } from "@/components/Home/types/heroTypes";
import { getServerSideProps } from "@/components/Home/heroData";
import { Hero } from "@/components/Home/Hero";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function Home({ data }: { data: Data[] }) {
  return (
    <div>
      <Hero data={data} />
      <PopularDestinations />
      <Process />
      <Gallery />
      <Value />
      <Questions />
      <MainFooter />
    </div>
  );
}

export { getServerSideProps };