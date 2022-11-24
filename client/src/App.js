
import React from "react";
import './app.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./router/home";
import Login from "./router/Login";


function App() {
  return (
    <div style={{height:"100vh"}} >
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;