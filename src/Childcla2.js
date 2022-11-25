import React from "react";

class Childcla2 extends React.Component{
//     constructor(){
//         super(props);
//         this.state={
//             name:"Vivek"
//         }
//     }


// componentDidUpdate(preProps,preState,snapshot){
//     if(preProps.value !== this.props.value){
//        if(this.props.value >5){
//         this.setState({name: "Rajesh"})
//        }

//        if(this.props.value <0){
//         this.setState({name:"Ramesh"})
//     }
//     }
// }


    render()
    {
        return(
            <div className="flex flex-col text-center">
                
                {/* <h1>{this.props.name}</h1> */}
                {/* <h1 className="text-2xl font-semibold">{this.props.value}</h1>
                <button className="bg-black text-white  py-1 px-3 font-semibold text-lg" onClick={()=>this.props.newSet()} >Click</button> */}
                <button className="bg-black text-white  py-1 px-3 font-semibold text-lg" onClick={()=>this.props.decrement()}>Decrement </button>
            </div>
        )
    }
}

export default Childcla2