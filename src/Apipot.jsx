import React, { useState } from 'react'

const Apipot = () => {
  const [name, setName]=useState("");
  const[email,setEmail]=useState("");
  const [mobile , setMobile]=useState("");



  const useName=()=>{
   console.warn({name,email,mobile})
   let data={name,email,mobile}
   fetch("http://localhost:3000/users",{
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
    },
    body:JSON.stringify(data)
   }).then((result)=>{
  console.warn("result",result);
   })
  }
  return (
    <div className='text-center space-y-3'>
      
     <input type="text" className='border-2 border-black outline-none' onChange={(e)=>{setName(e.target.value)}} value={name} name='name'/> <br></br>
     <input type="text" className='border-2 border-black outline-none' onChange={(e)=>setEmail(e.target.value)} value={email} name='email' /> <br></br>
     <input type="text" className='border-2 border-black outline-none'  onChange={(e)=>setMobile(e.target.value)} value={mobile} name='mobile'/> <br></br>
     <button onClick={useName} className='bg-black text-white py-1 px-3'>Click</button>

    </div>
  )
}
export default Apipot