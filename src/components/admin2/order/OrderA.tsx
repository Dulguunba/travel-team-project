import React from "react";
import { Navbar } from "../nav/Navbar";
import { Searchicon } from "@/components/icons2/product/Searchicon";
import { Bagaih } from "@/components/icons2/product/Bagaih";

export const OrderA = () => {
  const list = [
    "Бүгд",
    "Шинэ захиалага",
    "Бэлтгэгдэж байна",
    "Хүргэлтэнд гарсан",
    "Хүргэгдсэн",
    "Цуцлагдсан",
  ];
  const data = [{}, {}, {}, {}, {}];
  return (
    <div className="flex">
      <Navbar />
      <div className="w-full bg-gray-100">
        <div className=" mb-2">
          <div className=" flex gap-5">
            {list.map((e) => {
              return <ol>{e}</ol>;
            })}
          </div>
        </div>
        <hr />
        <div className="p-5">
          <div className=" mt-2 flex justify-between ">
            <div className="flex gap-5 p-1">
              <button className=" rounded bg-[#18BA51] text-white p-1">
                Өнөөдөр
              </button>
              <button className="bg-white rounded-lg p-1">7 хоног</button>
              <button className="bg-white rounded-lg p-1">
                <input type="date" />
              </button>
            </div>
            <div>
              {" "}
              <div className="flex bg-white  h-fit p-1 rounded-lg border border-gray-300 w-96">
                <Searchicon />
                <input
                  type="text"
                  className=" w-full"
                  placeholder="Дугаар, Имэйл"
                />
              </div>
            </div>
          </div>
          <div className="rounded-xl border-none mt-5">
            <div className=" p-5 bg-white ">
              <h1 className=" text-2xl">Захиалга</h1>
            </div>
            <table className="table bg-white">
              {/* head */}
              <thead className=" bg-gray-200">
                <tr>
                  <th>Захиалгын ID дугаар</th>
                  <th>Үйлчлүүлэгч</th>
                  <th>Огноо</th>
                  <th>Цаг</th>
                  <th>Төлбөр</th>
                  <th>Статус</th>
                  <th>Дэлгэрэнгүй</th>
                </tr>
              </thead>
              <tbody>
                {data.map(() => {
                  return (
                    <tr>
                      <th>
                        <label>#18BA51</label>
                      </th>
                      <td>
                        <div>
                          <div className="font-bold">Hart Hagerty</div>
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </td>
                      <td>
                        <p>2024-03-19</p>
                      </td>
                      <td>11:00</td>
                      <td>12:000$</td>
                      <td>
                        {" "}
                        <button className=" rounded-xl bg-[#C1E6CF] p-1 text-[#0A4E22]">
                          Хүргэгдсэн
                        </button>
                      </td>
                      <td>
                        <div className="ml-5">
                          <Bagaih />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
