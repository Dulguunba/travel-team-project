import Image from "next/image";
import { Inter } from "next/font/google";
import { Leftbar } from "@/components/admin/Leftbar";
import { FoodAdmin } from "@/components/travelinput/FoodAdmin";

const inter = Inter({ subsets: ["latin"] });

export default function Travelinputtwo() {
  return (
    <main
      className={`flex min-h-screen h-full w-full bg-white justify-start items-start ${inter.className}`}
    >
      <Leftbar />
      <div className="flex w-full min-h-screen h-full bg-gray-100">
        <FoodAdmin />
      </div>
    </main>
  );
}
