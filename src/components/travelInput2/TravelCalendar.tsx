import React, { ReactNode, useMemo, useState } from "react";
import { Deleteicon } from "../icons2/product/Deleteicon";
import Link from "next/link";
import axios from "axios";
import { instance } from "../../utilities/TravelUtility";

type rowDataProps = {
  startTime: string;
  endTime: string;
};
type rowData = {
  _id: String;
  startTime: string;
  endTime: string;
  startDay: String;
  endDay: String;
};

export const TravelCalendar = () => {
  const [travelInput, setTravelInput] = useState({
    startTimes: "",
    endTime: "",
    startDay: "",
    endDay: "",
  });
  const [travelData, setTravelData] = useState<rowData[]>([]);

  const add = async () => {
    const travelInputValue: rowDataProps = {
      startTime: travelInput.startDay + "T" + travelInput.startTimes,
      endTime: travelInput.endDay + "T" + travelInput.endTime,
    };
    try {
      const createDB = await instance.post("calendar/create", travelInputValue);
      getCalendar();
      alert("successfully create");
    } catch (error) {
      console.log(error);
    }
    // clear();
  };
  const clear = () => {
    travelInput.startTimes = "";
    travelInput.endTime = "";
    travelInput.startDay = "";
    travelInput.endDay = "";
    setTravelInput({ ...travelInput, endDay: "" });
  };
  const deleteRows = async (id: String) => {
    try {
      const deleteRow = await instance.delete("/calendar/delete?id=" + id);
      getCalendar();
    } catch (error) {
      console.log("calendar Delete note", error);
    }
  };
  const getCalendar = async () => {
    try {
      const get = await (await instance.get("/calendar/get")).data;
      setTravelData(get);
    } catch (error) {
      console.log(error);
    }
  };
  useMemo(() => {
    getCalendar();
  }, []);
  return (
    <div>
      <ul className="w-full justify-center steps steps-vertical lg:steps-horizontal py-7">
        <li className="step step-primary">General information</li>
        <li className="step step-primary">Food</li>
        <li className="step step-primary">Traffic</li>
        <li className="step step-primary">Routes</li>
        <li className="step step-primary">Calendar</li>
      </ul>
      ;
      <div className=" flex bg-gray-100 p-10 gap-10">
        <div className=" border-none p-5 w-3/12 rounded flex flex-col bg-gray-200 h-fit">
          <div className=" flex justify-between mb-3">
            <h1 className=" text-xl font-normal">TravelCalendar</h1>
            <button onClick={clear}>
              <Deleteicon />
            </button>
          </div>
          <label htmlFor="">Эхлэх цаг</label>
          <input
            type="time"
            value={travelInput.startTimes}
            className=" border border-gray-300 rounded-lg mb-2 p-1 w-full"
            onChange={(e) => {
              setTravelInput({
                ...travelInput,
                startTimes: e.target.value,
              });
            }}
          />
          <label htmlFor="">Дуусах цаг</label>
          <input
            type="time"
            placeholder="Дуусах цаг"
            value={travelInput.endTime}
            className=" border border-gray-300 rounded-lg mb-2 p-1 w-full"
            onChange={(e) => {
              setTravelInput({ ...travelInput, endTime: e.target.value });
            }}
          />
          <label htmlFor="">Эхлэх өдөр</label>
          <input
            type="date"
            placeholder="Эхлэх өдөр"
            className=" border border-gray-300 rounded-lg mb-2 p-1 w-full"
            value={travelInput.startDay}
            onChange={(e) => {
              setTravelInput({
                ...travelInput,
                startDay: e.target.value,
              });
            }}
          />
          <label htmlFor="">Дуусах өдөр</label>
          <input
            type="date"
            placeholder="Дуусах өдөр"
            value={travelInput.endDay}
            className=" border border-gray-300 rounded-lg mb-2 p-1 w-full"
            onChange={(e) => {
              setTravelInput({ ...travelInput, endDay: e.target.value });
            }}
          />
          <div className=" flex justify-center gap-20 text-xl mt-3">
            <Link href={"/stepfour"}>
              <button className=" bg-blue-300 p-1 rounded-lg h-fit text-white">
                back
              </button>
            </Link>
            <button
              onClick={add}
              className="bg-blue-300 p-1 rounded-lg h-fit text-white"
              disabled={
                !travelInput.endDay ||
                !travelInput.endTime ||
                !travelInput.startDay ||
                !travelInput.startTimes
              }
            >
              Add Row
            </button>
          </div>
        </div>
        <div className=" w-9/12 ">
          <table className="table bg-white">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Эхлэх цаг</th>
                <th>Дуусах цаг</th>
                <th>Эхлэх өдөр</th>
                <th>Дуусах өдөр</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {travelData.map((travelCalendar: rowData, index: number) => {
                const startTime = travelCalendar?.startTime.slice(11, 16);
                const endTime = travelCalendar?.endTime.slice(11, 16);
                const startDay = travelCalendar?.startTime.slice(0, 10);
                const endDay = travelCalendar?.endTime.slice(0, 10);

                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{startTime}</td>
                    <td>{endTime}</td>
                    <td>{startDay}</td>
                    <td>{endDay}</td>
                    <td>
                      <button onClick={() => deleteRows(travelCalendar?._id)}>
                        <Deleteicon />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
