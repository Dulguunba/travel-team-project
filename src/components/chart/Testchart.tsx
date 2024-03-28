import React, { useState } from "react";
import { Barchart } from "./Barchart";
import { UserData } from "./Userdata";

export const Testchart = () => {
  const [userData, setUserData] = useState({
    label: UserData.map((data) => data.year),
    datasets: [
      {
        label: "users Gained",
        dataset: UserData.map((data) => data.userGain),
      },
    ],
  });
  return (
    <div>
      <Barchart user={userData} />
    </div>
  );
};
