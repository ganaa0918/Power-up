import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import DataTable from 'react-data-table-component';
import{Link} from 'react-router-dom'
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
        <div>
        <table class="table table-striped table-dark">
   
  <thead>
    <tr>
      <th scope="col">Цаг</th>
      <th scope="col">Даваа </th>
      <th scope="col">Мягмар </th>
      <th scope="col">Лхагва </th>
      <th scope="col">Пүрэв гараг</th>
      <th scope="col">Баасан гараг	</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">8:00-10:00</th>
      <td>Body</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">10:00-12:00</th>
      <td></td>
      <td>body</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">12:00-14:00</th>
      <td></td>
      <td></td>
      <td>body</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">16:00-18:00</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">18:00-20:00</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">20:00-22:00</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>body</td>
    </tr>
  </tbody>
</table>
        </div>
                <div style={{paddingTop:"100px",justifyContent:"center"}} className="d-flex" >
                <Link to={'/User/huwaari/irts'} className='btn' style={{backgroundColor: "#7A5CFA", color: "white"}}>Захиалга хийх</Link>
                </div>
    </div>
    </div>
  )
}

export default Huwaari