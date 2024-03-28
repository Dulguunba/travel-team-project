import React from "react";
import { Navbar } from "../nav/Navbar";
import { Ihbagaicon } from "@/components/icons2/Ihbagaicon";
import { OrderCard } from "./OrderCard";
import { Leftbar } from "@/components/admin/Leftbar";

export const Orderdetail = () => {
  return (
    <div className=" flex">
      {/* <Navbar /> */}
      <Leftbar />
      <div className=" w-full bg-gray-100">
        <div className=" flex gap-5 bg-white w-full  p-4">
          <div className=" mt-1">
            <Ihbagaicon />
          </div>
          <h1>Захиалгын дэлгэрэнгүй</h1>
        </div>
        <div className=" flex p-5 gap-5 w-full">
          <div className=" p-5 rounded-lg border border-gray-200 bg-white w-7/12">
            <div className=" flex justify-between mb-5">
              <div>
                <h1 className=" font-sans text-[#3F4145]">
                  Захиалгын ID дугаар:
                </h1>
                <p className=" text-black font-bold">#12345678</p>
              </div>
              <button className=" rounded-2xl bg-gray-200 p-2 h-fit text-[#3F4145]">
                Бэлтгэгдэж байна
              </button>
            </div>
            <div>
              <h2 className="text-[#3F4145]">Захиалагч: Хувь хүн</h2>
              <p>
                <b>Solongo Zoloo-</b>
                Zoloosoko0526@gmail.com, 88556061
              </p>
            </div>
            <div className="py-5">
              <OrderCard />
            </div>
          </div>
          <div className=" rounded-lg border border-gray-100 w-5/12 flex flex-col gap-5">
            <div className=" p-5 rounded-lg border border-gray-200 bg-white w-full">
              <h1 className=" mb-3">Маршрут</h1>
              <hr />
              <div></div>
            </div>
            <div className=" p-5 rounded-lg border border-gray-200 bg-white w-full">
              <h1 className=" mb-3">Төлбөрийн мэдээлэл</h1>
              <hr />
              <div className="mt-3 ">
                <h1 className="mb-3">Бүтээгдэхүүн</h1>
                <div></div>
                <hr />
                <div className="flex justify-between mt-3">
                  <h1>Нийт төлсөн дүн</h1>
                  <h2>₮807,800</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
