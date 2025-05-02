import React,{useState,useEffect} from 'react';
import styles from './Home.module.css'; // Assuming you have some styles in Home.module.css
import HeartRateChart from './HeartRateChart.jsx';
import { Typography } from '@mui/material';
import PatientCard from './PatientCard.jsx';
import axios from "axios"

const Home = () => {
 const [patientData,setPatientData]= useState(null)
  const getData= async()=>{
    try {
      let {data} = await axios.get("http://localhost:5250/patient")
      console.log('da',data)
      setPatientData(data)
    } catch (error) {
      console.log("error",error)
    }
  }
  useEffect(()=>{
    getData()
  },[])
    return (
        <div>

            <Typography variant="h5"sx={{p:4}} >
                Patient DashBoard
            </Typography>
        <div className={styles.homeContainer}>
            <HeartRateChart/>
            <PatientCard/>
        </div>
        </div>
    );
}

export default Home;
