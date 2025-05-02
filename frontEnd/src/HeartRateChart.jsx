import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const HeartRateChart = () => {
  const times = [
    "2025-05-01T23:32:00",
    "2025-05-01T23:33:00",
    "2025-05-01T23:34:00",
    "2025-05-01T23:35:00",
    "2025-05-01T23:36:00",
    "2025-05-01T23:37:00",
    "2025-05-01T23:38:00",
    "2025-05-01T23:39:00",
    "2025-05-01T23:40:00",
    "2025-05-01T23:41:00",
    "2025-05-01T23:42:00",
    "2025-05-01T23:43:00",
    "2025-05-01T23:44:00",
    "2025-05-01T23:45:00",
    "2025-05-01T23:46:00",
    "2025-05-01T23:47:00",
    "2025-05-01T23:48:00",
    "2025-05-01T23:49:00",
    "2025-05-01T23:50:00",
    "2025-05-01T23:51:00",
  ].map((time) => new Date(time));

  const bpmValues = [
    72, 74, 73, 75, 72, 70, 71, 73, 74, 76, 75, 77, 74, 72, 71, 73, 74, 72, 70,
    71,
  ];

  return (
    <div>
      <LineChart
        yAxis={[
          { label: "Heart Rate (BPM)", scaleType: "linear", min: 40, max: 100 },
        ]}
        xAxis={[{ data: times, scaleType: "time", label: "Time" }]}
        series={[
          { data: bpmValues, label: "Heart Rate Monitor", showMark: false },
        ]}
        height={300}
      />
    </div>
  );
};

export default HeartRateChart;
