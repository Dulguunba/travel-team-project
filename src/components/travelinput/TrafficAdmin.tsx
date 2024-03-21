import React, { useState } from "react";
import { Return } from "../icons/adminicons/Return";
import { useFormik } from "formik";
import * as Yup from "yup";

export const TrafficAdmin = () => {
  const [IsIncludeTraffic, setIsIncludeTraffic] = useState(false);
  const [IsIncludeTrafficPrice, setIsIncludeTrafficPrice] = useState(false);
  const formik = useFormik({
    initialValues: {
      trafficPrice: 0,
      IsIncludeTrafficCheck: false,
      IsIncludeTrafficPriceCheck: false,
    },
    validationSchema: Yup.object({
      trafficPrice: Yup.number(),
      IsIncludeTrafficCheck: Yup.boolean(),
      IsIncludeTrafficPriceCheck: Yup.boolean(),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  formik.values;
  return (
    <div className="w-full h-full min-h-screen gap-7 flex flex-col justify-start items-start">
      <a className="w-full flex gap-7 items-center bg-white" href="/">
        <Return />
        <h1>Аялал нэмэх</h1>
      </a>
      <ul className="w-full justify-center steps steps-vertical lg:steps-horizontal mt-5">
        <li className="step step-primary">General information</li>
        <li className="step step-primary">Food</li>
        <li className="step step-primary">Traffic</li>
        <li className="step">Routes</li>
        <li className="step">Calendar</li>
      </ul>
      <form
        className="p-5 flex  w-full justify-center items-start"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-1/3 text-sm  flex flex-col mb-2 gap-5 p-10 bg-white rounded-lg mt-20">
          <label htmlFor="duration">Тээврийн мэдээлэл</label>
          <div className="w-full gap-3 flex flex-col items-center">
            <div className="w-full flex justify-start items-center gap-4 mb-2">
              <input
                id="IsIncludeTrafficCheck"
                type="checkbox"
                className="toggle toggle-success"
                {...formik.getFieldProps("IsIncludeTrafficCheck")}
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.setFieldValue(
                    "IsIncludeTrafficCheck",
                    e.target.checked
                  );
                  setIsIncludeTraffic(e.target.checked);
                }}
              />
              <label htmlFor="checkbox" className="text-sm">
                Аялалын компани тээврийн хэрэгслийг зохион байгуулах эсэх
              </label>
            </div>

            <div className="w-full flex justify-start items-center gap-4">
              <div className="w-full flex justify-start items-center gap-4 mb-2">
                <input
                  id="IsIncludeTrafficPriceCheck"
                  type="checkbox"
                  className="toggle toggle-success"
                  {...formik.getFieldProps("IsIncludeTrafficPriceCheck")}
                  disabled={!IsIncludeTraffic}
                  onChange={(e) => {
                    formik.handleChange(e);
                    formik.setFieldValue(
                      "IsIncludeTrafficPriceCheck",
                      e.target.checked
                    );
                    setIsIncludeTrafficPrice(e.target.checked);
                  }}
                />
                <label htmlFor="checkbox" className="text-sm">
                  Аялалын төлбөрт тээврийн төлбөр багтсан эсэх
                </label>
              </div>
            </div>
            <div className="w-full flex justify-start items-center gap-4">
              <div className="w-4/5 h-20 text-sm flex items-center">
                <label
                  htmlFor="name"
                  className={`${!IsIncludeTrafficPrice ? "text-gray-400" : ""}`}
                >
                  Нэмэлт тээврийн төлбөр
                </label>
                <input
                  id="trafficPrice"
                  type="number"
                  placeholder="Хоолны төлбөрийг оруулна уу"
                  className={`${
                    !IsIncludeTraffic
                      ? "bg-gray-50 border-gray-100"
                      : "bg-gray-100 border-gray-200"
                  } rounded-lg w-full p-1 gap-3 text-sm h-10 border`}
                  disabled={!IsIncludeTrafficPrice}
                  {...formik.getFieldProps("trafficPrice")}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <a
              href="/travelinputtwo"
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
