import React,{useContext, useEffect} from 'react'
import {GlobalInfo} from './ContextfunA'
const ContextfunC = () => {
    const {oneday}=useContext(GlobalInfo);

   

  return (
    <div className='m-5'>
        <button className='text-lg font-semibold  bg-black text-white py-1  px-4' onClick={()=>oneday()}>Click</button>
    </div>
  )
}

export default ContextfunC