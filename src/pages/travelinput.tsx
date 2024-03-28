import Image from "next/image";
import { Inter } from "next/font/google";
import { Leftbar } from "@/components/admin/Leftbar";
import { CategoryAdmin } from "@/components/travelinput/CategoryAdmin";
import { TravelAdminOne } from "@/components/travelinput/TravelAdminOne";
import { FoodAdmin } from "@/components/travelinput/FoodAdmin";
import { usePageStore, useTravelStore } from "@/Zustand";
import { PictureAdmin } from "@/components/travelinput/PictureAdmin";
import { RouteAdmin } from "@/components/travelinput/RouteAdmin";

const inter = Inter({ subsets: ["latin"] });

export default function Travelinput() {
  const { page, increment, decrement} = usePageStore()
  const {travel, updateTravel} = useTravelStore()

  return (
    <main
      className={`flex max-h-screen h-full w-full bg-white justify-start items-start ${inter.className}`}
    >
      <Leftbar />
      <div className="flex w-full  h-full bg-gray-100">
        <TravelAdminOne />
        <FoodAdmin        />
        <CategoryAdmin       />
        <PictureAdmin/>
        <RouteAdmin/>
      </div>
    </main>
  );
}
