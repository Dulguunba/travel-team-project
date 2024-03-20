import Image from "next/image";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { PopularDestinations } from "@/components/Home/PopularDestinations";
import { Hero } from "@/components/Home/Hero";
import { Progress } from "@/components/Home/Progress";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularDestinations />
      <Progress />
    </div>
  );
}
