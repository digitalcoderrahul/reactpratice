import React from "react";
import Childcla2 from './Childcla2'
import Childcla3 from "./Childcla3";

class Chilcla1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
          value:0,
          name: "ram",
        }
      }

      componentDidMount(){
        this.setState({ name: 'Renuka' });
    };

    newSet=()=>{
        this.setState({value:this.state.value+1})
        // if(this.state.value >=5){
        // this.setState({name:"Resma"});
        // // this.setState({name:''});
        // // console.log(this.state,"oluiy")
        // }
            // this.setState =this.setState.bind(this)
            // this.setState(B);
        
        

        // this.setState({D})
    }

    changeName=(B)=>{
        this.setState({name:B})
    }


    callBack=(A)=>{
        this.setState({name:A})
    }


    decrement=()=>{
        this.setState({value:this.state.value-1})
    }

    render(){
        return(
            <div>
           <Childcla2  decrement={this.decrement}   />
           <Childcla3 name={this.state.name} value={this.state.value} newSet={this.newSet} changeName={this.changeName} callBack={this.callBack} />
            </div>
        )
    }
    }
export default Chilcla1