import React from 'react'
import img1 from '../images/logo1.png'
function HeaderImg() {
  return (
        <div class="text-center text-white mt-5">
        <img src={img1} height="300px"/>
        <h1 class=" text-lg-white " style={{fontSize:"40px"}}>FITNESS CLUB</h1>
     </div>
  )
}

export default HeaderImg