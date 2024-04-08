import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

type Userdata = {
  id: Number;
  year: Date;
  userGain: Number;
  userLost: Number;
};

export const Barchart = () => {
  return (
    <Bar
      data={{
        labels: ["A", "B", "c"],
        datasets: [
          {
            label: "revese",
            data: [200, 300, 400],
          },
          {
            label: "revese",
            data: [200, 300, 400],
          },
        ],
      }}
      options={}
    />
  );
};
