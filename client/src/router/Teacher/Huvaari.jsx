import React from 'react'
import { Link } from 'react-router-dom'
import SidebarTeacher from '../../components/sidebar/SidebarTeacher'

function Huvaari() {
  return (
    <div>
        <SidebarTeacher />
        <div className='container' style={{paddingTop:"100px"}}>
        <Link to={'/techaerhuvaari/huvaarinemeh'} className='btn' style={{backgroundColor: "#7A5CFA", color: "white"}}>Хуваарь нэмэх</Link>
        </div>
    </div>
  )
}

export default Huvaari