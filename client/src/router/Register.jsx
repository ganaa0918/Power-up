import React from 'react'
import {  useState } from 'react';
import Navbars from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { useNavigate} from 'react-router-dom'
import './styles.css'
function Register() {
  const [ username , setUName ] = useState('');
  const [ Fname , setFName ] = useState('');
  const [ Phone , setPhone ] = useState('');
  const [ Email , setEmail ] = useState('');
  const [ repassword , setrePass ] = useState(0);
  const [password , setPass ] = useState(0);
  const navigate = useNavigate();
  const type = "Хэрэглэгч";
  const handleClick = () => { 
    
    fetch('http://localhost:3001/register' , 
    {
      method: 'post' ,
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ username, Fname ,Phone , password,repassword , type})
      
    }
    ).then(data => data.json()).then(data => {
        alert("amjilttai nemegdlee");
      
      if (data.success) { 
        alert("amjilttai nemegdlee");
        
      } 
     
    }).catch(error => { console.log(error);})

  };
  return (
    <div className='register'>
        <Navbars color='light'/> 
            <div className="d-flex justify-center align-items-lg-center" style={{paddingTop:"100px"}}>
                <form>
                    <h1>Бүртгүүлэх</h1>
                    <div className="form-group mt-3">
                     <label>Нэр</label>
                     <input className="form-control" type="text" placeholder="Та нэрээ оруулна уу"value = {username } onChange = {e => setUName(e.target.value)} />
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Овог</label>
                     <input className="form-control" type="text" placeholder="Та овог оруулна уу"  value = { Fname } onChange = {e => setFName(e.target.value)} />
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Гар утас</label>
                     <input className="form-control" type="text" placeholder="Утасны дугаару"value = { Phone } onChange = {e => setPhone(e.target.value)} />
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Email</label>
                     <input className="form-control" type="text" placeholder="Утасны дугаару"value = { Email } onChange = {e => setEmail(e.target.value)} />
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Password</label>
                     <input className="form-control" type="password" placeholder="Та password хийнэ үү"value = {password } onChange = {e => setPass(e.target.value)} autoComplete='on'/>
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Re-Password</label>
                     <input className="form-control" type="password" placeholder="Та password дахин хийнэ үү"value = { repassword } onChange = {e => setrePass(e.target.value)} autoComplete='on'/>
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
                        <button className='btn'  style={{backgroundColor: "#7A5CFA", color: "white"}} onClick = { handleClick}>Submit</button>
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