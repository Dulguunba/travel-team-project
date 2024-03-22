import Image from "next/image";
import { Inter } from "next/font/google";
import { Leftbar } from "@/components/admin/Leftbar";
import { TravelAdminOne } from "@/components/travelinput/TravelAdminOne";
import { TravelDataContext } from "@/components/context";
import { useContext } from "react";
import { createTravelInfo } from "@/components/utilities/TravelUtility";

const inter = Inter({ subsets: ["latin"] });

export default function Travelinputone() {
  // create travel info section please don't delete following sections
  const { travelData, setTravelData } = useContext(TravelDataContext);
  console.log("travel data step last", travelData);
  createTravelInfo(travelData);

  return (
    <main
      className={`flex min-h-screen h-full w-full bg-white justify-start items-start ${inter.className}`}
    >
      <Leftbar />
      <div className="flex w-full min-h-screen h-full bg-gray-100"></div>
    </main>
  );
}
