import SidebarTeacher from '../../components/sidebar/SidebarTeacher'
import {React , useContext , useState} from 'react'
import { useForm } from "react-hook-form";
import useToast from '../../hooks/useToast';
import { UserContext} from "../userContext";

function AddSchedule() {
  const [ day , setDay ] = useState('');
  const [ etsag , setEtsag ] = useState();
  const [ dtsag , setDtsag ] = useState();
    const { addToast } = useToast();
    const {user} = useContext(UserContext);
  const { register, handleSubmit, formState: { errors }, } = useForm();
  
  const onSubmit = data => {
    
    
    alert(etsag);
    var day = 1;
    fetch('http://localhost:3001/teacher/teacherhuvaari/huvaarinemeh' , 
    {
      method: 'post' ,
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({day , etsag , dtsag })
      
    }
    ).then(data => data.json()).then(data => {
      
        addToast(

            {
                text: 'Захиалга амжилттай хиигдлээ',
                theme: "light",
                type: 'success',
            }
            )
    }).catch(error => { alert("Aldaa garlaa ");})
    
  
  }
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
                      
                      value={day}
                      onChange = {e => setDay(e.target.value)}
                      placeholder="Та өдрөө оруулна уу" 
                      {...register('day',{onChange : (e) => setDay(e.target.value) })}
                     
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
                     value = {etsag}
                    
                     placeholder="Та цагаа оруулна уу" 
                     {...register('start_hour',{ onClick : (e) => setEtsag(e.target.value)  })}
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
                     value = {dtsag}
                    
                     {...register('end_hour',{ onClick : (e) => setDtsag(e.target.value)  })}
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