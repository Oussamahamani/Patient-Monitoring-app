import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import styles from "./HeartRateChart.module.css"; 
import dayjs from "dayjs";

const HeartRateChart = ({patientData}) => {

  const times = patientData.times.map((time) => new Date(time))
  const bpmValues = patientData.bpmValues

  const bpm = Math.floor(bpmValues.reduce((a, b) => a + b) / bpmValues.length);

  return (
    <div className={styles.chartContainer}>
        <div className={styles.bpm}>
        {bpm} BPM
      </div>
      

<LineChart
  yAxis={[
    { label: "Heart Rate (BPM)", scaleType: "linear", min: 40, max: 100 },
  ]}
  xAxis={[
    { 
      data: times, 
      scaleType: "time", 
      label: "Time",
      valueFormatter: (value) => dayjs(value).format("H:mm:ss")
    }
  ]}
  series={[
    { data: bpmValues, label: "Heart Rate Monitor", showMark: false },
  ]}
  height={400}
/>


<div className={styles.lastUpdated}>
        Live Heart Rate Monitoring - Last Updated: {new Date().toLocaleTimeString()}
      </div>

    </div>
  );
};

export default HeartRateChart;
