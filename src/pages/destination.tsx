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

export default function Destination() {
    return (
        <>
            {/* <Header /> */}
            <About />
            {/* <Order /> */}
            <Hero />
            {/* <Details /> */}
            {/* <Form /> */}
            {/* <Login /> */}
            {/* <Signup /> */}

            <Footer />
        </>
    );
}
