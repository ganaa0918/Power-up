import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import {toast} from 'react-toastify'

const notif = () => [
    toast.success('ss')
]

function Profile() {
  return (
    <div>
         <div className='flex'>
            <Sidebar />
                <div className='container'style={{paddingTop:"100px",}} >
                <form className='w-96 ms-5 '>
                    <div className="form-group mt-3">
                     <label>Нэр</label>
                     <input className="form-control" type="text" placeholder="Та нэрээ оруулна уу"/>
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Овог</label>
                     <input className="form-control" type="text" placeholder="Та овог оруулна уу"/>
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Регистр</label>
                     <input className="form-control" type="text" placeholder="Username"/>
                     </div> 
                     <div className='mt-3 form-group'>
                     <label>Гар утас</label>
                     <input className="form-control" type="text" placeholder="Утасны дугаару"/>
                     </div>
                     <div className='d-flex justify-center mt-3'>
                        <button className='btn' type='submit' style={{backgroundColor: "#7A5CFA", color: "white"}} onClick={notif}>Засах</button>
                     </div>
                </form>
                </div>
                
        </div>
        
    </div>
  )
}

export default Profile