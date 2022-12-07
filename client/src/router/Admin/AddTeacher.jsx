import React from 'react'
import { useForm } from "react-hook-form";
import useToast from '../../hooks/useToast';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin'

function AddTeacher() {
    const { addToast } = useToast()
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => {
      addToast(
        {
            text: 'Амжилттай нэмэгдлээ',
            theme: "light",
            type: 'success',
        }
    )
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
                
                {...register('Fname',{ required: true })}
                />
                {errors.Fname && <p className='text-danger'>Та овог нэрээ оруулна уу.</p>}
                </div>

                <div className='mt-3 form-group'>
                <label>Багшийн нэр</label>
                <input 
                className="form-control" 
                type="text"  
                name='name'
                
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