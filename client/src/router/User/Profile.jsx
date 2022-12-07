import {React, useState , useContext , useEffect} from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { FiEye } from 'react-icons/fi';
import { UserContext} from "../userContext";
import { useForm } from "react-hook-form"

// import { FiEyeOff } from 'react-icons/fi';

function Profile() {
  const {user} = useContext(UserContext);
  const [passwordShown, setPasswordShown] = useState(false);
  const [ Uname , setUName ] = useState('');
  const [pass , setPass ] = useState();
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const { register, handleSubmit, formState: { errors }, } = useForm();
  useEffect(() => { 
    fetch('http://localhost:3000/profile/' ).then(data => data.json()).then(data =>{
      alert(data);
    }).catch(error => { console.log("error:" , error)})
  });
  const onSubmit = data => {
    fetch('http://localhost:3001/profile' , 
    {
      method: 'post' ,
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({   })
      
    }
    ).then(data => data.json()).then(data => {
        alert("amjilttai nemegdlee");
      
      if (data.success) { 
        alert("amjilttai nemegdlee");
        
      } 
     
    }).catch(error => { console.log(error);})
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
                      value = {Uname}  onChange = {e => setUName(e.target.value)}
                      {...register('Fname',{ required: true })}
                     
                      /> {errors.Fname && <p>Нэр оруулна уу</p>}
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Овог</label>
                     <input  
                       value = {Uname}  onChange = {e => setUName(e.target.value)}
                     className="form-control" 
                     type="text" 
                     name='lname'
                     placeholder="Та овог оруулна уу" 
                     {...register('lname',{ required: true })}
                     />
                     {errors.lname && <p>Овог нэр оруулна уу.</p>}
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Регистр</label>
                     <input 
                        className="form-control"
                        type="text" 
                        placeholder="Username"
                        {...register('register.',{ required: true })}
                     />
                     {errors.register && <p>Регистр оруулна уу</p>}
                     </div> 
                     <div className='mt-3 form-group'>
                     <label>Гар утас дугаар</label>
                     <input 
                        className="form-control" 
                        type="number" 
                        placeholder="Утасны дугаар" 
                        {...register('number.',{ required: true })} 
                        required/>
                     {errors.number && <p>Дугаар оруулна уу</p>}
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
                       {errors.password && <p>Password оруулна уу</p>}
                        
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
                     {errors.email && <p> email оруулна уу</p>}
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