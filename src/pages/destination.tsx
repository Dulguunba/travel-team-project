import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Login } from "@/components/Login";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Hero } from "@/components/Hero"
import { Details } from "@/components/Details";
const inter = Inter({ subsets: ["latin"] });

export default function Destination() {
    return (
        <>
            <Header />
            {/* <Login /> */}
            {/* <About /> */}
            {/* <Hero /> */}
            <Details />
            <Footer />
        </>
    );
}
