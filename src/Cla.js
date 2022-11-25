import React from "react";

class Cla extends React.Component{
    constructor(){
        super();
        this.state={
            data:"Ram"
        }
    }
    Apple(){
        this.setState({data:"Shyam"})
    }
    render()
    {
        return(
            <div>
               
                
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.Apple()}>Update</button>
               
                

            </div>
        )
    }

}
export default Cla

