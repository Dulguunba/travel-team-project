import React, { useMemo, useState } from "react";
import { Deleteicon } from "../icons2/product/Deleteicon";
import axios from "axios";
import Link from "next/link";
import { instance } from "../../utilities/TravelUtility";
import { ok } from "assert";

type tripInformations = {
  _id: string;
  startStation: String;
  endStation: String;
  duration: String;
  vehicle: String;
  location: String;
  information: String;
};
export type tripInformationTypes = {
  startStation: String;
  endStation: String;
  duration: String;
  vehicle: String;
  location: String;
  information: String;
  image: String;
};
type tripInformationType = {
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
    image: "",
  });
  const [tripDatabase, setTripDatabase] = useState<tripInformations[]>([]);
  const deleteRows = async (id: String) => {
    await instance.delete("route/delete?id=" + id);
    // getRoutDatabase();
  };
  const Add = async () => {
    try {
      const tripInformationDb: tripInformationType = {
        startStation: tripInformation.startStation,
        endStation: tripInformation.endStation,
        duration: tripInformation.duration,
        vehicle: tripInformation.vehicle,
        location: tripInformation.location,
        information: tripInformation.information,
      };
      const getInput = new FormData();
      if (!tripInformation.image) {
        return ok;
      }
      getInput.append("image", tripInformation.image);
      getInput.append("information", JSON.stringify(tripInformationDb));
      const createDB = await instance.post(
        "http://localhost:8800/route/create",
        getInput,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      alert("add successfullys");
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
  // const getRoutDatabase = async () => {
  //   try {
  //     const getRouts = await (await instance.get("/route/get")).data;
  //     setTripDatabase(getRouts);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useMemo(async () => {
    // getRoutDatabase();
  }, [tripDatabase]);
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
          <label htmlFor="">Зураг</label>
          <form action="/file" encType="multipart/from" method="post">
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={(e: React.FormEvent<HTMLFormElement>) => {
                const target = e.target as HTMLFormElement & {
                  files: FileList;
                };
                setTripInformation({
                  ...tripInformation,
                  image: target.files[0],
                });
              }}
            />
          </form>
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
                  <th>Зураг</th>
                  <th>Устгах</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {tripDatabase.map(
                  (tripInformation: tripInformations, index: number) => {
                    return (
                      <tr>
                        <th>{index + 1}</th>
                        <td>{tripInformation?.startStation}</td>
                        <td>{tripInformation?.endStation}</td>
                        <td>{tripInformation?.duration}</td>
                        <td>{tripInformation?.vehicle}</td>
                        <td>{tripInformation?.location}</td>
                        <td>{tripInformation?.information}</td>
                        <td>image</td>
                        <td>
                          <button
                            onClick={() => deleteRows(tripInformation?._id)}
                          >
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
