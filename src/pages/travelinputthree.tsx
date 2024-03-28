import Image from "next/image";
import { Inter } from "next/font/google";
import { Leftbar } from "@/components/admin/Leftbar";
import { CategoryAdmin } from "@/components/travelinput/CategoryAdmin";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type Repo = [];

const inter = Inter({ subsets: ["latin"] });

export default function Travelinputthree() {
  return (
    <main
      className={`flex min-h-screen h-full w-full bg-white justify-start items-start ${inter.className}`}
    >
      <Leftbar />
      <div className="flex w-full min-h-screen h-full bg-gray-100">
        {/* <CategoryAdmin /> */}
      </div>
    </main>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://localhost:8800/category/get`);
//   const categoryData = await res.json();

//   // Pass data to the page via props
//   return { props: { categoryData } };
// }
