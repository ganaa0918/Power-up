import React from 'react'
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin';


const handleButtonClick = () => {
		
  console.log('clicked');
};

function ZahialgaInfo() {
  const [columns, setColumns] = useState([]);
	const [pending, setPending] = React.useState(true);
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setColumns([
        {
          name: 'Name',
          selector: row => row.name,
      },
      {
          name: 'Өдөр',
          selector: row => row.day,
      },
      {
          name: 'Цаг',
          selector: row => row.status,
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
  
const data = [
  {
      id: 1,
      name: 'Beetlejuice',
      day: 'Даваа',
      status: '11:00-13:00',
      

  },
]
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