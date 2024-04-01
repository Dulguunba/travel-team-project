import React from "react";

type card = {
  image: String;
  title: String;
  date: Date;
  information: String;
};

export const OrderCard = () => {
  return (
    <div className=" w-full h-40 rounded-lg flex gap- bg-gray-200">
      <div className=" w-[40%] h-40 rounded-lg p-2">
        <img
          src={`${"/img/download.jpeg"}`}
          className=" w-full h-full rounded-lg"
        />
      </div>
      <div className=" w-full p-5 bg-gray-100 rounded-lg">
        <h1 className=" text-2xl font-medium">WOMEN'S HORSEBIT MULE</h1>
        <div className="mt-2 mb-2">
          <p>2024-01-20</p>
          <p>Бүтээгдэхүүний ID: 30349049903</p>
        </div>
        <div className=" flex justify-between">
          <p>Тоо ширхэг: * ₮225,700</p>
          <b>₮677,100</b>
        </div>
      </div>
    </div>
  );
};
