import React, { useState } from 'react'
import Form2 from './Form2'

const Form1 = () => {
    const[value,setValue]=useState("Rahul")

    const callBack =(dat)=>{
        setValue(dat)

    }

  return (
    <div className='text-center py-4 '>
        {value}
        <Form2 callBack={callBack} />
    </div>
  )
}

export default Form1