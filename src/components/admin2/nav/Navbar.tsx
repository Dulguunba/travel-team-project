import React from "react";
import { HomeIcon } from "../../icons2/HomeIcon";
import { Ordericon } from "../../icons2/Ordericon";
import { Incomeicon } from "../../icons2/Incomeicon";
import { Producticon } from "../../icons2/Producticon";
import { Settingsicon } from "../../icons2/Settingsicon";

export const Navbar = () => {
  const list = [
    {
      icon: <HomeIcon />,
      title: "Хяналтын самбар",
    },
    {
      icon: <Ordericon />,
      title: "Захиалга",
    },
    {
      icon: <Incomeicon />,
      title: "Орлого",
    },
    {
      icon: <Producticon />,
      title: "Бүтээгдэхүүн",
    },
    {
      icon: <Settingsicon />,
      title: "Тохиргоо",
    },
  ];
  return (
    <div className=" bg-[#FFFFFF]">
      <div className="w-4/12 flex flex-col p-5 text-right">
        {list.map((e: any) => {
          return (
            <div className="flex gap-3 mb-3 w-fit h-fit justify-center items-center">
              <ol className="w-8">{e.icon}</ol>
              <ol className=" font-semibold">{e?.title}</ol>
            </div>
          );
        })}
      </div>
    </div>
  );
};
