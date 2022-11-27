import React from 'react'
import Footer from '../components/footer/Footer'
import Navbars from '../components/navbar/Navbar'
import Blog1 from '../image/blog1.png'
import Blog2 from '../image/blog2.png'
import Blog3 from '../image/blog3.png'

function Blog() {
  return (
    <div className='blog'>
        <Navbars />
        <div className='container' style={{paddingTop:"100px"}}>
            <div class="grid grid-rows-3 grid-flow-col gap-4">
                <div class="row-span-3 ...">
                    <img src={Blog1} alt="blog1" />
                </div>
                <div class="col-span-2 ...">
                <img src={Blog2} alt="blog1" />
                </div>
                <div class="row-span-2 col-span-2 ...">
                    <img src={Blog3} alt="blog1" />
                </div>
            </div>
        </div>
        <footer style={{bottom: 0, right: 0 , left: 0 ,position:"absolute"}}>
        <Footer  />
        </footer>
       
    </div>
  )
}

export default Blog