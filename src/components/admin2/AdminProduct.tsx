import React, { useState } from "react";
import { Navbar } from "./nav/Navbar";
import { Leftbar } from "../admin/Leftbar";
import { Addtionicon } from "../icons2/Addtionicon";
import { Categoryicon } from "../icons2/product/Categoryicon";
import { Dolloryicon } from "../icons2/product/Dolloryicon";
import { Dateicon } from "../icons2/product/Dateicon";
import { Searchicon } from "../icons2/product/Searchicon";
import { Deleteicon } from "../icons2/product/Deleteicon";
import { Editicon } from "../icons2/product/Editicon";

export const AdminProduct = () => {
  const [productData, setProductData] = useState([{}, {}, {}, {}, {}, {}, {}]);
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Leftbar />
        <div className=" bg-gray-100 w-full">
          <div className=" flex gap-5 px-5">
            <button className=" text-lg">Бүтээгдэхүүн</button>
            <button className=" text-lg">Ангилал</button>
          </div>
          <hr />
          <div className="m-8">
            <button className=" mb-5 flex gap-3 bg-black rounded-lg w-fit px-10 p-2 text-white">
              {" "}
              <div className="mt-1">
                <Addtionicon />
              </div>
              Бүтээгдэхүүн нэмэх
            </button>
            <div className="flex justify-between mb-8">
              <div className=" flex gap-5">
                <button className=" flex gap-2  rounded-lg border border-gray-300 p-1 px-4">
                  <Categoryicon />
                  Ангилал
                </button>
                <button className=" flex gap-2  rounded-lg border border-gray-300 p-1 px-4">
                  <div className=" mt-[2px]">
                    <Dolloryicon />
                  </div>
                  Үнэ
                </button>
                <button className=" flex gap-2 rounded-lg border border-gray-300 p-1 px-4">
                  <Dateicon />
                  Сараар
                </button>
              </div>
              <div>
                <label className="input input-bordered flex items-center gap-2 h-9">
                  <Searchicon />
                  <input type="text" className="grow" placeholder="Search" />
                </label>
              </div>
            </div>
            <div>
              <div className="overflow-x-auto bg-white rounded-lg">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Бүтээгдэхүүн</th>
                      <th>Ангилал</th>
                      <th>Үнэ</th>
                      <th>Үлдэгдэл</th>
                      <th>Зарагдсан</th>
                      <th> Нэмсэн огноо</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {productData.map(() => {
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
                            <span className="badge badge-ghost badge-sm">
                              Desktop Support Technician
                            </span>
                          </td>
                          <td>19,000₮</td>
                          <th>76</th>
                          <th>30</th>
                          <th>2024-01-10</th>
                          <th>
                            <div className=" flex gap-5">
                              <button>
                                <Deleteicon />
                              </button>
                              <button>
                                <Editicon />
                              </button>
                            </div>
                          </th>
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
