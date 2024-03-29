import React, { useMemo, useState } from "react";
import { Navbar } from "./nav/Navbar";
import { Bagaih } from "../icons2/product/Bagaih";
import { Ordericon } from "../icons2/Ordericon";
import { instance } from "../utilities/TravelUtility";
import { tripInformationTypes } from "../travelInput2/Routs";
import { Leftbar } from "../admin/Leftbar";

export const AdminDashbourd = () => {
  const [getOrder, setGetOrder] = useState([{}, {}, {}]);
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
    <div>
      <Navbar />
      <div className="flex">
        <Leftbar />
        <div className="bg-gray-200 w-full p-8">
          <div className=" flex gap-10">
            <div className=" rounded-lg p-3 border-none bg-white row-span-1 w-7/12 h-30">
              <h2 className=" flex">
                <Ordericon /> Захиалга
              </h2>
              <h1 className=" text-2xl font-bold">58</h1>
              <p className=" text-[]">Өнөөдөр</p>
            </div>
            <div className=" rounded-lg p-3 border-none bg-white row-span-1 w-5/12 h-30">
              <h1 className=" text-2xl font-bold">235,000₮</h1>
              <p className=" text-[]">Өнөөдөр</p>
            </div>
          </div>
          {/* Borluulalt */}
          <div className="flex w-full mt-5 gap-10">
            <div className=" rounded-lg p-3 border-none bg-white w-7/12">
              <div className=" flex justify-between mb-3">
                <h1 className=" text-xl">Шилдэг бүтээгдэхүүн</h1>
                <Bagaih />
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {getOrder.map(() => {
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
                                    src="/tailwind-css-component-profile-2@56w.png"
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
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">
                              Desktop Support Technician
                            </span>
                          </td>
                          <td>Purple</td>
                          <th>
                            <button className="btn btn-ghost btn-xs">
                              details
                            </button>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" w-5/12">
              <div className=" rounded-lg p-3 border-none bg-white row-span-2">
                <div className=" flex justify-between mb-3">
                  <h1 className=" text-xl">Борлуулалт</h1>
                  <Bagaih />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
