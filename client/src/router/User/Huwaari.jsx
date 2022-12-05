import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import DataTable from 'react-data-table-component';
function Huwaari() {
  const columns = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Day',
        selector: row => row.day,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
];

const data = [
    {
        id: 1,
        name: 'Beetlejuice',
        day: 'Даваа',
        status: 'Active',
        

    },
]
  return (
     <div className='flex'>
     <Sidebar />
     <div className='container'style={{paddingTop:"100px",}}>
        
      <div> <DataTable
                title="Захиалгын түүх"
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
                /></div>
    </div>
    </div>
  )
}

export default Huwaari