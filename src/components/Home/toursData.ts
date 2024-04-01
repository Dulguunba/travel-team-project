import axios from "axios";
import { GetServerSideProps } from "next";
import { Tours } from '../../types/toursTypes'

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const res = await axios.get("http://localhost:8800/tourist/get");
        const toursData: Tours = res.data;
        return {
            props: {
                toursData
            }
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                toursData: []
            }
        };
    }
}