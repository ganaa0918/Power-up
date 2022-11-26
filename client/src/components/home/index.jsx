import React from 'react'
import Navbars from '../navbar/Navbar'
import img2 from '../images/backgroundimg.jpg'


function HeaderImg() {
  return (
   <div className='head-tex'>
   <Navbars color="dark" />
   <div className='head-image'>
   <img src={img2} alt="Snow" className='w-max h-auto'/>
   </div>
  </div>
  )
}

export default HeaderImg