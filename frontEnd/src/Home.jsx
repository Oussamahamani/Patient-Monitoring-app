import React from 'react';
import NavBar from './NavBar.jsx'
import styles from './Home.module.css'; // Assuming you have some styles in Home.module.css
const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <NavBar/>
        </div>
    );
}

export default Home;
