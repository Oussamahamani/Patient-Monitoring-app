import React from 'react';
import styles from './Home.module.css'; // Assuming you have some styles in Home.module.css
import HeartRateChart from './HeartRateChart.jsx';
import { Typography } from '@mui/material';
import PatientCars from './PatientCard.jsx';
const Home = () => {
    return (
        <div>
            
        <div className={styles.homeContainer}>
            <Typography variant="h5" >
                Patient DashBoard
            </Typography>
            <PatientCars/>
            <HeartRateChart/>
        </div>
        </div>
    );
}

export default Home;
