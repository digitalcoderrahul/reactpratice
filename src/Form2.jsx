import React from 'react'

const Form2 = ({callBack}) => {
  return (
    <div className='text-center'>
        <button className='bg-black px-3 py-1  text-white font-semibold' onClick={()=>callBack("Vivek")}>Click</button>
    </div>
  )
}

export default Form2