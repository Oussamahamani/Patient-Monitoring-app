import React, { useState, useEffect,useRef } from 'react';
import styles from './Home.module.css'; // Assuming you have some styles in Home.module.css
import HeartRateChart from './HeartRateChart.jsx';
import { Typography, CircularProgress, Alert } from '@mui/material';
import PatientCard from './PatientCard.jsx';
import axios from 'axios';

const Home = () => {
  const [patientData, setPatientData] = useState(null);
  const patientDataRef = useRef(patientData);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[loaded,setLoaded] = useState(null)
  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('http://localhost:5250/patient');
      data.times = data.times.reverse()
      
      // in case existing data exists, we use it only last element from new data
      if(patientDataRef.current){
        data.times = [...patientDataRef.current.times,data.times.at(-1)]
        data.times.shift()

        data.bpmValues = [...patientDataRef.current.bpmValues,data.bpmValues.at(-1)]
        data.bpmValues.shift()

      }
      setPatientData(data);
      setError(null);
      setLoaded(true)
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load patient data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(); // Initial fetch
  
    const interval = setInterval(() => {
      getData(); // Polling fetch
    }, 2000); // Poll every 5 seconds
  
    return () => clearInterval(interval); // Cleanup on unmount

  }, []);

  useEffect(() => {
    patientDataRef.current = patientData; // Keep ref updated with latest state
  }, [patientData]);
  return (
    <div>
      <Typography variant="h5" sx={{ p: 4 }}>
        Patient Dashboard
      </Typography>

      {(loading && !loaded) && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <CircularProgress />
          <Typography>Loading data...</Typography>
        </div>
      )}

      {error && (
        <Alert severity="error" sx={{ m: 2 }}>
          {error}
        </Alert>
      )}

      {loaded && (
        <div className={styles.homeContainer}>
          <HeartRateChart patientData={patientData}/>
          <PatientCard patientData={patientData} />
        </div>
      )}
    </div>
  );
};

export default Home;
