import React, { Component } from "react";


class Childcla3 extends React.Component{
// constructor(){
//         super();
//         this.state={
//             name:"Vivek"
//         }
//     }
componentDidUpdate(preProps,preState,snapshot){
    if(preProps.value !== this.props.value){
       if(this.props.value > 5 ){
        this.props.changeName("Reena")
        // console.log('Working fine')
            // console.log(this.props.name,"1212121212121")
            // this.setState({name:"123"})
        // this.setState({name: "Rajesh"})
       }

       if(this.props.value <0){
        // this.setState({name:"Ramesh"})
        this.props.callBack("Ramesh")
    }
    }
}

// forCheck(){
//     this.setState({name:"vivek12"});
//     this.props.newSet();    
// }


    render(){
        // const num = 10;
        // const num2 = 20
        // console.log("world",!num && num);
        // console.log("hello",num === 20 ?"10":"20")
        return(
            <div className="m-6">
                <h1  className="  py-1 px-3 font-semibold text-lg" >{this.props.name}</h1>
                <h1 className="text-2xl font-semibold">{this.props.value}</h1>
                <button className="bg-black text-white  py-1 px-3 font-semibold text-lg" onClick={()=>this.props.newSet()} >Increment</button>
        {/* <button className="bg-black text-white  py-1 px-3 font-semibold text-lg" onClick={()=>this.props.decrement()}>Decrement </button>    */}
            </div>
        )
    }
}

export default Childcla3