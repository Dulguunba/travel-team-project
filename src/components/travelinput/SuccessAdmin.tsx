import React, { useEffect, useState } from "react";
import { createTravelInfo } from "../utilities/TravelUtility";
import { usePageStore, useTravelStore } from "@/Zustand";
import { Return } from "../icons/adminicons/Return";

export const SuccessAdmin = () => {
  const { page, increment, decrement } = usePageStore();
  const { travel, updateTravel } = useTravelStore();

  return (
    <div
      className={`   w-full h-full min-h-screen ${
        page == 8 ? "flex" : "hidden"
      } gap-7  flex-col justify-start items-start relative`}
    >
      <a className="w-full flex gap-7 items-center bg-white" href="/">
        <Return />
        <h1>Аялал нэмэх</h1>
      </a>
      <div className="p-10 flex flex-col gap-5 w-full items-center justify-center h-full text-green-600">
        <div>Аялал амжилттэй нэмэгдлээ</div>
      </div>
    </div>
  );
};
