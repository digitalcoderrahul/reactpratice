import React from "react";


const PropsB = ( props)=>{
console.log(props)
   

    
    return(
        <>
        <div>
        <h1>My Name is : {props.name}</h1>
        <button className="bg-black text-white py-1 px-3" onClick={()=>props.changeName("Rahul")} >update</button>
        </div>
          
        </>
    )
}
export default PropsB