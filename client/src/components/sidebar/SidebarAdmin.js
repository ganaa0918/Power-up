import React from 'react'
import Images from '../images/logo1.png'
import { NavLink } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';

function SidebarAdmin() {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <CDBSidebar textColor="#fff" backgroundColor="#2C2C2C">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large flex"></i>}>
      <span className="d-inline">PowerUP
        <span className="d-inline btn float-right">
            <img src={Images} alt="ss"></img>
        </span>
       </span>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink  to="/admin/teacher_info" className="bg">
            <CDBSidebarMenuItem >Багш нарын мэдээлэл</CDBSidebarMenuItem>
          </NavLink> 
          <NavLink  to="admin/user_info" className="bg">
            <CDBSidebarMenuItem >Хэрэглэгч нарын мэдээлэл</CDBSidebarMenuItem>
          </NavLink>
          <NavLink  to="admin/zahialga_info" className="bg">
            <CDBSidebarMenuItem >Захиалгуудын мэдээлэл</CDBSidebarMenuItem>
          </NavLink> 
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter >
        <div
            style={{
              padding: '20px 5px',
            }}
        
          >
            <NavLink  to="/" className="bg">
            <CDBSidebarMenuItem icon="arrow-left" className="text-white">Exit</CDBSidebarMenuItem>
          </NavLink>
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  </div>
  )
}

export default SidebarAdmin