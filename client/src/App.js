
import React from "react";
import './app.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./router/home";
import Login from "./router/Login";
import User from "./router/User";
import Register from "./router/Register";
import Read from "./components/blog/Readmore";
import Blog from "./router/Blog";
import Blog1 from "./components/blog/blog1";
import Blog2 from "./components/blog/blog2";
import Blog3 from "./components/blog/blog3";
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
        <Route path="/blog1" element={<Blog1 />}/>
        <Route path="/blog2" element={<Blog2 />}/>
        <Route path="/blog3" element={<Blog3 />}/>
        <Route path="/Readmore" element={<Read/>}/>
     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;