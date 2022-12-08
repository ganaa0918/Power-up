import React from 'react'
import HeaderImg from '../components/home'
import Gym from '../image/gym.jpg'
import Gym2 from '../image/girl1.jpg'
import { Link } from 'react-router-dom'
import './styles.css'
import Footer from '../components/footer/Footer'

function Home() {
  return (
    <div className='flex flex-col h-screen'>
      <div className='content'>
        <HeaderImg />
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-6 " style={{backgroundColor: "#212121"}} >
      <div className="mt-5">
        <img src={Gym} alt=""  width={"800px"} className="rounded mx-auto d-block mt-2" />
      </div>
      <div className="mt-5">
      <h1 className='text-center text-white'>STORY ABOUT US</h1>
      <p className='mt-3 sm:text-center text-white'>Power-UP Gym 1965 онд АНУ-ын Калифорниа мужид нээгдэж, дэлхий даяар тархан түгсээр өдгөө 715 дахь салбар нь Монгол Улсад албан ёсоор нээгдэж байна. Бидний эрхэм зорилго болон алсын хараа нь “Хүн бүрт хамгийн төгс төгөлдөр фитнес соёлыг мэдрүүлж, түүгээр дамжуулан эрүүл чийрэг, эрч хүч, хүсэл эрмэлзлээр дүүрэн аж төрөхөд туслах бодит боломжийг бий болгоход оршино”.

Power-UP Gym бяртай, хүчтэй, сэтгэл хөөрөл оргилсон тэнцвэрт байдлын зохицол...</p>
      <Link to={'/Readmore'} className=' btn btn-grad ms-5' >Read more</Link>
      </div>
      
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-0 " style={{backgroundColor: "#212121"}} >
      <div className="mt-5">
        <img src={Gym2} alt="" />
      </div>
      <div className="bg-gray-400 mt-5"></div>
      <div className='bg-gray-500 mt-5'></div>
    </div>
    <div className='' style={{backgroundColor: "#212121"}}  >
    <Footer />
    </div>
    

  </div>


  )
}

export default Home