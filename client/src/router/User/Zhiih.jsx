import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { useForm } from "react-hook-form";
import useToast from '../../hooks/useToast';


function Zhiih() {
    const { addToast } = useToast()
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => {
      addToast(
        {
            text: 'Захиалга амжилттай хиигдлээ',
            theme: "light",
            type: 'success',
        }
    )
    };
  return (
    <div>
       <div className='flex'>
            <Sidebar />
                <div className='container'style={{paddingTop:"100px",}} >
                    <div className='d-flex justify-center'>
                        <h1>Захиалгын хэсэг</h1>
                    </div>
                <form className='w-96 ms-5 ' method='POST'>
                    <div class="flex justify-center mt-4">
                    <div class="mb-3 xl:w-96">
                        <select class="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                            <option selected>Төрлөө сонгоно уу</option>
                            <option value="1">Aerobic</option>
                            <option value="2">Spinnig</option>
                            <option value="3">Хүчний дасгал</option>
                            <option value="4">Сунгалтын дасгал</option>
                        </select>
                    </div>
                    </div>

                    <div class="flex justify-center mt-1">
                    <div class="mb-3 xl:w-96">
                        <label htmlFor="huwaari" className='mb-2'> Цагийн хувиар сонгох</label>
                        <select class="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" >
                            <option selected> Цагийн хувиар сонгоно уу</option>
                            <option value="1">2 дахь өдөр 19-21 цаг  , 3 дахад 17-19..</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    </div>

                    
                    <div class="flex justify-center mt-1">
                    <div class="mb-3 xl:w-96">
                        <label htmlFor="huwaari" className='mb-2'> Багц төрөл</label>
                        <select class="form-select appearance-none
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                            <option selected> Багцаа сонгоно уу</option>
                            <option value="1">1 сараар</option>
                            <option value="2">3 сараар</option>
                            <option value="3">6 сараар</option>
                        </select>
                    </div>
                    </div>

                    <div class="flex justify-center mt-1">
                        <div class="mb-3 xl:w-96">
                            <label class="block">
                                <span class="block text-sm font-medium text-slate-700">Төлбөр төлөх данс</span>
                            
                                <input type="text" value="Хаан банк 5082147601" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                            </label>
                        </div>
                    </div>
                    <div class="flex justify-center mt-1">
                    <button  className='btn' style={{backgroundColor: "#7A5CFA", color: "white"}} onClick={handleSubmit(onSubmit)}  >Захиалах</button>
                    </div>
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Zhiih