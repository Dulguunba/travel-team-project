import React from "react";
import { PineconImage } from "@/components/icons2/signupicon/PineconImage";
import { Googleicon } from "@/components/icons2/signupicon/Googleicon";
import { Microsofticon } from "@/components/icons2/signupicon/Microsofticon";
import { Appleicon } from "@/components/icons2/signupicon/Appleicon";

export const Signin = () => {
  return (
    <div className="p-10">
      <PineconImage />
      <div className=" flex justify-center">
        <div
          className=" rounded-lg border border-gray-300 p-5 w-fit
        "
        >
          <div className=" flex justify-center">
            <h1 className=" text-2xl">Бүртгүүлэх</h1>
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
