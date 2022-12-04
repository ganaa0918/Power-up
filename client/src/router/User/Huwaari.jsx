import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Configobj from './chartdata';
import Sidebar from '../../components/sidebar/Sidebar';
function Huwaari() {
  return (
   <div>
     <div className='flex'>
     <Sidebar />
     <div className='container'style={{paddingTop:"100px",}}>
    <HighchartsReact
    highcharts={Highcharts}
    options={Configobj}
  />
      </div>
    </div>
   </div>
  )
}

export default Huwaari