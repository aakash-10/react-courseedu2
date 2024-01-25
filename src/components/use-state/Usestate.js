import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios";
function Usestate() {

    let [users,setUsers]=useState([])
    

   // let [marks,setMarks] = useState([10,20])

  //  function changeValue(){
    //   setvalue(value+1)
    //}
   
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=>setUsers(res.data))
      .catch(err=>console.log(err))
    },[])
   
  console.log(users)
    
  return (
    <div className='text-center'>
         <h1>{users.length}</h1>
        
    </div>
  )
}

export default Usestate
