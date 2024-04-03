import React from "react";
import { AdminBoard } from "../icons/adminicons/AdminBoard";
import { AdminOrder } from "../icons/adminicons/AdminOrder";
import { AdminRevenue } from "../icons/adminicons/AdminRevenue";
import { AdminSetting } from "../icons/adminicons/AdminSetting";
import { AdminProduct } from "../icons/adminicons/AdminProduct";

export const Leftbar = () => {
  return (
    <div className="w-1/6 min-h-screen h-full py-10 flex flex-col gap-7 justify-start bg-white shadow-lg">
      <a
        className="flex gap-2 w-full items-center pl-5"
        href="/admin/dashboard"
      >
        <div className="w-1/6 px-4">
          <AdminBoard />
        </div>
        <h1>Хяналтын самбар</h1>
      </a>
      <a
        className="flex gap-2 w-full items-center pl-5"
        href="/admin/order/order"
      >
        <div className="w-1/6 px-4">
          <AdminOrder />
        </div>
        <h1>Захиалга</h1>
      </a>
      <a className="flex gap-2 w-full items-center pl-5" href="/admin/income">
        <div className="w-1/6 px-4">
          <AdminRevenue />
        </div>
        <h1>Орлого</h1>
      </a>
      <a className="flex gap-2 w-full items-center pl-5" href="/admin/product">
        <div className="w-1/6 px-4">
          <AdminProduct />
        </div>
        <h1>Бүтээгдэхүүн</h1>
      </a>
      <a className="flex gap-2 w-full items-center pl-5" href="/admin/product">
        <div className="w-1/6 px-4">
          <AdminSetting />
        </div>
        <h1>Тохиргоо</h1>
      </a>
    </div>
  );
};
