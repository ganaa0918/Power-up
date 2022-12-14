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
  const { register, handleSubmit, formState: { errors }, } = useForm();
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

