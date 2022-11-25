import React, { useState } from 'react'
import Child1 from './Child1'

const Parent1 = () => {
    const[name, setName]=useState("rahul")
    const[first,setFirst]=useState("rahul")
    const[last,setLast]=useState("Mahaur")
    const[value,setValue]=useState(20)
    
  return (
    
    <div>
        <h1><Child1 name={name} first={first} last={last} age={value} /></h1>
        
    </div>
    
  )
}

export default Parent1