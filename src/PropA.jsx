import React, { useState } from "react";
import PropsB from "./PropB";


const PropsA =()=>{
    const[value,setValue]=useState("Ram")

    const changeName=(dat)=>{
        setValue(dat)
    }
    
    return(
        <>
        <div className="text-center py-10">
       
        <PropsB changeName={changeName} name={value}/>
        </div>
        </>
    )
}
export default PropsA
