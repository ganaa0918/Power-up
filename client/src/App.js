
import React from "react";
import Navbar from "./components/navbar/Navbar";
import './app.css'
import HeaderImg from "./components/home";


function App() {
  return (
    <div>
      <div className="header">
      <Navbar  />  
      <HeaderImg />
      </div>
    </div>
  );
}

export default App;