import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Login } from "@/components/Login";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

import { Details } from "@/components/Details";
import { Form } from "@/components/Form";
import { Signup } from "@/components/Signup";
import { Order } from "@/components/Order";
import { Hero } from "@/components/Hero";
const inter = Inter({ subsets: ["latin"] });

export default function Destination({ travelData }: { travelData: TravelType[] }) {
    return (
        <>
            {/* <Header /> */}
            <About />
            {/* <Order /> */}
            <Hero />
            {/* <Details /> */}
            {/* <Form /> */}
            {/* <Login /> */}
            {/* <Login /> */}
            {/* <Signup /> */}


            <Footer />
        </>
    );
}
// export const getServerSideProps = async () => {
//     const BASE_URL = 'http://localhost:8800/travel/get';
//     const travelRes = await axios.get(BASE_URL);
//     const travelData = travelRes.data;
//     return {
//         props: { travelData }
//     }
// }