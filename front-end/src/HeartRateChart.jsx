import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import styles from "./HeartRateChart.module.css"; // Assuming you have some styles in HeartRateChart.module.css
const HeartRateChart = ({patientData}) => {

  const times = patientData.times.map((time) => new Date(time));
  console.log(times)
  const bpmValues = patientData.bpmValues

  return (
    <div className={styles.chartContainer}>
      <LineChart
        yAxis={[
          { label: "Heart Rate (BPM)", scaleType: "linear", min: 40, max: 100 },
        ]}
        xAxis={[{ data: times, scaleType: "time", label: "Time" }]}
        series={[
          { data: bpmValues, label: "Heart Rate Monitor", showMark: false },
        ]}
        height={400}

      />
    </div>
  );
};

export default HeartRateChart;
