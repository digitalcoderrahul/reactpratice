import React from 'react'

class Lifedidup extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }

    }
    componentDidUpdate(preProps,preSate,snapShot){
        
        console.warn("componentDidUpdate")

    }
    render()
    {
        return(
            <div>
                <h1>{this.state.count}</h1>
             <button className='bg-black text-white px-2 py-1' onClick={()=>{this.setState({count:this.state.count+1})}}>click</button>
            </div>
        )
    }
}
export default Lifedidup