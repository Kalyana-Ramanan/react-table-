import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Read.css';
import {FaPenSquare,FaTrash} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Read=()=>{
  const navigate = useNavigate()
  const [apiData,setApi]=useState([])

  useEffect(()=>{
     callApi()
  },[])
  
  const callApi=async()=>
  {
   await axios.get('http://localhost:3000/Data')
         .then(resp => setApi(resp.data))
         .catch(error => console.log(error))
  }
  const deleteHandler=async(id)=>
  {
    await axios.delete('http://localhost:3000/Data/' +id)
    callApi()
  }
  const updateUser=({id,Emailaddress,Password,Gender})=>
  {
      
          localStorage.setItem('id',id)
          localStorage.setItem('Emailaddress',Emailaddress)
          localStorage.setItem('Password',Password)
          localStorage.setItem('Gender',Gender)
          navigate('/update')
      
  }
  return (
     <div class='tab'>
      <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Email address</th>
      <th scope="col">Password</th>
      <th scope="col">Male/Female</th>
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>

    </tr>
  </thead>
  <tbody>
    {apiData.map(data=>{
     return (<tr key={data.id}>
        <td>{data.id}</td>
         <td>{data.Emailaddress}</td>
         <td>{data.Password}</td>
         <td>{data.Gender}</td>
         <td><button onClick={()=>deleteHandler(data.id)}>{<FaTrash />}</button></td>
         <td><button onClick={()=>updateUser(data)}>{<FaPenSquare />}</button></td>
      </tr>)
    })}
     </tbody>
    </table>
    </div>
  )
}

export default Read