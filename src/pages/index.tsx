import Image from "next/image";
import { Inter } from "next/font/google";
import { Orderdetail } from "@/components/admin2/order/Orderdetail";
import { OrderCard } from "@/components/admin2/order/OrderCard";
import { Leftbar } from "@/components/admin/Leftbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Orderdetail />
      {/* <Leftbar /> */}
    </main>
  );
}
