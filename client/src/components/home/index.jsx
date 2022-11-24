import React from 'react'
import Navbars from '../navbar/Navbar'
import img2 from '../images/backgroundimg.jpg'


function HeaderImg() {
  return (
   <div className='head-tex'>
   <Navbars />
   <div className='head-image'>
   <img src={img2} alt="Snow"  height={800} style={{width: "100%",backgroundSize:"cover"}}/>
   </div>
  </div>
  )
}

export default HeaderImg