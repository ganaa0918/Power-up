import React from 'react'
import { useState , useEffect , useContext } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import { UserContext} from "../userContext";
function Zhiih() {
    const [type , setType ] = useState() ;
    const [tsag ,  setTsag ] = useState() ;
    const [sar ,  setSar ] = useState() ;
    const [data1 , setData] = useState([]);
    const  { user }= useContext(UserContext);
    const handleClick = () => { 
        alert(type);
        fetch('http://localhost:3001/zahialga/zahialga_hiih' , 
        {
          method: 'post' ,
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ type , tsag , sar  })
          
        }
        ).then(data => data.json()).then(data => {
          
          data("amjilttai");
         
        }).catch(error => { alert("Aldaa garlaa ");})
    
      };
      useEffect(() => { 
        fetch('http://localhost:3000/zahialga/zahialga_hiih').then(data => data.json()).then(data =>{
          alert(data);
        }).catch(error => { console.log("error:" , error)})
      });
     
  return (
    <div>
       <div className='flex'>
            <Sidebar />
                <div className='container'style={{paddingTop:"100px",}} >
                    <div className='d-flex justify-center'>
                        
                        <h1>{user}Захиалгын хэсэг</h1>
                    </div>

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
                        <select id = "tsag" onClick={e =>  setTsag(e.target.value)}
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
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
                            <option value="1 сараар">1 сараар</option>
                            <option value="3 сараар">3 сараар</option>
                            <option value="6 сараар">6 сараар</option>
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
                    <button  className='btn' onClick={ handleClick} style={{backgroundColor: "#7A5CFA", color: "white"}}>Захиалга хийх</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Zhiih