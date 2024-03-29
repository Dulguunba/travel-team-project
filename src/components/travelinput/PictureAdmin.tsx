import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { instance } from "../utilities/TravelUtility";
import { usePageStore, useTravelStore } from "@/Zustand";
import { Return } from "../icons/adminicons/Return";

export const PictureAdmin = () => {
  const { page, increment, decrement } = usePageStore();
  const { travel, updateTravel } = useTravelStore();
  const [mainImage, setMainImage] = useState("");
  const [supportImage, setSupportImage] = useState("");
  const [mainloading, setMainLoading] = useState(false);
  const [supportloading, setSupportLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      additionalInfo: "",
    },
    validationSchema: Yup.object({
      additionalInfo: Yup.string()
        .max(250, "Must be 50 characters or less")
        .required("Additional information is required"),
    }),
    onSubmit: (values) => {
      const travelInputfour = {
        additionalInfo: formik.values.additionalInfo,
        image: {
          mainImage: mainImage,
          supportImage: supportImage,
        },
      };
      console.log("travelinput step 4", travelInputfour);
      updateTravel(travelInputfour);
      increment(1);
      console.log("travel", travel);
    },
  });

  const uploadImage = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setUrl: Function,
    setLoad: Function
  ) => {
    setLoad(true);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    const target = e.target;
    const selectedFile = target?.files as FileList;
    formData.append("image", selectedFile[0]);
    try {
      const res = await instance.post(`/upload`, formData, config);
      setUrl(res.data.image.imageUrl);
      setLoad(false);
    } catch (error) {
      alert(`Зураг оруулахад алдаа үүслээ. Та дахин оролдоно уу`);
    }
  };
  const decreasePageNumber = () => {
    decrement(1);
  };

  return (
    <div
      className={` ${
        page == 4 ? "flex" : "hidden"
      }  w-full h-full min-h-screen gap-7  flex-col justify-start items-start`}
    >
      <a className="w-full flex gap-7 items-center bg-white" href="/">
        <Return />
        <h1>Аялал нэмэх</h1>
      </a>
      <ul className="w-full justify-center steps steps-vertical lg:steps-horizontal mt-5">
        <li className="step step-primary ">General information</li>
        <li className="step step-primary">Food & Traffic</li>
        <li className="step step-primary">Category</li>
        <li className="step font-semibold step-primary">Picture</li>
        <li className="step">Routes</li>
        <li className="step">Calendar</li>
      </ul>
      <form
        className="p-10 flex gap-5 w-full items-center justify-center h-full"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col w-1/2  bg-white rounded-lg p-5">
          <div className="flex gap-5 w-full">
            <div className="w-1/2 text-sm h-96 flex-col mb-2 gap-1">
              <label htmlFor="additionalInfo">
                Аялалын дэлгэрэнгүй мэдээлэл
              </label>
              <textarea
                id="additionalInfo"
                placeholder="Аялалын нэрийг оруулна уу"
                className="bg-gray-100 rounded-lg w-full p-1 px-3 text-sm h-80 border border-gray-200"
                {...formik.getFieldProps("additionalInfo")}
              />
              {formik.touched.additionalInfo && formik.errors.additionalInfo ? (
                <div className=" text-red-500  text-xs">
                  {formik.errors.additionalInfo}
                </div>
              ) : null}
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="w-full h-40 text-sm flex-col">
                <label htmlFor="image">Аялалын нүүр зураг</label>
                <div className="bg-gray-100 border-dashed border-2 border-gray-300 h-36 rounded-lg w-full relative">
                  <img
                    src={mainImage}
                    className="w-full h-full  absolute top-0 left-0 opacity-70"
                    alt=""
                  />
                  <div
                    className={`absolute top-[40%] left-[40%]  gap-5 text-lg ${
                      mainloading ? "flex" : "hidden"
                    } `}
                  >
                    <span>Loading</span>
                    <span className="loading loading-ring loading-md"></span>
                  </div>
                  <div
                    className={`w-full  h-full absolute top-0 left-0 flex flex-col items-center gap-2 justify-center ${
                      mainloading ? "hidden" : "flex"
                    }`}
                  >
                    <p className="font-semibold">
                      {mainImage
                        ? "Change image for the travel"
                        : "Add image for the travel"}
                    </p>
                    <div className="w-1/2 relative h-8">
                      <button className="bg-black w-full h-full absolute top-0 left-0 text-white p-2 rounded">
                        {mainImage ? "Change image" : "Add image"}
                      </button>
                      <input
                        type="file"
                        className="h-full  w-full absolute top-0 left-0 opacity-0"
                        accept="image/jpeg, image/png, image/jpg"
                        onChange={(e) =>
                          uploadImage(e, setMainImage, setMainLoading)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-40 text-sm flex-col">
                <label htmlFor="image">Аялалын нэмэлт зураг</label>
                <div className="bg-gray-100 border-dashed border-2 border-gray-300 h-36 rounded-lg w-full relative">
                  <img
                    src={supportImage}
                    className="w-full h-full  absolute top-0 left-0 opacity-70"
                    alt=""
                  />
                  <div
                    className={`absolute top-[40%] left-[40%]  gap-5 text-lg ${
                      supportloading ? "flex" : "hidden"
                    } `}
                  >
                    <span>Loading</span>
                    <span className="loading loading-ring loading-md"></span>
                  </div>
                  <div
                    className={`w-full  h-full absolute top-0 left-0 flex flex-col items-center gap-2 justify-center ${
                      supportloading ? "hidden" : "flex"
                    }`}
                  >
                    <p className="font-semibold">
                      {supportImage
                        ? "Change image for the travel"
                        : "Add image for the travel"}
                    </p>
                    <div className="w-1/2 relative h-8">
                      <button className="bg-black w-full h-full absolute top-0 left-0 text-white p-2 rounded">
                        {supportImage ? "Change image" : "Add image"}
                      </button>
                      <input
                        type="file"
                        className="h-full  w-full absolute top-0 left-0 opacity-0"
                        accept="image/jpeg, image/png, image/jpg"
                        onChange={(e) =>
                          uploadImage(e, setSupportImage, setSupportLoading)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <a
              onClick={decreasePageNumber}
              className="bg-primary p-2 rounded text-white"
            >
              Буцах
            </a>
            <button type="submit" className="bg-primary p-2 rounded text-white">
              Дараах
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
