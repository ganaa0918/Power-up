import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Төрөл',
        selector: row => row.type,
    },
    {
        name: 'Цагийн хувиарь',
        selector: row => row.time,
    },
    {
        name: 'Төлсөн сар',
        selector: row => row.month,
    },
    {
        name: 'Захиалга хийсэн огноо',
        selector: row => row.zahialga,
    }
];

const data = [
    {
        id: 1,
        type: 'Beetlejuice',
        time: 'Даваа,Мягмар,Баасан',
        month: '11 сар',
        zahialga: '2022/11/21'

    },
]

function Zahialga() {
  return (
    <div>
       <div className='flex'>
            <Sidebar />
                <div className='container'style={{paddingTop:"100px",}} >
                <DataTable
                title="Захиалгын түүх"
                columns={columns}
                data={data}
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5,10]}
                theme='dark'
                noDataComponent={'Жагсаалт байхгүй байна'}
                paginationComponentOptions={
                    {rowsPerPageText: 'Хуудасны тоо:'}
                }
                />
                <div style={{paddingTop:"100px",justifyContent:"center"}} className="d-flex" >
                <button className='btn' style={{backgroundColor: "#7A5CFA", color: "white"}}>Захиалга хийх</button>
                </div>
                </div>
                
        </div>
    </div>
  )
}

export default Zahialga