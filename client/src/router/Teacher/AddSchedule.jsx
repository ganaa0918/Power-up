import SidebarTeacher from '../../components/sidebar/SidebarTeacher'
import {React, useState} from 'react'
import { useForm } from "react-hook-form";
import useToast from '../../hooks/useToast';

function AddSchedule() {
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
  };
  return (
    <div>
         <div className='flex'>
            <SidebarTeacher />
                <div className='container'style={{paddingTop:"100px",}} >
                <form className='w-96 ms-5 ' method='POST'>
                    <div className="form-group mt-3">
                     <label>Долоо хоног</label>
                     <input
                      className="form-control" 
                      type="text" 
                      placeholder="Та өдрөө оруулна уу" 
                      {...register('week',{ required: true })}
                     
                      /> {errors.week && <p className='text-danger'>Та өдрөө зөв оруулна уу</p>}
                     </div>
                     <div className='mt-3 form-group'>
                     <label>Цаг</label>
                     <input 
                     className="form-control" 
                     type="text" 
                     name='time'
                     placeholder="Та цагаа оруулна уу" 
                     {...register('time',{ required: true })}
                     />
                     {errors.time && <p className='text-danger'>Та цагаа зөв оруулна уу.</p>}
                     </div>
                     
                     <div className='d-flex justify-center mt-3'>
                        <button 
                        className='btn'  
                        type="submit" 
                        onClick={handleSubmit(onSubmit)}  
                        style={{backgroundColor: "#7A5CFA", color: "white"}}>Засах</button>
                     </div>
                </form>
                </div>
        </div>
    </div>
  )
}

export default AddSchedule