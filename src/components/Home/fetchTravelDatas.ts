import axios from "axios";
import { GetServerSideProps } from "next";
import { Tours } from "@/types/toursTypes";
import { Travel } from "@/types/travelTypes";

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const travelRes = await axios.get("http://localhost:8800/travel/get");
        const travelDatas: Travel = travelRes.data;

        const toursRes = await axios.get("http://localhost:8800/tourist/get");
        const toursData: Tours = toursRes.data;

        return {
            props: {
                travelDatas,
                toursData
            }
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                travelDatas: [],
                toursData: []
            }
        };
    }
}