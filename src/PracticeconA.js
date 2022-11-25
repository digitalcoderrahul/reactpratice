import React from "react";
import {MyContext} from './Practicalcon'

class PracticeconA extends React.Component{

render(){
    return(
        <div>
           <MyContext.Consumer>
            {data=> <h1>{data.name} </h1>}
            {data=><button>{data.count}</button>}
           </MyContext.Consumer >
        </div>
    )
}
}
export default PracticeconA