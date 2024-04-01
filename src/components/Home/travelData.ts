import axios from "axios";
import { GetServerSideProps } from "next";
import { Travel } from "../../types/travelTypes";

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const res = await axios.get("http://localhost:8800/travel/get");
        const travelDatas: Travel = res.data;
        return {
            props: {
                travelDatas
            }
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                travelDatas: []
            }
        };
    }
}