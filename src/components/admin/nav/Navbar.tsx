import React from "react";
import { Pineconelogoicon } from "@/components/icons2/Pineconelogoicon";
import { Bellicon } from "@/components/icons2/Bellicon";
import { Profileicon } from "@/components/icons2/Profileicon";

export const Navbar = () => {
  return (
    <div className=" bg-[#121316] flex justify-between p-3">
      <Pineconelogoicon />
      <div className="flex gap-5">
        <div className="mt-1">
          <Bellicon />
        </div>
        <button className=" flex gap-2">
          <div className=" mt-[3px]">
            <Profileicon />
          </div>
          <h1 className="text-white">Username</h1>
        </button>
      </div>
    </div>
  );
};
