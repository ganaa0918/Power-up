import React from 'react'
import Loginimg from '../image/login.png'
import Loginim2 from '../image/logo1.png'
import {Link} from 'react-router-dom'
import './styles.css'


function Login() {
  return (
    <section className='flex flex-col md:flex-row h-screen  items-center'>
      <div className=' relative flex bg-blue-800 hidden h-screen md:w-1/2 xl:w-2/3 h-screen lg:block'>
        <img src={Loginimg} className="w-full h-full object-cover" alt="logimimg" />
        <div className='absolute k'>
        <img src={Loginim2} alt="loginimg2" className=''/>
        <h1 className='text-center text-white text-6xl'>Power UP</h1>
      </div>
      </div>
      
      <div className='bg-white items-center justify-center flex md:mx-auto md:mx-0 w-full md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12'>
        <div className='w-full h-100'>
          <h1 className='text-3x1 font-bold text-center uppercase'>Нэвтрэх</h1> 
          <form className='mt-6' action="#" method='POST'>
            <div>
                <label htmlFor="username" className='text-gray-800 block '> Username</label>
                <input type="text" placeholder='Username'className='w-full  text-black focus:bg-white-700 focus:outline-black bg-white-700 mt-2 border rounded-lg ' autoComplete autofocus required />
            </div>
            <div className='mt-4'>
                <label htmlFor="password">Password</label>
                <input type="password" minLength={8} placeholder='password' name='' className='w-full text-black focus:bg-white-700 foucs:outline-black bg-white-700 mt-2 border rounded-lg' required/>
            </div>
            <div className='text-right mt-2'>
            <Link to={'#'} className=' text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700 focus:outline-none'>Forget Password</Link>
            </div>
            <div className='mt-4 w-full d-flex justify-between'>
              <Link to={'/'} className="btn btn-dark">Буцах</Link>
              <button type='submit' className='btn btn-dark'> Нэвтрэх</button>
            </div>
            
          </form>
        </div>
      </div>

    </section>
  )
}

export default Login