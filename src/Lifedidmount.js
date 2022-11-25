import React from 'react'



class Lifedidmount extends React.Component{
    constructor()
    {

        super();
        this.state={
            name:"Ram",
            value:0,
        };
        // console.warn("constructor")
    }

    componentDidMount(){
        this.setState({ name: 'Renuka' });
    };

    componentDidUpdate(prevProps,prevState,snapshot){
        if(prevState.value  !== this.state.value){
            if(this.state.value>5){
         this.setState({  name: 'Reena' });
        };
        };
    };
   
        render()
        {
            
            // console.warn("render")
            return(
            <div>
           <h1>My name is : {this.state.name}</h1>
           <h1>{this.state.value}</h1>
           <button className='bg-black text-white px-3 py-1' onClick={()=>{this.setState({value:this.state.value+1})}}> Click</button>
           {/* <button className='bg-black text-white px-3 py-1' onClick={()=>{this.setState({name:this.state.count+1})}} >Click</button> */}
            </div>
            )
        }
}

export default Lifedidmount