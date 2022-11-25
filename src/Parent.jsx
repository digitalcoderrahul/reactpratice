import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [name,setName]=useState("Rahul")

    const callbackfun=(dat)=>{
        console.log(dat)
        setName(dat)
    }
  return (
    <div>
    {name}
    <Child callbackfun={callbackfun}/>
    </div>
  )
}

export default Parent