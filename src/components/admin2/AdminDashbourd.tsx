import React, { useMemo, useState } from "react";
import { Navbar } from "./nav/Navbar";
import { Bagaih } from "../icons2/product/Bagaih";
import { Ordericon } from "../icons2/Ordericon";
import { instance } from "../../utilities/TravelUtility";
import { tripInformationTypes } from "../travelInput2/Routs";

export const AdminDashbourd = () => {
  const [getOrder, setGetOrder] = useState([]);
  const getOrderDB = async () => {
    try {
      const get = (await instance.get("route/get")).data;
      setGetOrder(get);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTravel = useMemo(() => {
    getOrderDB();
  }, []);
  return (
    <div className="flex">
      <Navbar />
      <div className="bg-gray-200 w-full grid grid-cols-8 gap-x-8 p-8">
        <div className=" w-full col-span-4 grid grid-rows-5 gap-8">
          <div className=" rounded-lg p-3 border-none bg-white row-span-1">
            <h1 className=" text-2xl font-bold">235,000₮</h1>
            <p className=" text-[]">Өнөөдөр</p>
          </div>
          <div className=" rounded-lg p-3 border-none bg-white row-span-4">
            <div className=" flex justify-between mb-3">
              <h1 className=" text-xl">Шилдэг бүтээгдэхүүн</h1>
              <Bagaih />
            </div>
            <table className="table bg-white">
              {/* head */}
              <thead className=" bg-gray-200">
                <tr>
                  <th>
                    <label>{ }</label>
                  </th>
                  <th>Аяалал</th>
                  <th>Үйл ажилгаа</th>
                  <th>Үнэ</th>
                </tr>
              </thead>
              <tbody>
                {getOrder.map((e: tripInformationTypes) => {
                  return (
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={`${e?.image}`}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">
                              United States
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>Эмэгтэй, цүнх</p>
                      </td>
                      <td>19,000$</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" w-full col-span-4 grid grid-rows-5 gap-8">
          <div className=" rounded-lg p-3 border-none bg-white row-span-1">
            <h2 className=" flex">
              <Ordericon /> Захиалга
            </h2>
            <h1 className=" text-2xl font-bold">58</h1>
            <p className=" text-[]">Өнөөдөр</p>
          </div>
          <div className=" rounded-lg p-3 border-none bg-white row-span-2">
            <div className=" flex justify-between mb-3">
              <h1 className=" text-xl">Борлуулалт</h1>
              <Bagaih />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
