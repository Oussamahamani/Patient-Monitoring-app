import React from 'react';
import NavBar from './NavBar.jsx'
import styles from './Home.module.css'; // Assuming you have some styles in Home.module.css
import HeartRateChart from './HeartRateChart.jsx';
const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <NavBar/>
            <HeartRateChart/>
        </div>
    );
}

export default Home;
