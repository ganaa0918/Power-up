
import React from "react";
import './app.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./router/home";
import Navbars from "./components/navbar/Navbar";


function App() {
  return (
    <div className="main">
     
      <BrowserRouter>
      <Navbars />
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;