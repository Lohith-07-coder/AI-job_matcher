// Chart
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

export default function SkillGapChart({ matched, missing }) {
  return (
    <Bar
      data={{
        labels: ["Matched", "Missing"],
        datasets: [{
          data: [matched, missing],
          backgroundColor: ["#4CAF50", "#FF5252"]
        }]
      }}
    />
  );
}
