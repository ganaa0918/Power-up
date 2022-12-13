import SidebarTeacher from '../../components/sidebar/SidebarTeacher'
import React from 'react'
import { Controller, useForm } from "react-hook-form";
import useToast from '../../hooks/useToast';
import Select from 'react-select'
import classnames from 'classnames/bind';
const selectOptions = [
  { value: "Даваа гараг", label: "Даваа гараг" },
  { value: "Мягмар гараг", label: "Мягмар гараг" },
  { value: "Лхагва гараг", label: "Лхагва гараг" },
  { value: "Пүрэв гараг", label: "Пүрэв гараг" },
  { value: "Баасан гараг", label: "Баасан гараг" },
  { value: "Бямба гараг", label: "Бямба гараг" },
  { value: "Ням гараг", label: "Баасан гараг" }
];

const selectTypes = [
  { value: "Aerobic", label: "Aerobic" },
  { value: "Spinnig", label: "Spinnig" },
  { value: "Хүчний дасгал", label: "Хүчний дасгал" },
  { value: "Сунгалтын дасгал", label: "Сунгалтын дасгал" }
]

function AddSchedule() {
    const { addToast } = useToast()
  const { register, handleSubmit, formState: { errors },control  } = useForm({
    mode: "onBlur"
  });
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
                <form className='w-96 ms-5 '>
                  
                <div className="form-group mt-3">
                    <label>Төрөл</label>
                       <Controller
                      name="type"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                        {...register("type", {
                          required: true
                        })}
                        options={selectTypes}
                        {...field} label="Text field" 
                        className={classnames('form-control', { 'is-invalid': errors.type })} />
                      )}  
                    />
                      <small className="text-danger">
                      {errors.type && <p >Та төрлөө зөв оруулна уу.</p>}
                      </small>
                     </div>

                    <div className="form-group mt-3">
                    <label>Өдөр хоног</label>
                       <Controller
                      name="week"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                        {...register("week", {
                          required: true
                        })}
                        options={selectOptions}
                        {...field} label="Text field" 
                        className={classnames('form-control', { 'is-invalid': errors.week })} />
                      )}  
                    />
                      <small className="text-danger">
                      {errors.week && <p >Та өдрөө зөв оруулна уу.</p>}
                      </small>
                     </div>

                     <div className='mt-3 form-group'>
                     <label>Эхлэх цаг</label>
                     <Controller
                                    name='start_time'
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <input
                                            {...register("start_time", {
                                                required: true
                                            })}
                                            {...field}
                                            id='start_time'
                                            placeholder='Сонгох'
                                            type="time"
                                            className={classnames('form-control', { 'is-invalid': errors.start_time })}
                                        />
                                    )}
                                />
                       <small className="text-danger">
                      {errors.start_time && <p >Та цагаа зөв оруулна уу.</p>}
                      </small>
                   
                     </div>

                     <div className='mt-3 form-group'>
                     <label>Дуусах цаг</label>
                     <Controller
                                    name='end_time'
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <input
                                            {...register("end_time", {
                                                required: true
                                            })}
                                            {...field}
                                            id='end_time'
                                            placeholder='Сонгох'
                                            type="time"
                                            className={classnames('form-control', { 'is-invalid': errors.end_time })}
                                        />
                                    )}
                                />
                     <small className="text-danger">
                      {errors.end_time && <p >Та цагаа зөв оруулна уу.</p>}
                      </small>
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

