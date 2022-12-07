import React, { useContext } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { UserContext} from "./userContext"
function User() {
  const [id , setID ] = useContext();
  
  return (
     
    <div>
      <Sidebar/>
    </div>

  )
}

export default User