import Image from "next/image";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { PopularDestinations } from "@/components/Home/PopularDestinations";
import { Hero } from "@/components/Home/Hero";
import { Process } from "@/components/Home/Process";
import { Gallery } from "@/components/Home/Gallery";
import { Value } from "@/components/Home/Value";
import { Questions } from "@/components/Home/Questions";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularDestinations />
      <Process />
      <Gallery />
      <Value />
      <Questions />
    </div>
  );
}
