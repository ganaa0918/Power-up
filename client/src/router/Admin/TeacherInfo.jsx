import React from 'react'
import { useEffect,useState } from 'react';
import DataTable from 'react-data-table-component';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin';
import { Link } from 'react-router-dom';

const handleButtonClick = () => {
		
  console.log('clicked');
};

function TeacherInfo() {
  
  useEffect(() => {
		const timeout = setTimeout(() => {
      setColumns ([
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

const data = [
  {
      fname: 'John',
      name: 'andrew',
      number: '95484478',
      email: "john@gmail.com"



      
      

  },
]
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