import React from "react";
import {mycontext} from './ContextA'

class ContextB extends React.Component{

render(){
    return(
        <div>
            
            <mycontext.Consumer>
                {
                ({data,handlecheck})=>
                    <div>
                        {console.log(data)}
                        <h3>{data.name} {data.count}</h3>
                        <button onClick={handlecheck}>click</button>
                    </div>
                
                }
            </mycontext.Consumer>

            
        </div>
    )
}
    
}
export default ContextB