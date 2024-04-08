import React, { useMemo, useState } from "react";
import { Navbar } from "./nav/Navbar";
import { Leftbar } from "./Leftbar";
import { Addtionicon } from "../icons2/Addtionicon";
import { Categoryicon } from "../icons2/product/Categoryicon";
import { Dolloryicon } from "../icons2/product/Dolloryicon";
import { Dateicon } from "../icons2/product/Dateicon";
import { Searchicon } from "../icons2/product/Searchicon";
import { Deleteicon } from "../icons2/product/Deleteicon";
import { Editicon } from "../icons2/product/Editicon";
import { instance } from "../utilities/TravelUtility";

type travelInfoType = {
  additionalInfo: String;
  calendar: [
    {
      endDay: String;
      endTime: String;
      startDay: String;
      startTime: String;
    }
  ];
  categoryType: String[];
  createdAt: Date;
  duration: 14;
  food: {
    IsIncludeFoodCheck: Boolean;
    IsIncludeFoodPriceCheck: Boolean;
    foodNumber: Number;
    foodPrice: Number;
  };
  image: {
    mainImage: String;
    supportImage: String;
  };
  name: String;
  price: { adultPrice: String; childPrice: String };
  route: String[];
  touristType: [];
  traffic: {
    trafficPrice: Number;
    IsIncludeTrafficCheck: Boolean;
    IsIncludeTrafficPriceCheck: Boolean;
  };
  travelCompany: String;
  updatedAt: String;
  __v: Number;
  _id: String;
};

export const AdminProduct = () => {
  const [productData, setProductData] = useState([]);
  const getProduct = async () => {
    try {
      const get: [] = (await instance.get("/travel/get")).data.result;
      setProductData(get);
    } catch (error) {
      console.log(error);
    }
  };
  useMemo(() => {
    getProduct();
  }, []);
  const deleteTravel = async (id: String) => {
    try {
      const travel = await instance.delete("travel/delete/?_id=" + id);
      getProduct();
      alert("SuccessFully Delete Travel");
    } catch (error) {
      console.log(error);
    }
  };
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
              <div className="mt-1">
                <Addtionicon />
              </div>
              Аялал нэмэх
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
                  <thead>
                    <tr>
                      <th></th>
                      <th>Зураг</th>
                      <th>Аялалын нэр</th>
                      <th>Компанийн нэр</th>
                      <th>Хугцаа</th>
                      <th>Үнэ</th>
                      <th> Нэмэлт мэдээлэл</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {productData.map((travel: travelInfoType) => {
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
                                  <img src={`${travel.image.mainImage}`} />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">
                                  {travel.travelCompany}
                                </div>
                                <div className="text-sm opacity-50">
                                  {travel.additionalInfo.slice(0, 10)}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{travel.name.slice(0, 30)}</td>
                          <td>{travel.travelCompany}</td>
                          <th>
                            <p>
                              {travel.calendar[0].startDay} -
                              {travel.calendar[0].endDay}
                            </p>
                          </th>
                          <th>
                            <select id="">
                              <option>Adult-{travel.price.adultPrice}</option>
                              <option>Child-{travel.price.childPrice}</option>
                            </select>
                          </th>
                          <th>
                            <p className=" text-ellipsis">
                              {travel.additionalInfo}
                            </p>
                          </th>
                          <th>
                            <div className=" flex gap-5">
                              <button onClick={() => deleteTravel(travel._id)}>
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
