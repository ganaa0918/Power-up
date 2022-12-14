import SidebarTeacher from '../../components/sidebar/SidebarTeacher'
import { Controller, useForm } from "react-hook-form";
import {React , useContext , useState} from 'react'
import useToast from '../../hooks/useToast';
import classnames from 'classnames/bind';
import { UserContext} from "../userContext";
import { Link } from 'react-router-dom';


function AddSchedule() {
  const [type, setType] = useState();
  const [day, setDay] = useState();
  const [time, setTime] = useState();
    const { addToast } = useToast()
    const { register, handleSubmit, formState: { errors },control  } = useForm({
      mode: "onBlur"
    });
  const onSubmit = data => {
    // var day = 1;
    fetch('http://localhost:3001/teacher/teacherhuvaari/huvaarinemeh' , 
    {
      method: 'post' ,
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({type, day, time })
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
                <form className='w-96 ms-5 '>

                <div className="form-group mt-3">
                    <label>Төрөл</label>
                       <Controller
                      name="type"
                      control={control}
                      render={({ field }) => (
                        <select
                        onClick={e => setType(e.target.value)}
                        {...register("type", {
                          required: true,
                          
                        })}
                        {...field} label="Text field" 
                        className={classnames('form-control', { 'is-invalid': errors.type })} >
                          <option selected>Төрлөө сонгоно уу</option>
                            <option value="Aerobic">Aerobic</option>
                            <option value="Spinnig">Spinnig</option>
                            <option value="Хүчний дасгал">Хүчний дасгал</option>
                            <option value="Сунгалтын дасгал">Сунгалтын дасгал</option>
                        </select>
                      )}  
                    />
                      <small className="text-danger">
                      {errors.type && <p >Та төрлөө оруулна уу.</p>}
                      </small>
                      </div>

                <div className="form-group mt-3">
                    <label>Өдөр хоног</label>
                       <Controller
                      name="week"
                      control={control}
                      render={({ field }) => (
                        <select
                        onClick={e => setDay(e.target.value)}
                        {...register("week", {
                          required: true
                        })}
                        {...field} label="Text field" 
                        className={classnames('form-control', { 'is-invalid': errors.week })} >
                          <option selected>Өдөр сонгоно уу</option>
                            <option value="Monday">Даваа гараг</option>
                            <option value="Tuesday">'Мягмар гараг</option>
                            <option value="Wednesday">'Лхагва гараг</option>
                            <option value="Thursday">Пүрэв гараг</option>
                            <option value="Friday">'Баасан гараг</option>
                            <option value="Saturday">'Бямба гараг</option>
                            <option value="Sunday">'Ням гараг</option>
                        </select>
                      )}  
                    />
                      <small className="text-danger">
                      {errors.week && <p >Та өдрөө оруулна уу.</p>}
                      </small>
                      </div>

                <div className="form-group mt-3">
                    <label>Цаг оруулах</label>
                       <Controller
                      name="time"
                      control={control}
                      render={({ field }) => (
                        <select 
                        onClick={e => setTime(e.target.value)}
                        {...register("time", {
                          required: true
                        })}
                        {...field} label="Text field" 
                        className={classnames('form-control', { 'is-invalid': errors.time })} >
                            <option selected>цаг сонгоно уу</option>
                            <option value="time1">8:00-10:00</option>
                            <option value="time2">10:00-12:00</option>
                            <option value="time3">18:00-20:00</option>
                            <option value="time4">20:00-22:00г</option>

                        </select>
                      )}  
                    />
                      <small className="text-danger">
                      {errors.time && <p >Та цагаа оруулна уу.</p>}
                      </small>
                     </div>
                     <div className='d-flex justify-between mt-3'>
                     <Link 
                     to={'/teacher/teacherhuvaari'}
                        className='btn'  
                        type="submit" 
                        
                        style={{backgroundColor: "#7A5CFA", color: "white"}} >Буцах</Link>
                     
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

