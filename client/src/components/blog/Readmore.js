import React from 'react'
import Navbars from '../navbar/Navbar'
import Footer from '../footer/Footer'
import gym1 from '../images/gym1.jpg'

function Read() {
    return (
        <div>
            <Navbars color='light' />
        
        <div className='flex flex-col h-screen' style={{ paddingTop: "130px" }}>
             
            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-6 " style={{ backgroundColor: "#212121" }} >
                <div className="mt-5">
                    <img src={gym1} alt="" width={"1000px"} className="rounded mx-auto d-block mt-2" />
                </div>
                <div className="mt-5">
                    <h1 className='text-center text-white'>STORY ABOUT US</h1>
                    <p className='mt-3 sm:text-center text-white'>Power-UP Gym 1965 онд АНУ-ын Калифорниа мужид нээгдэж, дэлхий даяар тархан түгсээр өдгөө 715 дахь салбар нь Монгол Улсад албан ёсоор нээгдэж байна. Бидний эрхэм зорилго болон алсын хараа нь “Хүн бүрт хамгийн төгс төгөлдөр фитнес соёлыг мэдрүүлж, түүгээр дамжуулан эрүүл чийрэг, эрч хүч, хүсэл эрмэлзлээр дүүрэн аж төрөхөд туслах бодит боломжийг бий болгоход оршино”.

                    Power-UP Gym бяртай, хүчтэй, сэтгэл хөөрөл оргилсон тэнцвэрт байдлын зохицол бүхий сэтгэл санааны хувьд “Ариусах газар” хэмээн алдаршиж, олонд танигдан дэлхийн хамгийн том сүлжээ фитнес клуб болж чадсан юм.

Бүх бүтээн байгуулалт нь зочломтгой найрсаг, ая тухтай, үүрэг хариуцлагаа ухамсарлаж хүн бүрт эрүүл, зөв амьдралын хэвшлийг олгохоор амлаж, туршлага дүүрэн баг хамт олон байх нь бидний үүрэг юм.</p>
                </div>

            </div>
            
            <div className='' style={{ backgroundColor: "#212121" }}  >
                <Footer />
            </div>


        </div>
        </div>
    )
}

export default Read