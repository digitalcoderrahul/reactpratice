import React, { useEffect, useState } from 'react'

const Practicelife = () => {
    const[name,setName]=useState("Ram")
    const[count,setCount]=useState(0)

useEffect(()=>{
    setName("Renuka")
},[])

   
useEffect(()=>{
    if(count >5){
        setName("Raman")
    }
},[count])



  return (
    <div>
        <div className='text-lg'>
       <h1> My name is: {name}</h1>
        </div>
        <div className='mx-5'>
        {count}
        </div>
        <div className=''>
        <button className='bg-black text-white px-3' onClick={()=>setCount(count+1)}> click</button>
        </div>
        
    </div>
  )
}

export default Practicelife