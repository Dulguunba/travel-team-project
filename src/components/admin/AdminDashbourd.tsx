import React, { useMemo, useState } from "react";
import { Navbar } from "./nav/Navbar";
import { Bagaih } from "../icons2/product/Bagaih";
import { Ordericon } from "../icons2/Ordericon";
import { instance } from "../utilities/TravelUtility";
import { Leftbar } from "./Leftbar";
import { HomeIcon } from "../icons2/HomeIcon";

type dashboardData = {
  name: String;
  id: String;
  image: String;
  order: String;
  price: String;
};

export const AdminDashbourd = () => {
  const [getOrder, setGetOrder] = useState();
  const data = [
    {
      name: "WOMEN'S HORSEBIT",
      id: "#12345678",
      image: "./Pic3.jpg",
      order: "88",
      price: "90000",
    },
    {
      name: "WOMEN'S HORSEBIT",
      id: "#12345678",
      image: "./Pic3.jpg",
      order: "90",
      price: "90000",
    },
    {
      name: "WOMEN'S HORSEBIT",
      id: "#12345678",
      image: "./Pic3.jpg",
      order: "90",
      price: "90000",
    },
  ];
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
        <div>
          <div className="hidden lg:block">
            <Leftbar />
          </div>
          <div className="sm:flex p-2 bg-gray-100 h-full group hover:flex">
            <div className="group-hover:hidden">
              <HomeIcon />
            </div>
            <div className="group-hover:block hidden absolute bg-white">
              <Leftbar />
            </div>
          </div>
        </div>
        <div className="bg-gray-200 w-full p-8">
          <div className=" flex gap-10">
            <div className=" rounded-lg p-3 border-none bg-white row-span-1 w-7/12 h-30 min-[350px]:w-full max-[640px]:w-full">
              <h2 className=" flex">
                <Ordericon /> Захиалга
              </h2>
              <h1 className=" text-2xl font-bold">58</h1>
              <p className=" text-[]">Өнөөдөр</p>
            </div>
            <div className=" rounded-lg p-3 border-none bg-white row-span-1 w-5/12 h-30 min-[350px]:w-full max-[640px]:full">
              <h1 className=" text-2xl font-bold">235,000₮</h1>
              <p className=" text-[]">Өнөөдөр</p>
            </div>
          </div>
          {/* Borluulalt */}
          <div className="flex w-full mt-5 gap-10 sm:flex-col lg:flex-row min-[350px]:flex-col">
            <div className=" rounded-lg p-3 border-none bg-white w-7/12 min-[350px]:w-full">
              <div className=" flex justify-between mb-3">
                <h1 className=" text-xl">Шилдэг бүтээгдэхүүн</h1>
                <Bagaih />
              </div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Бүтээгдэхүүн</th>
                      <th>Зарагдсан</th>
                      <th>Үнэ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((e: dashboardData) => {
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
                                    src={`${e.image}`}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{e?.name}</div>
                                <div className="text-sm opacity-50">
                                  {e?.id}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{e?.order}</td>
                          <td>{e?.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" w-5/12 min-[350px]:w-full">
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
