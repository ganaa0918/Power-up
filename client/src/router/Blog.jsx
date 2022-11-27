import React from 'react'
import Footer from '../components/footer/Footer'
import Navbars from '../components/navbar/Navbar'
import Blog1 from '../image/blog1.png'
import Blog2 from '../image/blog2.png'
import Blog3 from '../image/blog3.png'
import {Link} from 'react-router-dom'
function Blog() {
  return (
    <div className='blog'>
        <Navbars />
        <div className='container' style={{paddingTop:"100px"}}>
            <div class="grid grid-rows-3 grid-flow-col gap-4 sm:grid-cols-1">
                <div className="row-span-3">
                    <div className='relative '>
                    <img src={Blog1} alt="blog1" />
                    <div className='absolute bottom-20 left-20 text-white'>
                        <Link to={'#'}  className="no-underline text-white">Яагаад Иогоор хичээллэх хэрэгтэй вэ</Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 ...">
                    <div className='relative'>
                    <img src={Blog2} alt="blog1" />
                    <div className='absolute bottom-10 left-10 text-white'>
                         <Link to={'#'} className="no-underline text-white">Өглөөний цайнаас өмнө хүүхэд болгонд өгөх хэрэгтэй 4 зүйлс </Link>
                    </div>
                    </div>
                </div>
                <div className="row-span-2 col-span-2 ...">
                    <div className='relative'>
                    <img src={Blog3} alt="blog1" />
                    <div className='absolute bottom-10 left-10'>
                        <Link to={'#'} className="no-underline text-white">ХӨДӨЛГӨӨН <br/> 50 гарсан ч фит биетэй болж болно: Эрчүүдэд өгөх 5 зөвлөмж</Link>
                    </div>
                </div>
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