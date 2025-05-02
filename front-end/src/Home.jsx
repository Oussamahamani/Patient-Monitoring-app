import React, { useState, useEffect } from 'react';
import styles from './Home.module.css'; // Assuming you have some styles in Home.module.css
import HeartRateChart from './HeartRateChart.jsx';
import { Typography, CircularProgress, Alert } from '@mui/material';
import PatientCard from './PatientCard.jsx';
import axios from 'axios';

const Home = () => {
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('http://localhost:5250/patient');
      console.log(data)
      setPatientData(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load patient data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Typography variant="h5" sx={{ p: 4 }}>
        Patient Dashboard
      </Typography>

      {loading && (
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

      {!loading && !error && (
        <div className={styles.homeContainer}>
          <HeartRateChart patientData={patientData}/>
          <PatientCard patientData={patientData} />
        </div>
      )}
    </div>
  );
};

export default Home;
