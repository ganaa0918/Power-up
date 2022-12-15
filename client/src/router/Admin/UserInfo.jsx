import React from 'react'
import { useEffect, useState  } from 'react';
import DataTable from 'react-data-table-component';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin';


function UserInfo() {
  const [data , setData] = useState([]);
  const [columns, setColumns] = useState([]);
	const [pending, setPending] = React.useState(true);
  
  useEffect(()=>{
    fetch('http://localhost:3001/admin/user_info').then(data => data.json()).then(data => {
      console.log(data);
      setData(data);
      
    }).catch(error => { console.log("error:", error) });

    const timeout = setTimeout(() => {
   
     setColumns([
      {
        name: 'овог',
        selector: row => row.Fname,
    },
    {
      name: 'Нэр',
      selector: row => row.username,
  },
    {
        name: 'Утас',
        selector: row => row.Phone,
    },
    {
        name: 'email',
        selector: row => row.email,
    },
    {
      name: 'Нууц үг',
      selector: row => row.password,
    },
  
    {      name: 'Нууц үг',
           
         
         cell: () => <button onClick={
           fetch('http://localhost:3001/admin/user_info',
          {
            method: 'Delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  selector: row => row._id  })

          }
        ).then(data => data.json()).then(data => {

          if (data.success) {
            alert("amjilttai ustlaa");
            fetch('http://localhost:3001/admin/user_info').then(data => data.json()).then(data => {
              setData(data);
            }).catch(error => { console.log("error:", error) });

          }

        }
        
        ).catch(error => { }) 
          
     
         } 
    >Устгах</button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
     ]);
     setPending(false);
    },2000);
    
    return () => clearTimeout(timeout);
  
  },[])

  return (
    <div className='flex'>
      <SidebarAdmin />
      <div className='container'style={{paddingTop:"100px",}}>
        
        <div> <DataTable
                  title="Хэрэглэгчийн мэдээлэл"
                  columns={columns}
                  data={data}
                  pagination
                  paginationPerPage={7}
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