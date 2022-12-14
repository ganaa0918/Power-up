import React from 'react'
import { Link } from 'react-router-dom'
import SidebarTeacher from '../../components/sidebar/SidebarTeacher'
import DataTable from 'react-data-table-component';
import {useEffect, useState} from 'react'

function Huvaari() {
  useEffect(() => {
		const timeout = setTimeout(() => {
      setColumns ([
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
          selector: row => row.time,
      },
    ]);
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);
  const data= [
    {
      type: 'Aerobic',
      day: 'Пүрэв',
      time: '10:00-12:00',
    },
    

  ]
  const [columns, setColumns] = useState([]);
	const [pending, setPending] = React.useState(true);

  return (
    <div>
        <div className='flex'>
        <SidebarTeacher />
            <div className='container' style={{paddingTop:"100px"}}>
            <div> <DataTable
                title="Багшийн хуваарь"
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
            <Link to={'/teacher/teacherhuvaari/huvaarinemeh'} className='btn' style={{backgroundColor: "#7A5CFA", color: "white"}}>Хуваарь нэмэх</Link>
            </div>
        </div>
    </div>
  )
}

export default Huvaari