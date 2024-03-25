import React from "react";
import { useState } from "react";
import { instance } from "../utilities/TravelUtility";

export const PictureAdmin = () => {
  const [foodImage, setFoodImage] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    const target = e.target;
    const selectedFile = target?.files as FileList;
    formData.append("image", selectedFile[0]);
    try {
      const res = await instance.post(`/upload`, formData, config);
      setFoodImage(res.data.image.imageUrl);
      setLoading(false);
    } catch (error) {
      alert(`Зураг шинэчлэхэд алдаа үүслээ. Та дахин оролдоно уу`);
    }
  };

  return (
    <div className="w-full h-40 text-sm flex-col">
      <label htmlFor="image">Хоолны зураг</label>
      <div className="bg-gray-100 border-dashed border-2 border-gray-300 h-40 rounded-lg w-full relative">
        <img
          src={foodImage}
          className="w-full h-full  absolute top-0 left-0 opacity-70"
          alt=""
        />
        <div
          className={`absolute top-[40%] left-[40%]  gap-5 text-lg ${
            loading ? "flex" : "hidden"
          } `}
        >
          <span>Loading</span>
          <span className="loading loading-ring loading-md"></span>
        </div>
        <div
          className={`w-full  h-full absolute top-0 left-0 flex flex-col items-center gap-2 justify-center ${
            loading ? "hidden" : "flex"
          }`}
        >
          <p className="font-semibold">
            {foodImage ? "Change image for the food" : "Add image for the food"}
          </p>
          <div className="w-1/2 relative h-8">
            <button className="bg-black w-full h-full absolute top-0 left-0 text-white p-2 rounded">
              {foodImage ? "Change image" : "Add image"}
            </button>
            <input
              type="file"
              className="h-full  w-full absolute top-0 left-0 opacity-0"
              accept="image/jpeg, image/png, image/jpg"
              onChange={(e) => uploadImage(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
