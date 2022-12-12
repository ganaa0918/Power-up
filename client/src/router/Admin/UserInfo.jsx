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
        name: 'Нэр',
        selector: row => row.name,
    },
    {
        name: 'Овог',
        selector: row => row.fname,
    },
    {
        name: 'Гар утас',
        selector: row => row.phone,
    },
    {
      name: 'Password',
      selector: row => row.password,
  },
  {
    name: 'Хүйс',
    selector: row => row.gender,
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
      id: 1,
      name: 'Beetlejuice',
      fname: 'Salmon',
      phone: '+1 (921) 513-2012',
      password: 'sd',
      gender: 'Эм',
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