
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
import Profile from "./router/User/Profile";
import { ToastContainer } from "react-toastify";
import Zahialga from "./router/User/Zahialga";
import Zhiih from "./router/User/Zhiih";
import Huwaari from "./router/User/Huwaari";
import Huvaari from "./router/Teacher/Huvaari";
import AddSchedule from "./router/Teacher/AddSchedule";
import Teacher from "./router/Teacher";
import Admin from "./router/Admin";
import TeacherInfo from "./router/Admin/TeacherInfo";
import UserInfo from "./router/Admin/UserInfo";
import ZahialgaInfo from "./router/Admin/ZahialgaInfo";
import AddTeacher from "./router/Admin/AddTeacher";
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
        <Route path="/profile" element={<Profile />}/>
        <Route path="/zahialga" element={<Zahialga />}/>
        <Route path="/zahialga/zahialga_hiih" element={<Zhiih />}/>
        <Route path="huwaari" element={<Huwaari />}/>
        <Route path="/teacher/teacherhuvaari" element={<Huvaari />}/>
        <Route path="/teacher/teacherhuvaari/huvaarinemeh" element={<AddSchedule />}/>
        <Route path="/teacher" element={<Teacher />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/admin/teacher_info" element={<TeacherInfo />}/>
        <Route path="/admin/user_info" element={<UserInfo />}/>
        <Route path="/admin/zahialga_info" element={<ZahialgaInfo />}/>
        <Route path="/teacher_info/burtgeh" element={<AddTeacher />}/>
        <Route path="/admin/teacher_info/add" element={<AddTeacher />}/>
    </Routes>
    <ToastContainer />
    </BrowserRouter>
    </div>
  );
}

export default App;