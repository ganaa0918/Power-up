import SidebarTeacher from '../../components/sidebar/SidebarTeacher'
import React from 'react'
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
  console.log(data);
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
                      name='day' 
                      placeholder="Та өдрөө оруулна уу" 
                      {...register('day',{ required: true })}
                     
                      /> {errors.day && <p className='text-danger'>Та өдрөө зөв оруулна уу</p>}
                     </div>

                     <div className='mt-3 form-group'>
                     <label>Эхлэх цаг</label>
                     <input 
                     className="form-control" 
                     type="time" 
                     name='start_hour'
                     min="08:00"
                     max="20:00"
                     placeholder="Та цагаа оруулна уу" 
                     {...register('start_hour',{ required: true })}
                     />
                     {errors.start_hour && <p className='text-danger'>Та цагаа зөв оруулна уу.</p>}
                     </div>

                     <div className='mt-3 form-group'>
                     <label>Дуусах цаг</label>
                     <input 
                     className="form-control" 
                     type="time" 
                     name='end_hour'
                     min="08:00"
                     max="20:00"
                     placeholder="Та цагаа оруулна уу" 
                     {...register('end_hour',{ required: true })}
                     />
                     {errors.end_hour && <p className='text-danger'>Та цагаа зөв оруулна уу.</p>}
                     </div>
                     
                     <div className='d-flex justify-center mt-3'>
                        <button 
                        className='btn'  
                        type="submit" 
                        onClick={handleSubmit(onSubmit)}  
                        style={{backgroundColor: "#7A5CFA", color: "white"}} >Нэмэх</button>
                     </div>
                </form>
                </div>
        </div>
    </div>
  )
}

export default AddSchedule