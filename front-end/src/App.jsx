import { useState } from "react";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Home />

      <footer className="footer">
        <br/>
        <a
          href="https://github.com/Oussamahamani/Patient-Monitoring-app"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          View on GitHub 
        </a>
        
      </footer>
    </div>
  );
}

export default App;
