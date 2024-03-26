import React, { useEffect, useState } from "react";
import { Return } from "../icons/adminicons/Return";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { TravelDataContext } from "../context";
import { useRouter } from "next/router";
import Link from "next/link";
import { instance } from "../utilities/TravelUtility";

export const CategoryAdmin = ({
  pageNumber,
  setPageNumber,
  travelDataInput,
  setTravelDataInput,
}: {
  pageNumber: number;
  setPageNumber: Function;
  travelDataInput: {};
  setTravelDataInput: Function;
}) => {
  const route = useRouter();
  const { travelData, setTravelData } = useContext(TravelDataContext);
  const [categoryData, setCategoryData] = useState([]);
  const [touristData, setTouristdata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedTourist, setSelectedTourist] = useState<string[]>([]);

  useEffect(() => {
    async function fetchCategory() {
      try {
        type repsonse = {
          data: { result: [] };
        };
        const response = await instance.get("/category/get");
        const data = response.data.result;
        console.log("category data", data);

        setCategoryData(data);
      } catch (error) {
        alert(`fail to get category data`);
      }
    }
    fetchCategory();
  }, []);

  useEffect(() => {
    async function fetchCategory() {
      try {
        type repsonse = {
          data: { result: [] };
        };
        const response = await instance.get("/tourist/get");
        const data = response.data.result;
        console.log("category data", data);

        setTouristdata(data);
      } catch (error) {
        alert(`fail to get category data`);
      }
    }
    fetchCategory();
  }, []);

  const IsChecked = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: string[],
    setData: Function
  ) => {
    if (e.target.checked) {
      return true;
    } else {
      const unChecked = e.target.value;
      console.log("uncheck", unChecked);

      const CheckedData = data.filter((item) => item !== unChecked);
      console.log("checkdata", CheckedData);

      return setData(CheckedData);
    }
  };

  const addCatagory = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: string[],
    setData: Function
  ) => {
    IsChecked(e, data, setData);
    const itemValue = e.target.value;
    console.log(itemValue);
    if (!data.includes(itemValue)) {
      const itemArray = [itemValue];
      setData([...data, ...itemArray]);
      console.log(data);
    }
  };

  const submit = () => {
    setTravelDataInput({
      ...travelDataInput,
      categoryType: categoryData,
      touristType: touristData,
    });
    setPageNumber(4);
  };

  return (
    <div
      className={`w-full h-full min-h-screen gap-7 ${
        pageNumber == 3 ? "flex" : "hidden"
      } flex-col justify-start items-start`}
    >
      <a className="w-full flex gap-7 items-center bg-white" href="/">
        <Return />
        <h1>Аялал нэмэх</h1>
      </a>
      <ul className="w-full justify-center steps steps-vertical lg:steps-horizontal mt-5">
        <li className="step step-primary">General information</li>
        <li className="step step-primary">Food & Traffic</li>
        <li className="step step-primary">Category</li>
        <li className="step">Routes</li>
        <li className="step">Calendar</li>
      </ul>
      <div className="p-5 flex  w-full justify-center items-start">
        <div className="w-2/3 text-sm  flex flex-col mb-2 gap-5 p-10 bg-white rounded-lg mt-20">
          <label htmlFor="duration">Аялалын ангилал</label>
          <div className="flex">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">1. Аялалын ангилалыг сонгоно уу.</label>
              {categoryData?.map(
                (category: { name: string; english: string; _id: string }) => (
                  <div className="form-control">
                    <label className="label cursor-pointer flex justify-start gap-5">
                      <input
                        type="checkbox"
                        value={category._id}
                        className="checkbox"
                        onChange={(e) =>
                          addCatagory(e, selectedCategory, setSelectedCategory)
                        }
                      />
                      <span className="label-text capitalize">
                        {category.name}
                      </span>
                    </label>
                  </div>
                )
              )}
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="">
                2. Аялалд хамрагдах жуулчдын ангилалыг сонгоно уу.
              </label>
              {touristData?.map(
                (tourist: { name: string; english: string; _id: string }) => (
                  <div className="form-control">
                    <label className="label cursor-pointer flex justify-start gap-5">
                      <input
                        type="checkbox"
                        value={tourist._id}
                        className="checkbox"
                        onChange={(e) =>
                          addCatagory(e, selectedTourist, setSelectedTourist)
                        }
                      />
                      <span className="label-text capitalize">
                        {tourist.name}
                      </span>
                    </label>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <a
              className="bg-primary p-2 rounded text-white"
              onClick={setPageNumber(2)}
            >
              Буцах
            </a>
            {/* <Link href={"/stepfour"}> */}
            <button
              onClick={submit}
              className="bg-primary p-2 rounded text-white"
            >
              Дараах
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
