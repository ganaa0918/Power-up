import React from 'react'
import SidebarTeacher from '../../components/sidebar/SidebarTeacher'

function AddSchedule() {
  return (
    <div>
        <div className="flex">
        <SidebarTeacher />
        
            <div className='container'style={{paddingTop:"100px",}} >
                <div className='d-flex justify-center'>
                        <h1>Багш хувиарь нэмэх</h1>
                </div>

                <div class="flex justify-center mt-1">
                    <button  className='btn' style={{backgroundColor: "#7A5CFA", color: "white"}}>Захиалга хийх</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddSchedule