import React from 'react'
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin';


const handleButtonClick = () => {
		
  
};

function ZahialgaInfo() {
  const [columns, setColumns] = useState([]);
	const [pending, setPending] = React.useState(true);
  const [data , setData] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/admin/zahialga_info').then(data => data.json()).then(data => {
    
    setData(data);
    
  }).catch(error => { console.log("error:", error) });
    const timeout = setTimeout(()=>{
      setColumns([
        {
          name: 'Төрөл',
          selector: row => row.type,
      },
      {
          name: 'Өдөр',
          selector: row => row.day,
      },
      {
          name: 'Цаг',
          selector: row => row.tsag,
      },
      {
        name: 'Сар',
        selector: row => row.sar,
    },
      {
				
				cell: () => <button onClick={handleButtonClick} >Устгах</button>,
				ignoreRowClick: true,
				allowOverflow: true,
				button: true,
			},
      ])
      setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
  },[])
  

  return (
    <div className='flex'>
      <SidebarAdmin />
      <div className='container'style={{paddingTop:"100px",}}>
        
        <div> <DataTable
                  title="Захиалгын мэдээлэл"
                  columns={columns}
                  data={data}
                  pagination
                  paginationPerPage={5}
                  paginationRowsPerPageOptions={[5,10]}
                  theme='light'
                  noDataComponent={'Жагсаалт байхгүй байна'}
                  paginationComponentOptions={
                      {rowsPerPageText: 'Хуудасны тоо:'}
                  }
                  progressPending={pending}
                  /></div>
      </div>
      </div>
  )
}

export default ZahialgaInfo