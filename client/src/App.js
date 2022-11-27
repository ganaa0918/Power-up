
import React from "react";
import './app.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./router/home";
import Login from "./router/Login";
import User from "./router/User";
import Register from "./router/Register";
import Blog from "./router/Blog";

function App() {
  return (
    <div style={{height:"100vh"}} >
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/User" element={<User />}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;