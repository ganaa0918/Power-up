import SidebarTeacher from '../../components/sidebar/SidebarTeacher'
import { Controller, useForm } from "react-hook-form";
import {React , useContext , useState} from 'react'
import useToast from '../../hooks/useToast';
import { ColourOption, selectTypes,selectOptions,selectTime } from './docs/data.ts';
import Select, { StylesConfig } from 'react-select';
import chroma from 'chroma-js';
import classnames from 'classnames/bind';
import { UserContext} from "../userContext";

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};


function AddSchedule() {
    const { addToast } = useToast()
    const { register, handleSubmit, formState: { errors },control  } = useForm({
      mode: "onBlur"
    });
  const onSubmit = data => {
    
    
 
    var day = 1;
    fetch('http://localhost:3001/teacher/teacherhuvaari/huvaarinemeh' , 
    {
      method: 'post' ,
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ })
      
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
                        <Select
                        styles={colourStyles}
                        {...register("type", {
                          required: true
                        })}
                        defaultValue={selectTypes[0]}
                        options={selectTypes}
                        {...field} label="Text field" 
                        className={classnames('form-control', { 'is-invalid': errors.type })} />
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
                        <Select
                        styles={colourStyles}
                        {...register("week", {
                          required: true
                        })}
                        defaultValue={selectOptions[0]}
                        options={selectOptions}
                        {...field} label="Text field" 
                        className={classnames('form-control', { 'is-invalid': errors.week })} />
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
                        <Select
                       
                        {...register("time", {
                          required: true
                        })}
                        defaultValue={selectTime[0]}
                        options={selectTime}
                        {...field} label="Text field" 
                        className={classnames('form-control', { 'is-invalid': errors.time })} />
                      )}  
                    />
                      <small className="text-danger">
                      {errors.time && <p >Та цагаа оруулна уу.</p>}
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

