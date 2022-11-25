import React from "react";
import {MyContext} from './Practicalcon'

class PracticeconB extends React.Component{
  
render(){
return(
    <div>
        <MyContext.Consumer>
            {data=><h1>{data.count}</h1>}
        </MyContext.Consumer>
    </div>
)
}
}
export default PracticeconB