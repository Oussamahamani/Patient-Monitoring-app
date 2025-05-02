import React from 'react';
import styles from './Home.module.css'; // Assuming you have some styles in Home.module.css
import HeartRateChart from './HeartRateChart.jsx';
import { Typography } from '@mui/material';
import PatientCard from './PatientCard.jsx';
const Home = () => {
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
