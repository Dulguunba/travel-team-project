import React, { use, useState } from "react";
import { Deleteicon } from "../icons2/product/Deleteicon";
import axios from "axios";
import Link from "next/link";

type tripInformationTypes = {
  startStation: String;
  endStation: String;
  duration: String;
  vehicle: String;
  location: String;
  information: String;
};

export const Routs = () => {
  const vehicle = ["bus", "car", "metro"];
  const [tripInformation, setTripInformation] = useState({
    startStation: "",
    endStation: "",
    duration: "",
    vehicle: "bus",
    location: "",
    information: "",
  });
  const [tripDatabase, setTripDatabase] = useState<tripInformationTypes[]>([]);
  const deleteRows = (id: number) => {
    const rowValues = tripDatabase.filter((a, index) => index !== id);
    setTripDatabase(rowValues);
  };
  console.log(tripInformation);
  const Add = async () => {
    try {
      const tripInformationDb: tripInformationTypes = {
        startStation: tripInformation.startStation,
        endStation: tripInformation.endStation,
        duration: tripInformation.duration,
        vehicle: tripInformation.vehicle,
        location: tripInformation.location,
        information: tripInformation.information,
      };
      const createDB = await axios.post(
        "http://localhost:8080/routs",
        tripInformationDb
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
    tripInformation.duration = "";
    tripInformation.endStation = "";
    tripInformation.information = "";
    tripInformation.location = "";
    tripInformation.startStation = "";
    tripInformation.vehicle = "";
    setTripInformation({ ...tripInformation, vehicle: "bus" });
  };
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
              value={tripInformation.startStation}
              onChange={(e) =>
                setTripInformation({
                  ...tripInformation,
                  startStation: e.target.value,
                })
              }
              className=" border border-gray-300 rounded-lg mb-2 p-1 w-full"
            />
          </div>
          <label htmlFor="">Дуусах цэг</label>
          <input
            type="text"
            value={tripInformation.endStation}
            onChange={(e) =>
              setTripInformation({
                ...tripInformation,
                endStation: e.target.value,
              })
            }
            placeholder="Дуусах цэг"
            className=" border border-gray-300 rounded-lg mb-2 p-1 "
          />
          <label htmlFor="">Үргэлжлэх хугцаа</label>
          <input
            type="date"
            value={tripInformation.duration}
            onChange={(e) =>
              setTripInformation({
                ...tripInformation,
                duration: e.target.value,
              })
            }
            className=" border border-gray-300 rounded-lg mb-2 p-1 "
          />
          <label htmlFor="">Тээврийн хэрэгсэл</label>
          <select
            value={tripInformation.vehicle}
            onChange={(e) =>
              setTripInformation({
                ...tripInformation,
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
            value={tripInformation.location}
            onChange={(e) =>
              setTripInformation({
                ...tripInformation,
                location: e.target.value,
              })
            }
            className=" border border-gray-300 rounded-lg mb-2 p-1 "
          />
          <label htmlFor="">Нэмэлт мэдээлэл</label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Нэмэлт мэдээлэл"
            value={tripInformation.information}
            onChange={(e) =>
              setTripInformation({
                ...tripInformation,
                information: e.target.value,
              })
            }
          ></textarea>
          <button
            onClick={Add}
            className=" mt-3 p-1 bg-white rounded-lg w-full"
            disabled={
              !tripInformation.duration ||
              !tripInformation.endStation ||
              !tripInformation.information ||
              !tripInformation.location ||
              !tripInformation.startStation ||
              !tripInformation.vehicle
            }
          >
            Add
          </button>
          <div className=" mt-3 flex justify-between">
            <Link href={"/travelinputthree"}>
              <button className="bg-blue-400 p-1 rounded text-white w-16">
                back
              </button>
            </Link>
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
                  (tripInformation: tripInformationTypes, index) => {
                    return (
                      <tr>
                        <th>{index + 1}</th>
                        <td>{tripInformation?.startStation}</td>
                        <td>{tripInformation?.endStation}</td>
                        <td>{tripInformation?.duration}</td>
                        <td>{tripInformation?.vehicle}</td>
                        <td>{tripInformation?.location}</td>
                        <td>{tripInformation?.information}</td>
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
