import React, { useEffect, useState } from 'react'

const Apidelet = () => {
    const[data,setData]=useState([]);
    const[name, setName]=useState("");
    const[email, setEmail]=useState("");
    const[mobile , setMobile]=useState("");
    const [userID ,setUser]=useState("")
    const [fieldsData ,setFieldsData]=useState({name:"",email:"",mobile:"",data:""})
   

    useEffect(()=>{
    fetch("http://localhost:3000/users").then((result)=>{
   result.json().then((resp)=>{
    // console.log("result",resp)
    setData(resp)
    // setName(resp[0].name)
    // setEmail(resp[0].email)
    // setMobile(resp[0].mobile)
    // setUser(resp[0].id)
   })
    })
},[])
console.warn(data)


const upDate =()=>{
let item={name,email,mobile,userID}
fetch(`http://localhost:3000/users/${userID}`,{ 
      method:'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(item)
    }).then((result)=>{
      result.json().then((resp)=>{
       
        console.warn(resp)
       
      })
    })
}

const selectUser=(data)=>{
  setName(data.name)
  setEmail(data.email)
  setMobile(data.mobile)
  setUser(data.id)
};

const deleteUSer=(id)=>{
  fetch(`http://localhost:3000/users/${id}`,{ 
    method:'DELETE'
  }).then((result)=>{
    result.json().then((resp)=>{
      console.warn(resp)
    })
  })

 
    // fetch(`http://localhost:3000/users/${id}`,{ 
    //   method:'POST'
    // }).then((result)=>{
    //   result.json().then((resp)=>{
    //     console.warn(resp)
    //   })
    // })
}


  return (
    <div>
        <h1 className=''>Api Delete</h1>
        <table className='space-x-3'>
            <tr >
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Mobile</td>
                <td>Opration</td>
                

            </tr>
            {data.map((item,i)=>
              <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td><button className='bg-black text-white py-1 px-3' onClick={()=>deleteUSer(item.id)}>Delete</button></td>
              <td><button className='bg-black text-white py-1 px-3' onClick={()=>selectUser(item)}>upDate</button></td>
          </tr>
            )}
        </table>

      <div className='text-center space-y-3'>
      <input type="text" className='border-2 border-black outline-none' onChange={(e)=>{setName(e.target.value)}} value={name} name='name'/> <br></br>
      <input type="text" className='border-2 border-black outline-none' onChange={(e)=>setEmail(e.target.value)} value={email} name='email' /> <br></br>
      <input type="text" className='border-2 border-black outline-none'  onChange={(e)=>setMobile(e.target.value)} value={mobile} name='mobile'/> <br></br>
      <button onClick={upDate} className='bg-black text-white py-1 px-3'>upDate</button>
     </div>
    </div>
  )
}

export default Apidelet