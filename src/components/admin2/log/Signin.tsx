import React from "react";
import { PineconImage } from "@/components/icons2/signupicon/PineconImage";
import { Googleicon } from "@/components/icons2/signupicon/Googleicon";
import { Microsofticon } from "@/components/icons2/signupicon/Microsofticon";
import { Appleicon } from "@/components/icons2/signupicon/Appleicon";
import { useFormik } from "formik";
import { string } from "yup";

export const Signin = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     email: string,
  //     password: string,
  //     repassword: string,
  //   },
  //   onSubmit: () => {
  //     if (formik.values.password === formik.values.repassword) {
  //       const getInputValue = {
  //         email: formik.values.email,
  //         password: formik.values.password,
  //       };
  //     } else {
  //       alert("");
  //     }
  //   },
  // });
  return (
    <div className="p-10">
      <PineconImage />
      <div className=" flex justify-center">
        <div
          className=" rounded-lg border border-gray-300 p-5 w-fit
        "
        >
          <div className="">
            <div className="">
              <h1 className=" text-2xl">Бүртгүүлэх</h1>
            </div>
            <div>
              {/* <form onSubmit={formik.handleChange} className=" flex flex-col">
                <label htmlFor="">email</label>
                <input type="email" />
                <label htmlFor="">Password</label>
                <input type="email" />
                <label htmlFor="">RePassword</label>
                <input type="email" />
              </form> */}
            </div>
          </div>
          <hr />
          <div className="p-5 grid grid-cols-1">
            <Googleicon />
            <Microsofticon />
            <Appleicon />
          </div>
        </div>
      </div>
    </div>
  );
};
