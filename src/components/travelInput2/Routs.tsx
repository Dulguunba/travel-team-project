import React, { use, useState } from "react";
import { Deleteicon } from "../icons2/product/Deleteicon";
import axios from "axios";
import Link from "next/link";

type tripInpormationTypes = {
  startStation: String;
  endStation: String;
  duration: String;
  vehicle: String;
  location: String;
  information: String;
};

export const Routs = () => {
  const vehicle = ["bus", "car", "metro"];
  const [tripInpormation, setTripInpormation] = useState({
    startStation: "",
    endStation: "",
    duration: "",
    vehicle: "bus",
    location: "",
    information: "",
  });
  const [tripDatabase, setTripDatabase] = useState<tripInpormationTypes[]>([]);
  const deleteRows = (id: number) => {
    const rowValues = tripDatabase.filter((a, index) => index !== id);
    setTripDatabase(rowValues);
  };
  console.log(tripInpormation);
  const Add = async () => {
    try {
      const tripInpormationDb: tripInpormationTypes = {
        startStation: tripInpormation.startStation,
        endStation: tripInpormation.endStation,
        duration: tripInpormation.duration,
        vehicle: tripInpormation.vehicle,
        location: tripInpormation.location,
        information: tripInpormation.information,
      };
      const createDB = await axios.post(
        "http://localhost:8080/routs",
        tripInpormationDb
      );
      const getRouts = await (
        await axios.get("http://localhost:8080/routs")
      ).data;
      console.log(getRouts);
      setTripDatabase(getRouts);
      // clear();
    } catch (error) {
      console.log("create hiihed aldaa garlaa");
    }
  };
  const clear = () => {
    tripInpormation.duration = "";
    tripInpormation.endStation = "";
    tripInpormation.information = "";
    tripInpormation.location = "";
    tripInpormation.startStation = "";
    tripInpormation.vehicle = "";
    setTripInpormation({ ...tripInpormation, vehicle: "bus" });
  };
  // const createRouts = async () => {
  //   try {
  //     if (tripDatabase.length == 0) {
  //       return alert("data bhgui bna");
  //     }
  //     alert("create data");
  //   } catch (error) {}
  // };
  return (
    <div>
      <ul className="w-full justify-center steps steps-vertical lg:steps-horizontal py-7">
        <li className="step step-primary">General information</li>
        <li className="step step-primary">Food</li>
        <li className="step step-primary">Traffic</li>
        <li className="step step-primary">Routes</li>
        <li className="step ">Calendar</li>
      </ul>
      <div className=" flex gap-10 p-5 bg-gray-100">
        <div className=" border-none p-5 w-3/12 rounded flex flex-col bg-gray-200 h-fit">
          <div className=" bg">
            <label htmlFor="">Эхлэх цэг</label> <br />
            <input
              type="text"
              placeholder="Эхлэх цэг"
              value={tripInpormation.startStation}
              onChange={(e) =>
                setTripInpormation({
                  ...tripInpormation,
                  startStation: e.target.value,
                })
              }
              className=" border border-gray-300 rounded-lg mb-2 p-1 w-full"
            />
          </div>
          <label htmlFor="">Дуусах цэг</label>
          <input
            type="text"
            value={tripInpormation.endStation}
            onChange={(e) =>
              setTripInpormation({
                ...tripInpormation,
                endStation: e.target.value,
              })
            }
            placeholder="Дуусах цэг"
            className=" border border-gray-300 rounded-lg mb-2 p-1 "
          />
          <label htmlFor="">Үргэлжлэх хугцаа</label>
          <input
            type="date"
            value={tripInpormation.duration}
            onChange={(e) =>
              setTripInpormation({
                ...tripInpormation,
                duration: e.target.value,
              })
            }
            className=" border border-gray-300 rounded-lg mb-2 p-1 "
          />
          <label htmlFor="">Тээврийн хэрэгсэл</label>
          <select
            value={tripInpormation.vehicle}
            onChange={(e) =>
              setTripInpormation({
                ...tripInpormation,
                vehicle: e.target.value,
              })
            }
            className=" border border-gray-300 rounded-lg mb-2 p-1 "
          >
            {vehicle.map((e: String) => {
              return <option>{e}</option>;
            })}
          </select>
          <label htmlFor="">Байрлах газар</label>
          <input
            type="text"
            placeholder="Байрлах газар"
            value={tripInpormation.location}
            onChange={(e) =>
              setTripInpormation({
                ...tripInpormation,
                location: e.target.value,
              })
            }
            className=" border border-gray-300 rounded-lg mb-2 p-1 "
          />
          <label htmlFor="">Нэмэлт мэдээлэл</label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Нэмэлт мэдээлэл"
            value={tripInpormation.information}
            onChange={(e) =>
              setTripInpormation({
                ...tripInpormation,
                information: e.target.value,
              })
            }
          ></textarea>
          <button
            onClick={Add}
            className=" mt-3 p-1 bg-white rounded-lg w-full"
            disabled={
              !tripInpormation.duration ||
              !tripInpormation.endStation ||
              !tripInpormation.information ||
              !tripInpormation.location ||
              !tripInpormation.startStation ||
              !tripInpormation.vehicle
            }
          >
            Add
          </button>
          <div className=" mt-3 flex justify-between">
            <button className="bg-blue-400 p-1 rounded text-white w-16">
              back
            </button>
            <Link href={"/stepfive"}>
              <button className="bg-blue-400 p-1 rounded text-white w-16">
                next
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-9/12 rounded p-3">
          <div className="overflow-x-auto">
            <table className="table bg-white">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Эхлэх цэг</th>
                  <th>Дуусах цэг</th>
                  <th>Үргэлжлэх хугцаа</th>
                  <th>Тээврийн хэрэгсэл</th>
                  <th>Байрлах газар</th>
                  <th>Нэмэлт мэдээлэл</th>
                  <th>Устгах</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {tripDatabase.map(
                  (tripInpormation: tripInpormationTypes, index) => {
                    return (
                      <tr>
                        <th>{index + 1}</th>
                        <td>{tripInpormation?.startStation}</td>
                        <td>{tripInpormation?.endStation}</td>
                        <td>{tripInpormation?.duration}</td>
                        <td>{tripInpormation?.vehicle}</td>
                        <td>{tripInpormation?.location}</td>
                        <td>{tripInpormation?.information}</td>
                        <td>
                          <button onClick={() => deleteRows(index)}>
                            <Deleteicon />
                          </button>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
