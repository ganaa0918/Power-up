import React from 'react'
import { useForm } from "react-hook-form";
import useToast from '../../hooks/useToast';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin'
import { useState } from 'react';

function AddTeacher() {
    const [fname , setFName]  = useState('');
    const [username , setUName]  = useState('f');
    const [utas , setUtas]  = useState('f');
    const [tsahim , setUHayg]  = useState('f');
    const type = "Багш";
    const { addToast } = useToast()
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => {
      
      fetch('http://localhost:3001/register' , 
      {
        method: 'post' ,
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ username, fname  , type})
        
      }
      ).then(data => data.json()).then(data => {
         
        
        if (data.success) { 
          addToast(
            {
                text: 'Амжилттай нэмэгдлээ',
                theme: "light",
                type: 'success',
            }
        )
          
        } 
       
      }).catch(error => { console.log(error);})
     
    console.log(data);
    };
  return (
    <div>
    <div className='flex'>
       <SidebarAdmin />
           <div className='container d-flex justify-center'style={{paddingTop:"100px",}} >
           <form className='w-96 ms-5 ' method='POST'>
            <h2 className='d-flex justify-center mb-3'>Багш бүртгэх</h2>

                <div className='mt-3 form-group'>
                <label>Багшийн овог</label>
                <input 
                className="form-control" 
                type="text"  
                name='Fname'
                value = {fname}
                onChange = {e => setFName(e.target.value)} 
              
                />
                {errors.Fname && <p className='text-danger'>Та овог нэрээ оруулна уу.</p>}
                </div>

                <div className='mt-3 form-group'>
                <label>Багшийн нэр</label>
                <input 
                className="form-control" 
                type="text"  
                name='name'
               
                value={username}
                onChange = {e => setUtas(e.target.value)}
                {...register('name',{ required: true })}
                />
                {errors.name && <p className='text-danger'>Та нэр оруулна уу.</p>}
                </div>
                
                <div className='mt-3 form-group'>
                <label>Багшийн утас</label>
                <input 
                className="form-control" 
                type="text"  
                name='name'
                value={utas}
                onChange = {e => setUName(e.target.value)} 
                {...register('name',{ required: true })}
                />
                {errors.name && <p className='text-danger'>Та утас дугаар оруулна уу.</p>}
                </div>

                <div className='mt-3 form-group'>
                <label>Багшийн цахим хаяг</label>
                <input 
                className="form-control" 
                type="email"  
                name='name'
                value={tsahim}
                onChange = {e => setUHayg(e.target.value)} 
                {...register('name',{ required: true })}
                />
                {errors.name && <p className='text-danger'>Та  цахим хаяг оруулна уу.</p>}
                </div>

                <div className='d-flex justify-center mt-3'>
                   <button 
                   className='btn border-dark'  
                   type="submit" 
                   onClick={handleSubmit(onSubmit)}  
                   style={{backgroundColor: "#FFF", color: "black"}} >Нэмэх</button>
                </div>
           </form>
           </div>
   </div>
</div>
  )
}

export default AddTeacher