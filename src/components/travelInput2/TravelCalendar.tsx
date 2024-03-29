import React, { ReactNode, useState } from "react";
import { Deleteicon } from "../icons2/product/Deleteicon";
import Link from "next/link";

type rowDataProps = {
  startTime: string;
  startDay: string;
  endTime: string;
  endDay: string;
};

export const TravelCalendar = () => {
  const [travelInput, setTravelInput] = useState({
    startTimes: "",
    endTime: "",
    startDay: "",
    endDay: "",
  });
  const [travelData, setTravelData] = useState<rowDataProps[]>([]);

  const add = async () => {
    const travelInputValue: rowDataProps = {
      startTime: travelInput.startTimes,
      startDay: travelInput.startDay,
      endTime: travelInput.endTime,
      endDay: travelInput.endDay,
    };
    setTravelData([...travelData, travelInputValue]);
    clear();
  };
  const clear = () => {
    travelInput.startTimes = "";
    travelInput.endTime = "";
    travelInput.startDay = "";
    travelInput.endDay = "";
    setTravelInput({ ...travelInput, endDay: "" });
  };
  const deleteRows = (id: number) => {
    const rowValues = travelData.filter(
      (travelCalendar, index) => index !== id
    );
    setTravelData(rowValues);
  };
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
            <button onClick={clear} className="">
              <Deleteicon />
            </button>
          </div>
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
          <input
            type="time"
            placeholder="Дуусах цаг"
            value={travelInput.endTime}
            className=" border border-gray-300 rounded-lg mb-2 p-1 w-full"
            onChange={(e) => {
              setTravelInput({ ...travelInput, endTime: e.target.value });
            }}
          />
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
              <button className=" bg-blue-200 p-1 rounded-lg h-fit">
                back
              </button>
            </Link>
            <button
              onClick={add}
              className="bg-blue-200 p-1 rounded-lg h-fit "
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
              {travelData.map((travelCalendar: rowDataProps, index: number) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{travelCalendar?.startTime}</td>
                    <td>{travelCalendar?.endTime}</td>
                    <td>{travelCalendar?.startDay}</td>
                    <td>{travelCalendar?.endDay}</td>
                    <td>
                      <button onClick={() => deleteRows(index)}>
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
