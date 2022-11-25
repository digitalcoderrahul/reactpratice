import React, { useEffect, useState } from 'react'

const Lifeeff = () => {
    const [value , setValue]=useState(0);
    const [data, setData]=useState(100);
    const [retvalue, setRetvalue]=useState(500);

    const countSet=()=>{
        setValue(value+1)
    }

    
    useEffect (()=>{
        console.warn("Rahul")
    },[])


    useEffect(()=>{
        console.warn("Pankaj")
    },[data])


  useEffect(()=>{
    return()=>{
        console.warn("Vivek")
    }
  },[retvalue])


  return (
    <>
    <div  className='items-center'>
    <div>
    <h1 className='text-lg font-bold px-14'>{value}</h1>
    <button className='px-5 bg-black text-white mx-5' onClick={()=>countSet()}> Click</button>
    </div>
    <h1 className='text-lg font-bold px-10'>{data}</h1>
    <button  className='px-5 mx-5 bg-black text-white' onClick={()=>setData(data+1)}> Click</button>
    </div>
   
    <div>
    <h1 className='text-lg font-bold px-10'>{retvalue}</h1>
    <button  className='px-5 mx-5 bg-black text-white' onClick={()=>setRetvalue(retvalue+1)}> Click</button>
    </div>
   
    </>
  )
}

export default Lifeeff