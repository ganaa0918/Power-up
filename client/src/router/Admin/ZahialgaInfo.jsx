import React from 'react'
import DataTable from 'react-data-table-component';
import SidebarAdmin from '../../components/sidebar/SidebarAdmin';


function ZahialgaInfo() {
  const columns = [
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
];

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
                  /></div>
      </div>
      </div>
  )
}

export default ZahialgaInfo