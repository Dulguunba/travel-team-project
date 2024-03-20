import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Login } from "@/components/Login";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
}
