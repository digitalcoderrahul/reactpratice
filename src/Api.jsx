import React, { useEffect, useState } from 'react'

const Api = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
   result.json().then((resp)=>{
    // console.log("result",resp)
    setData(resp)
   })
    })
},[])
console.warn(data)
  return (
    <div>
        <h1>Api</h1>
        <table className='space-y-2'>
            <tr>
                <td>ID</td>
                <td>Name</td>
                {/* <td>Mobile</td> */}
                <td>Email</td>
                <td>Address</td>

            </tr>
            {data.map((item)=>
              <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
              
          </tr>
            )}
        </table>
    </div>
  )
}

export default Api