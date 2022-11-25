import React from 'react'

const Child1 = (props) => {
  return (
    <div>
       <h1>age {props.age}</h1>
       <h1> first : {props.first}</h1>
       <h1>last:{props.last}</h1>
       <h1>name:{props.name}</h1>
        </div>
  )
}

export default Child1