import {React, useState , useContext } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { FiEye } from 'react-icons/fi';
import { UserContext} from "../userContext";
import { useForm } from "react-hook-form"
import useToast from '../../hooks/useToast';


function Profile() {
  const { addToast } = useToast()
  const [passwordShown, setPasswordShown] = useState(false);
  const [pass , setPass ] = useState();
  const {user , setUser} = useContext(UserContext);
  const [hi ,setUser1 ] = useState('');
  const [hi1 , setUser2] = useState('');
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const { register, handleSubmit, formState: { errors }, } = useForm();
  
  const onSubmit = data => {
    alert( hi1);
    fetch('http://localhost:3001/profile' , 
    {
      method: 'post' ,
      headers: { 'Content-Type': 'application/json'},
 
      
    }
    ).then(data => data.json()).then(data => {
       
      
      if (data.success) { 
        addToast(
          {
              text: 'Амжилттай хадгалагдлаа',
              theme: "light",
              type: 'warning',
          }
      )
        
      } 
     
    }).catch(error => { console.log(error);});
 
  };
  
  return (
    
    <div>
   
         <div className='flex'>
            <Sidebar />
                <div className='container'style={{paddingTop:"100px",}} >
                <form className='w-96 ms-5 ' method='POST'>
                    <div className="form-group mt-3">
                     <label>Нэр</label>
                     <input
                      className="form-control" 
                      type="text" 
                      placeholder="Та нэрээ оруулна уу" 
                      value = {hi} 
                      
                      {...register('Fname',{  onChange :(e) => setUser1(e.target.value) })}
                     
                      /> {errors.Fname && <p className='text-danger'>Нэр оруулна уу</p>}
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Овог</label>
                     <input  
                       value = {hi1} 
                        
                     className="form-control" 
                     type="text" 
                     name='lname'
                     placeholder="Та овог оруулна уу" 
                     
                     {...register('lname',{  onChange : (e) => setUser2(e.target.value)})}
                     />
                     {errors.lname && <p className='text-danger'>Овог нэр зөв оруулна уу.</p>}
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Регистр</label>
                     <input 
                        className="form-control"
                        type="text" 
                        placeholder="Username"
                        {...register('register.',{ required: true })}
                     />
                     {errors.register && <p className='text-danger'>Регистр зөв оруулна уу</p>}
                     </div> 
                     <div className='mt-3 form-group'>
                     <label>Гар утас дугаар</label>
                     <input 
                        className="form-control" 
                        type="number" 
                        placeholder="Утасны дугаар" 
                        {...register('number.',{ required: true })} 
                        required/>
                     {errors.number && <p className='text-danger'>Дугаар зөв оруулна уу</p>}
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Password</label>
                        <input
                          className="form-control"
                          placeholder="password"
                          name="password"
                          type={passwordShown ? "text" : "password"}
                          {...register('password',{ required: true })}
                        />
                       {errors.password && <p className='text-danger'>Password зөв оруулна уу</p>}
                        
                        <div>
                          <FiEye onClick={togglePasswordVisiblity} />
                        </div>
                        
                    </div>
                     <div className='mt-3 form-group'>
                     <label>email</label>
                     <input 
                        className="form-control" 
                        type="email" 
                        placeholder="Email оруулна уу" 
                        {...register('email',{ required: true })}
                     /> 
                     {errors.email && <p className='text-danger'> email зөв оруулна уу</p>}
                     </div>
                     <div className='d-flex justify-center mt-3'>
                        <button 
                        className='btn'  
                        type="submit" 
                        onClick={handleSubmit(onSubmit)  }  
                        
                        style={{backgroundColor: "#7A5CFA", color: "white"}}>Засах</button>
                     </div>
                </form>
                </div>
        </div>
    </div>
  )
}

export default Profile