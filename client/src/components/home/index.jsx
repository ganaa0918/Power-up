import React from 'react'
import img1 from '../images/logo1.png'
import Navbars from '../navbar/Navbar'
import img2 from '../images/1.jpg'
import './styles.css'
function HeaderImg() {
  return (
   <div className='head-tex'>
   <Navbars />
   <div className='head-image'>
   <img src={img2} alt="Snow"  height={800} style={{width: "100%",backgroundSize:"cover"}}/>
   </div>
  
  <div class="text-center text-white mt-5 center__text">
  <img src={img1} alt="Logo" height="300px" />
  <h1 className='text-lg-white' style={{fontSize: "40px"}}>Fitness club</h1>
  </div>
  </div>
  )
}

export default HeaderImg