import React, { useState } from "react";
import { Return } from "../icons/adminicons/Return";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { TravelDataContext } from "../context";
import { useRouter } from "next/router";
import Link from "next/link";

export const CategoryAdmin = () => {
  const route = useRouter();
  const { travelData, setTravelData } = useContext(TravelDataContext);

  const touristType = ["хувь хүн"];

  return (
    <div className="w-full h-full min-h-screen gap-7 flex flex-col justify-start items-start">
      <a className="w-full flex gap-7 items-center bg-white" href="/">
        <Return />
        <h1>Аялал нэмэх</h1>
      </a>
      <ul className="w-full justify-center steps steps-vertical lg:steps-horizontal mt-5">
        <li className="step step-primary">General information</li>
        <li className="step step-primary">Food & Traffic</li>
        <li className="step step-primary">Category</li>
        <li className="step">Routes</li>
        <li className="step">Calendar</li>
      </ul>
      <div className="p-5 flex  w-full justify-center items-start">
        <div className="w-1/3 text-sm  flex flex-col mb-2 gap-5 p-10 bg-white rounded-lg mt-20">
          <label htmlFor="duration">Аялалын ангилал</label>
          <div className="flex flex-col">
            <label htmlFor="">
              Аялалд хамрагдах жуулчдын мэдээллийг оруулна уу
            </label>
            <div className="form-control">
              <label className="label cursor-pointer flex justify-start gap-5">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Хувь хүн</span>
              </label>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <a
              href="/travelinputtwo"
              className="bg-primary p-2 rounded text-white"
            >
              Буцах
            </a>
            {/* <Link href={"/stepfour"}> */}
            <button type="submit" className="bg-primary p-2 rounded text-white">
              Дараах
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
