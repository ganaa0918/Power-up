import React from 'react'
import {ImLocation2} from 'react-icons/im'
import {FiPhoneCall} from 'react-icons/fi'
import {MdLocalPostOffice} from 'react-icons/md'
import  './styles.css'

const Footer = () => {
  return (
    <footer className="text-center text-white sticky-bottom img" style={{backgroundColor: "#212121"}}>
    <div className="container-fluid">
    <section className="mt-2">
        <div className="d-flex justify-content-start align-items-center">
            <ImLocation2 />
          <span className="me-3 ms-2"> IKH Khuree Street nd Floor KH Mongol CenterUlaanbaatar,</span>
        </div>
        <div className="d-flex justify-content-start align-items-center">
        <FiPhoneCall />
          <span className="me-3 ms-2"> 99888899, 88999988</span>
        </div>
        <div className="d-flex justify-content-start align-items-center">
        <MdLocalPostOffice />
          <span className="me-3 ms-2"> fitness88@gmail.com</span>
        </div>
      </section>
    </div> 
  </footer>
  )
}

export default Footer