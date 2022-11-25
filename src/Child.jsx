import React from 'react'

const Child = ({callbackfun}) => {
  return (
    <div>
        <button onClick={()=>callbackfun("shyam")}>updateName</button>
    </div>
  )
}

export default Child