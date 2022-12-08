import React from 'react'
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin';

const handleButtonClick = () => {
		
  console.log('clicked');
};

function UserInfo() {
  const [columns, setColumns] = useState([]);
	const [pending, setPending] = React.useState(true);
  useEffect(()=>{
    const timeout = setTimeout(() => {
     setColumns([
      {
        name: 'овог',
        selector: row => row.fname,
    },
    {
      name: 'Нэр',
      selector: row => row.name,
  },
    {
        name: 'Утас',
        selector: row => row.number,
    },
    {
        name: 'email',
        selector: row => row.email,
    },
    {
				
      cell: () => <button onClick={handleButtonClick} >Засах</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      cell: () => <button onClick={handleButtonClick} >Устгах</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
     ]);
     setPending(false);
    },2000);
    return () => clearTimeout(timeout);
  },[])

const data = [
  {
    fname: 'Shine',
    name: 'Beetlejuice',
    number: '95484478',
    email: "toogoo@gmail.com"
  },
]
  return (
    <div className='flex'>
      <SidebarAdmin />
      <div className='container'style={{paddingTop:"100px",}}>
        
        <div> <DataTable
                  title="Хэрэглэгчийн мэдээлэл"
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

export default UserInfo