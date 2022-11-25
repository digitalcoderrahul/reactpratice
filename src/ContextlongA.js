import React from "react";
import ContextlongB from './ContextlongB'

export const Context = React.createContext();

class ContextlongA extends React.Component{

    
state={
        name:"Rahul",
        count:0
    
}




    render()
    {
        return(
            <div>
                <h1>hello</h1>
           <Context.Provider value={this.state}>
            <ContextlongB />
           </Context.Provider>
            </div>
        )
    }


}

export default ContextlongA