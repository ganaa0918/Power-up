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
            name: 'Өдөр',
            selector: row => row.day,
        },
        {
            name: 'Эхлэх Цаг',
            selector: row => row.start_hour,
        },
        {
          name: 'Дуусах Цаг',
          selector: row => row.end_hour,
      },
    ]);
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);
  const data= [
    {
      day: 'Пүрэв',
      start_hour: '16:00',
      end_hour: '17:00',
      status: 'Active',}
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