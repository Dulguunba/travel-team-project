import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/destination/Header";
import { Footer } from "@/components/destination/Footer";
import { About } from "@/components/destination/About";
import { Details } from "@/components/destination/Details";
import { Form } from "@/components/destination/Form";
import { Hero } from "@/components/destination/Hero";
import { Order } from "@/components/destination/Order";
import axios from "axios";
import { TravelType } from "./types/travelType";
const inter = Inter({ subsets: ["latin"] });

export default function Destination({ travelData }: { travelData: TravelType[] }) {
    return (
        <>
            {/* <Header /> */}
            {/* <About travelData={travelData} /> */}
            {/* <Order /> */}
            <Hero />
            {/* <Details /> */}
            {/* <Form /> */}
            <Footer />
        </>
    );
}
export const getServerSideProps = async () => {
    const BASE_URL = 'http://localhost:8800/travel/get';
    const travelRes = await axios.get(BASE_URL);
    const travelData = travelRes.data;
    return {
        props: { travelData }
    }
}