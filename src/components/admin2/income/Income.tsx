import { Leftbar } from "@/components/admin/Leftbar";
import { PrintIcon } from "@/components/icons2/PrintIcon";
import React, { useState } from "react";
import { Navbar } from "../nav/Navbar";

export const Income = () => {
  const [incomeData, setIncomeData] = useState([{}, {}, {}, {}]);
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Leftbar />
        <div className=" w-full my-5">
          <div className=" flex justify-center w-full mb-5">
            <div className="w-8/12 border border-black rounded-lg p-5">
              <div className=" flex justify-between mb-4  ">
                <h1 className=" text-2xl font-medium">Орлого</h1>
                <button className="flex gap-1 bg-gray-200 rounded-lg p-1">
                  <div className=" mt-1">
                    <PrintIcon />
                  </div>
                  Хуулга татах
                </button>
              </div>
              <hr />
              <div className="flex justify-between mt-4">
                <div>
                  <h1 className=" text-2xl font-medium">235,000₮</h1>
                </div>
                <div className=" flex gap-5">
                  <button className="border border-black rounded-lg p-1 hover:bg-[#18BA51] hover:border-none hover:text-white">
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
          <div className=" flex justify-center">
            <div className="w-8/12 border border-black rounded-lg p-5">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Захиалгын ID дугаар</th>
                      <th>Захиалагч</th>
                      <th>Төлбөр</th>
                      <th>Огноо</th>
                    </tr>
                  </thead>
                  <tbody>
                    {incomeData.map(() => {
                      return (
                        <tr>
                          <th>#12345678</th>
                          <td>
                            Zoloosoko0526@gmail.com <br /> 88556061
                          </td>
                          <td>12,000₮</td>
                          <td>Огноо</td>
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
