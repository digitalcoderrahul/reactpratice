import React from 'react'
import Bcla from './Bcla'
import Ccla from './Ccla';


class Acla extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Ram",
             value:0,
            
        };
    };


    componentDidMount(){
        this.setState({ name: 'Renuka' });
    };
  
    increseSet=(B)=>{

        this.setState({value:this.state.value+1 })
        console.log(B)
    };

    

    componentDidUpdate(prevProps,prevState,snapshot){
                 if(prevState.value !== this.state.value){
                   if(this.state.value>5){
                    this.setState({name:"Rahul"})
                   }

                   if(this.state.value <0){
                    this.setState({ name: 'Ramesh' });
                }
                   
                 }
    }


    decreseSet=(C)=>{

        this.setState({value:this.state.value-1 })
        // if(this.state.value <=-5){
        //     this.setState({ name: 'Renuka' });
        // }

        console.log(C)
    };

    // componentDidUpdate(prevProps,prevState,snapshot){
    //          if(prevState.value !== this.state.value){
    //             if(this.state.value <5){
    //                 this.setState({ name: 'Ramesh' });
    //             }
    //          }
    //          console.log("rahul")
    // }


    
    
    render(){
        return(
            <div>
                {this.state.name}

                <Bcla value={this.state.value} increseSet={this.increseSet} />
                <Ccla value={this.state.value} decreseSet={this.decreseSet} />
                
            </div>
        )
    }


}

export default Acla