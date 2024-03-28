import axios from "axios";
import { GetServerSideProps } from "next";
import { Data } from "./types/heroTypes";

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const res = await axios.get("https://dev.to/api/articles");
        const data: Data[] = res.data;
        return {
            props: {
                data
            }
        }
    } catch (error) {
        console.error("Error fetching data:hasdhaskjdhaskdhjkas", error);
        return {
            props: {
                data: []
            }
        };
    }
}