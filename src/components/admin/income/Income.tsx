import { Leftbar } from "@/components/admin/Leftbar";
import { PrintIcon } from "@/components/icons2/PrintIcon";
import React, { useState } from "react";
import { Navbar } from "../nav/Navbar";
import { HomeIcon } from "@/components/icons2/HomeIcon";

type income = {
  id: String;
  email: String;
  phone: String;
  payment: String;
  date: String;
};

export const Income = () => {
  const [incomeData, setIncomeData] = useState([
    {
      id: "12345678",
      email: "Zoloosoko0526@gmail.com",
      phone: "88556061",
      payment: "12,000₮",
      date: "2024/12/23",
    },
    {
      id: "12345678",
      email: "Zoloosoko0526@gmail.com",
      phone: "88556061",
      payment: "12,000₮",
      date: "2024/12/23",
    },
    {
      id: "12345678",
      email: "Zoloosoko0526@gmail.com",
      phone: "88556061",
      payment: "12,000₮",
      date: "2024/12/23",
    },
  ]);
  return (
    <div>
      <div className=" min-[350px]:w-full max-[639px]:w-full">
        <Navbar />
      </div>
      <div className="flex">
        <div>
          <div className="hidden sm:block">
            <Leftbar />
          </div>
          <div className=" w-5">{/* <Leftbar /> */}</div>
        </div>
        <div className="w-full my-5">
          <div className=" flex sm:justify-center w-full mb-5">
            <div className="w-11/12 border border-black rounded-lg sm:w-8/12  p-5">
              <div className=" flex justify-between mb-4  ">
                <h1 className=" sm:text-2xl font-medium">Орлого</h1>
                <button className="flex gap-1 bg-gray-200 rounded-lg sm:p-1">
                  <div className=" mt-1">
                    <PrintIcon />
                  </div>
                  Хуулга татах
                </button>
              </div>
              <hr />
              <div className="flex flex-col sm:flex-row justify-between mt-4">
                <div>
                  <h1 className=" sm:text-2xl font-medium">235,000₮</h1>
                </div>
                <div className=" flex gap-5">
                  <button className="border border-black rounded-lg lg:p-1 hover:bg-[#18BA51] hover:border-none hover:text-white">
                    Өнөөдөр
                  </button>
                  <button className="border border-black rounded-lg p-1 hover:bg-[#18BA51] hover:border-none hover:text-white">
                    7 хоног
                  </button>
                  <button className="border border-black rounded-lg p-1 hover:bg-[#18BA51] hover:border-none hover:text-white">
                    Сараар
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex sm:justify-center">
            <div className=" sm:w-8/12 border border-black w-11/12 rounded-lg p-5">
              <div className="overflow-x-auto group-hover:hidden">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Захиалгын ID дугаар</th>
                      <th>Захиалагч</th>
                      <th>Төлбөр</th>
                      <th>Огноо</th>
                    </tr>
                  </thead>
                  <tbody>
                    {incomeData.map((e: income) => {
                      return (
                        <tr>
                          <th>{e?.id}</th>
                          <td>
                            {e?.email} <br /> {e?.phone}
                          </td>
                          <td>{e?.payment}</td>
                          <td>{e?.date}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
