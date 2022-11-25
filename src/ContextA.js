import React from "react";
import ContextB from "./ContextB";
// import ContextC from "./ContextC";



export const mycontext = React.createContext();

class ContextA extends React.Component{
state={
    name:"Rahul",
    count:0
}

handleClickContext=()=>{
this.setState({count:this.state.count+1, })
}


clickOne=(B)=>{
    this.setState({name:B})
}

render(){
const contextValue={
    data:this.state,
    handlecheck:this.handleClickContext

}
    return(
        <>
        <div>

           <h1>hello</h1> 
        <mycontext.Provider value={contextValue } >
         <ContextB/>
         {/* <ContextC/> */}
        </mycontext.Provider>
        </div>
        </>
        
    )
}
}
export default ContextA