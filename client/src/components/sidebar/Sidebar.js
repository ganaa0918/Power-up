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

function Sidebar() {
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
          <NavLink  to="/User/profile" className="bg">
            <CDBSidebarMenuItem icon="home">Миний профайл</CDBSidebarMenuItem>
          </NavLink>
          <NavLink  to="/User/zahialga" className="bg">
            <CDBSidebarMenuItem icon="table">Захиалгын жагсаалт</CDBSidebarMenuItem>
          </NavLink>
          <NavLink  to="/User/huwaari" className="bg">
            <CDBSidebarMenuItem icon="clock">Хувиар харах</CDBSidebarMenuItem>
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

export default Sidebar
