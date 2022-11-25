import React from 'react'
import  B from './B'



class A extends React.Component{
    constructor(props)
    {

        super(props);
        this.state={
            name:"Ram",
            value:0,
            
        };
        
    }

    componentDidMount(){
        this.setState({ name: 'Renuka' });
    };



    nameSet=(B)=>{

        this.setState({value:this.state.value+1 })
    };

    componentDidUpdate(prevProps,prevState,snapshot){
        // value === 5 => name:- "Rahul"
            if(prevState.value  !== this.state.value){
                if(this.state.value>5){
                    this.setState({ name: 'Rahul' });
            };
            };
    };
   
        render()
        {
            return(
            <div>
                <B name={this.state.name} value={this.state.value} nameSet={this.nameSet}/>
            </div>
            )
        }
}

export default A