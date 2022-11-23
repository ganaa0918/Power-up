import React from 'react'
import HeaderImg from '../components/home'
import {Row, Col } from 'react-bootstrap'
import Gym from '../image/gym.jpg'
import Gym2 from '../image/girl1.jpg'
import { Link } from 'react-router-dom'
import './styles.css'

function Home() {
  return (
    <div className='home'>
      <div className='content'>
        <HeaderImg />
      </div>
    <div className='container-fluid' style={{backgroundColor: "#212121"}} >
      <Row>
        <Col>
          <img src={Gym} alt="Gym" width={"600px"} className="rounded mx-auto d-block mt-5"/>
        </Col>
        <Col className='text-white mt-5'>
          <h1 className='text-center'>STORY ABOUT US</h1>
          <p className='mt-3'>Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin, nascetur auci elit consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a amet.

              Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet.</p>

          <Link to={'/'} className=' btn btn-grad' >Read more</Link>
        </Col>
      </Row>
    </div>
    <div className='container-fluid'  style={{backgroundColor: "#212121"}}>
      <Row >
      <div class="column" style={{backgroundColor: "#aaa"}}>
    <img src={Gym2} alt="girl" width={"100%"} height={"300px"} />
  </div>
  <div class="column" style={{backgroundColor: "#bbb"}}>
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
  <div class="column" style={{backgroundColor: "#ccc"}}>
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>
      </Row>
    </div>
  </div>


  )
}

export default Home