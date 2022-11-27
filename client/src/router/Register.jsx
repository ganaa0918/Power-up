import React from 'react'
import Navbars from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import './styles.css'
function Register() {
  return (
    <div className='register'>
        <Navbars color='light'/> 
            <div className="d-flex justify-center align-items-lg-center" style={{paddingTop:"100px"}}>
                <form>
                    <h1>Бүртгүүлэх</h1>
                    <div className="form-group mt-3">
                     <label>Нэр</label>
                     <input className="form-control" type="text" placeholder="Та нэрээ оруулна уу"/>
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Овог</label>
                     <input className="form-control" type="text" placeholder="Та овог оруулна уу"/>
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Гар утас</label>
                     <input className="form-control" type="text" placeholder="Утасны дугаару"/>
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Password</label>
                     <input className="form-control" type="password" placeholder="Та password хийнэ үү"/>
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Re-Password</label>
                     <input className="form-control" type="password" placeholder="Та password дахин хийнэ үү"/>
                     </div>
                     <div className='mt-3 form-group'>
                     <input type="radio" className="Purple" name="colors" value="Yellow"></input>
                     <label className='radio ms-2'> Эр </label>
                     </div>
                     <div className='mt-3 form-group'>
                     <input type="radio" className="Purple" name="colors" value="Yellow"></input>
                     <label className='radio ms-2'> Эм </label>
                     </div>
                     <div className='mt-3 form-group'>
                     <input type="checkbox" className="Purple" name="colors" value="Yellow"></input>
                     <label className='radio ms-2'> Remember me </label>
                     </div>
                     <div className='d-flex justify-between mt-3'>
                        <button className='btn' style={{backgroundColor: "#7A5CFA", color: "white"}}>Cancel</button>
                        <button className='btn' type='submit' style={{backgroundColor: "#7A5CFA", color: "white"}}>Submit</button>
                     </div>
                </form>
            </div>
            <footer style={{bottom: 0, right: 0 , left: 0 ,position:"absolute"}}>
                <Footer />
            </footer>
    </div>
    
  )
}

export default Register