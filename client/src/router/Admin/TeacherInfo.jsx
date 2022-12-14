import React from 'react'
import { useEffect,useState } from 'react';
import DataTable from 'react-data-table-component';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin';
import { Link } from 'react-router-dom';

const handleButtonClick = () => {
		
  console.log('clicked');
};

function TeacherInfo() {
  const [data , setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/admin/user_info').then(data => data.json()).then(data => {
      console.log(data);
      setData(data);
      alert("hi");
    }).catch(error => { console.log("error:", error) });
		const timeout = setTimeout(() => {
      setColumns ([
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
          name: 'Устгах',
          cell: () => <button onClick={handleButtonClick} >Устгах</button>,
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,
        },
    ]);
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);
  const [columns, setColumns] = useState([]);
	const [pending, setPending] = React.useState(true);


  return (
    <div className='flex'>
      <SidebarAdmin />
      <div className='container'style={{paddingTop:"100px",}}>
        
        <div> <DataTable
                  title="Багшийн мэдээлэл"
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
                  <div className='mt-2 justify-center d-flex'>
                  <Link to={'/admin/teacher_info/add'} className='btn' style={{backgroundColor: "#7A5CFA", color: "white"}}>Нэмэх</Link>
                  </div>
      </div>
      </div>
  )
}

export default TeacherInfo