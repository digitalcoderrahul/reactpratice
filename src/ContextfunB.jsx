import React, { useContext } from 'react'
import {GlobalInfo} from './ContextfunA'

const ContextfunB = () => {
    const {count,getday, name,}=useContext(GlobalInfo);
   

  return (
    <div>
      <h1 className='text-xl font-semibold' >My name is: {name}</h1>
         
        <h1 className='text-xl'>{count}</h1>
        
        <button className='text-lg font-semibold bg-black text-white py-1  px-4' onClick={()=>getday()}>Click</button>
        {/* <button className='text-lg font-semibold  bg-black text-white py-1  px-4' onClick={()=>oneday()}>Click</button> */}
    {/* <button onClick={()=>getday(day)}></button> */}
    </div>
  )
}

export default ContextfunB