import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:8800",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const createTravelInfo = async (data: {} | null) => {
  console.log("data", data);

  try {
    const response = await instance.post("/travel/create", data);
    console.log(response);

    console.log(
      "response travel info data",
      response.data,
      "response travel info status",
      response.status
    );
  } catch (error) {
    return alert(`Та дахин оролдоно уу.`);
  }
};

// const handleSubmit = async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
//   try {
//     const response = await axios.post('http://localhost:8800/', values);
//     console.log('Booking successful:', response.data);
//   } catch (error) {
//     alert(error);
//   }
//   setSubmitting(false);
// };