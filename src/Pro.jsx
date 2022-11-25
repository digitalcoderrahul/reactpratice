import React, { useState } from "react";

const Pro =(props)=>{
    const[value,setValue]=useState()
    console.log(props)
    return(
        <>
        <div className=" py-3 px-96 text-2xl font-bold " >
         <h1>Hello {props.name} {props.last}</h1>
         {props.children}
        </div>
        </>
    )
}

export default Pro