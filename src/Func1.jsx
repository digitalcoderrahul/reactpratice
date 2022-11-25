import React, { useState } from "react";

const Func1 =()=>{
const [value, setValue]=useState("Rahul")

   function btnShow(){
    setValue("vivek")
   }


    return(
        <>
        <div className="">
        {value}
        <button onClick={btnShow} >click</button>
        </div>

        </>
    )
}

export default Func1