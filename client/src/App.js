
import React from "react";
import './app.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./router/home";
import Login from "./router/Login";
import User from "./router/User";
import Register from "./router/Register";
import Blog from "./router/Blog";
import Profile from "./router/User/Profile";
import { ToastContainer } from "react-toastify";
import Zahialga from "./router/User/Zahialga";
import Zhiih from "./router/User/Zhiih";
import Huwaari from "./router/User/Huwaari";

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
        <Route path="/profile" element={<Profile />}/>
        <Route path="/zahialga" element={<Zahialga />}/>
        <Route path="/zahialga/zahialga_hiih" element={<Zhiih />}/>
        <Route path="huwaari" element={<Huwaari />}/>
    </Routes>
    <ToastContainer />
    </BrowserRouter>
    </div>
  );
}

export default App;