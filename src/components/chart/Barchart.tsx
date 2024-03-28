import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

type Userdata = {
  label: number[];
  datasets: { label: string; dataset: number[] }[];
};

export const Barchart = (user: Userdata) => {
  return <Bar data={user} />;
};
