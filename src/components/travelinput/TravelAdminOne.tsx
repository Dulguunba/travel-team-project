import React from "react";
import { Return } from "../icons/adminicons/Return";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePageStore, useTravelStore } from "@/Zustand";

export const TravelAdminOne = () => {
  const { page, increment, decrement } = usePageStore();
  const { travel, updateTravel } = useTravelStore();
  const formik = useFormik({
    initialValues: {
      travelName: "",
      travelCompany: "",
      duration: "",
      adultPrice: "",
      childPrice: "",
    },
    validationSchema: Yup.object({
      travelName: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Travel name is required"),
      travelCompany: Yup.string()
        .max(50, "Must be 50 characters or less")
        .required("Travel company name is required"),
      duration: Yup.number()
        .max(21, "Must be 21 characters or less")
        .required("Travel duration is required"),
      adultPrice: Yup.number().required("Price information is required"),
      childPrice: Yup.number().required("Price information is required"),
    }),
    onSubmit: (values) => {
      const travelInputone = {
        name: formik.values.travelName,
        travelCompany: formik.values.travelCompany,
        duration: Number(formik.values.duration),
        price: {
          adultPrice: Number(formik.values.adultPrice),
          childPrice: Number(formik.values.childPrice),
        },
      };
      console.log("travelinput step 1", travelInputone);
      updateTravel(travelInputone);
      console.log("travel", travel);

      increment(1);
    },
  });

  return (
    <div
      className={` ${
        page == 1 ? "flex" : "hidden"
      } w-full h-full min-h-screen gap-7  flex-col justify-start items-start`}
    >
      <a className="w-full flex gap-7 items-center bg-white" href="/">
        <Return />
        <h1>Аялал нэмэх</h1>
      </a>
      <ul className="w-full justify-center steps steps-vertical lg:steps-horizontal mt-5">
        <li className="step step-primary font-semibold">General information</li>
        <li className="step ">Food & Traffic</li>
        <li className="step ">Category</li>
        <li className="step">Picture</li>
        <li className="step">Routes</li>
        <li className="step">Calendar</li>
      </ul>
      <form
        className="p-10 flex gap-5 w-full items-center justify-center h-full"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-5 w-1/2">
          <div className="w-full flex flex-col gap-2 rounded-lg bg-white p-5">
            <div className="w-full h-20 text-sm flex-col mb-2 gap-1">
              <label htmlFor="travelName">Аялалын нэр</label>
              <input
                id="travelName"
                type="text"
                placeholder="Аялалын нэрийг оруулна уу"
                className="bg-gray-100 rounded-lg w-full p-1 px-3 text-sm h-10 border border-gray-200"
                {...formik.getFieldProps("travelName")}
              />
              {formik.touched.travelName && formik.errors.travelName ? (
                <div className=" text-red-500  text-xs">
                  {formik.errors.travelName}
                </div>
              ) : null}
            </div>
            <div className="w-full h-20 text-sm flex-col mb-2 gap-1">
              <label htmlFor="name">Аялалын компанийн нэр</label>
              <input
                id="travelCompany"
                type="text"
                placeholder="Компанийн нэрийг оруулна уу"
                className="bg-gray-100 rounded-lg w-full p-1 px-3  text-sm h-10 border border-gray-200"
                {...formik.getFieldProps("travelCompany")}
              />
              {formik.touched.travelCompany && formik.errors.travelCompany ? (
                <div className=" text-red-500  text-xs">
                  {formik.errors.travelCompany}
                </div>
              ) : null}
            </div>
            <div className="w-full h-20 text-sm flex-col mb-2 gap-1">
              <label htmlFor="duration">Аялалын үргэлжлэх хугацаа</label>
              <div className="w-full gap-3 flex items-center">
                <input
                  id="duration"
                  type="number"
                  placeholder="Аялалын үргэлжлэх хугацааг уу"
                  className="bg-gray-100 rounded-lg w-3/4 p-1 px-3 text-sm h-10 border border-gray-200"
                  {...formik.getFieldProps("duration")}
                />
                <span className="text-md">хоног</span>
              </div>

              {formik.touched.duration && formik.errors.duration ? (
                <div className=" text-red-500 text-xs ">
                  {formik.errors.duration}
                </div>
              ) : null}
            </div>
            <div className="w-full h-40 text-sm flex-col gap-3">
              <label htmlFor="name">Төлбөрийн мэдээлэл</label>
              <div className="w-full h-16">
                <div className="flex gap-3 items-center">
                  <span className="w-1/4">Том хүн</span>
                  <input
                    id="adultPrice"
                    type="text"
                    placeholder="Төлбөрийн мэдээлэлоруулна уу"
                    className="bg-gray-100 rounded-lg w-1/2 p-1 px-3 text-sm h-10 border border-gray-200"
                    {...formik.getFieldProps("adultPrice")}
                  />
                  <span className="w-1/4">MNT</span>
                </div>
                {formik.touched.adultPrice && formik.errors.adultPrice ? (
                  <div className=" text-red-500  text-xs">
                    {formik.errors.adultPrice}
                  </div>
                ) : null}
              </div>
              <div className="w-full h-16">
                <div className="flex gap-3 items-center">
                  <span className="w-1/4">Хүүхэд</span>
                  <input
                    id="childPrice"
                    type="text"
                    placeholder="Төлбөрийн мэдээлэл оруулна уу"
                    className="bg-gray-100 rounded-lg w-1/2 p-1 px-3 text-sm h-10 border border-gray-200"
                    {...formik.getFieldProps("childPrice")}
                  />
                  <span className="w-1/4">MNT</span>
                </div>
                {formik.touched.childPrice && formik.errors.childPrice ? (
                  <div className=" text-red-500  text-xs">
                    {formik.errors.childPrice}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex justify-end items-center">
              <button
                type="submit"
                className="bg-primary p-2 rounded text-white"
              >
                Дараах
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
