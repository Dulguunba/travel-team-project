import Image from "next/image";
import { Inter } from "next/font/google";
import { Leftbar } from "@/components/admin/Leftbar";
import { CategoryAdmin } from "@/components/travelinput/CategoryAdmin";
import { TravelAdminOne } from "@/components/travelinput/TravelAdminOne";
import { useState } from "react";
import { FoodAdmin } from "@/components/travelinput/FoodAdmin";

const inter = Inter({ subsets: ["latin"] });

export default function Travelinput() {
  const [pageNumber, setPageNumber] = useState(1);
  const [travelDataInput, setTravelDataInput] = useState({});

  return (
    <main
      className={`flex min-h-screen h-full w-full bg-white justify-start items-start ${inter.className}`}
    >
      <Leftbar />
      <div className="flex w-full min-h-screen h-full bg-gray-100">
        <CategoryAdmin
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          travelDataInput={travelDataInput}
          setTravelDataInput={setTravelDataInput}
        />
        <TravelAdminOne
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          travelDataInput={travelDataInput}
          setTravelDataInput={setTravelDataInput}
        />
        <FoodAdmin
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          travelDataInput={travelDataInput}
          setTravelDataInput={setTravelDataInput}
        />
      </div>
    </main>
  );
}
