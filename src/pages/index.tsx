import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { PopularDestinations } from "@/components/Home/PopularDestinations";
import { Hero } from "@/components/Home/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularDestinations />
    </div>
  );
}
