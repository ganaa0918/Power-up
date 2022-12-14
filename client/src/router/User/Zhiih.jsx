import React from 'react'
import { useState , useEffect , useContext } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import { useForm } from "react-hook-form";
import useToast from '../../hooks/useToast';

import { UserContext} from "../userContext";
function Zhiih() {
    
    const [type , setType ] = useState() ;
    const [tsag ,  setTsag ] = useState() ;
    const [sar ,  setSar ] = useState() ;
    const [Tsag, setTsagiin] = useState([]) ;
    const  { user }= useContext(UserContext);
    const { addToast } = useToast()
    const {  handleSubmit } = useForm();
    useEffect(() => {
        fetch('http://localhost:3001/zahialga/zahialga_hiih').then(data => data.json()).then(data => {
          console.log(data);
          console.log("test1");
          setTsagiin(data);
          

        }).catch(error => { console.log("error:", error) })
      }, []);
    const onSubmit = data => {
        
        
        fetch('http://localhost:3001/zahialga/zahialga_hiih' , 
        {
          method: 'post' ,
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({  user , type , tsag  , sar   })
          
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
    };
    
   
  
  return (
    <div>
         
       <div className='flex'>
            <Sidebar />
                <div className='container'style={{paddingTop:"100px",}} >
                    <div className='d-flex justify-center'>
                        
                        
                    </div>
                    
                <form className='w-96 ms-5 ' method='POST'>
                <div className='d-flex justify-center'>
                        
                        <h1>Захиалгын хэсэг</h1>
                    </div>
                <label htmlFor="huwaari" className='mb-2'>Дасгалын төрөлөө сонгох </label>
                    <div class="flex justify-center mt-4">
                    
                    <div class="mb-3 xl:w-96">
                        <select  id = "type " onClick={e => setType(e.target.value)} class="form-select appearance-none
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
                            <option value="Aerobic">Aerobic</option>
                            <option value="Spinnig">Spinnig</option>
                            <option value="Хүчний дасгал">Хүчний дасгал</option>
                            <option value="Сунгалтын дасгал">Сунгалтын дасгал</option>
                        </select>
                    </div>
                    </div>

                    <div class="flex justify-center mt-1">
                    <div class="mb-3 xl:w-96">
                        <label htmlFor="huwaari" className='mb-2'> Цагийн хувиар сонгох</label>
                        <select id = "tsag"  onClick={e => setTsag(e.target.value)}
                        class="form-select appearance-none
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
                        {Tsag.map((tsag1, i) => 
                            <option  key={i} value="1">{tsag1.tsagiin_huwaari}</option>
                            
                        
                       )}
                       </select>
                    </div>
                    </div>

                    
                    <div class="flex justify-center mt-1">
                    
                    
                 
                       
                    <div  class="mb-3 xl:w-96">
                        <label htmlFor="huwaari" className='mb-2'> Багц төрөл</label>
                        <select 
                        id = "sar" onClick={e =>  setSar(e.target.value)} class="form-select appearance-none
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
                            <option value="{tsag1.tsagiin_huwaari}">1</option>
                           
                           
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
                    <button  className='btn'
                     type="submit" 
                     onClick={handleSubmit(onSubmit)}  
                    style={{backgroundColor: "#7A5CFA", color: "white"}}>Захиалга хийх</button>
                    </div>
                   
                    </form>
                </div>
               

        </div>
       
    </div>
  )
}

export default Zhiih