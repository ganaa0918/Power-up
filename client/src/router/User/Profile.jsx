import {React, useState} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { FiEye } from 'react-icons/fi';
import { useForm } from "react-hook-form";
// import { FiEyeOff } from 'react-icons/fi';

function Profile() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

 
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
                     <input className="form-control" type="number" placeholder="Утасны дугаару"/>
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Password</label>
                     <input className="form-control" type="" placeholder="Утасны дугаару"/>
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Password</label>
                        <input
                        className="form-control"
                          placeholder="Password"
                          name="password"
                          type={passwordShown ? "text" : "password"}
                          {...register('This is required.',{ required: true })}
                          
                          // {
                          //  ...register({ required: "This is required." })
                          // }
                        />
                        <div>
                          <FiEye onClick={togglePasswordVisiblity} />
                        </div>
                        
                    </div>
                     <div className='mt-3 form-group'>
                     <label>email</label>
                     <input className="form-control" type="email" placeholder="Email оруулна уу"/>
                     </div>
                     <div className='d-flex justify-center mt-3'>
                        <button className='btn'  type="submit" onClick={handleSubmit(onSubmit)}  style={{backgroundColor: "#7A5CFA", color: "white"}}>Засах</button>
                     </div>
                </form>
                </div>
                
        </div>
        
    </div>
  )
}

export default Profile