import { useState } from "react";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Home />
    </div>
  );
}

export default App;
