import React from 'react'
import  NameChanB from './NameChanB'



class NameChanA extends React.Component{
    constructor(props)
    {

        super(props);
        this.state={
            name:"Ram",
            value:0,
            
        };
        
    }

    



    nameSet=(B)=>{

        this.setState({value:this.state.value+1 });
    //     if(this.state.value >=5){
    //         this.setState({ name: 'Rahul' });
    //         if(this.state.value >=10){
    //             this.setState({ name: 'Renuka' });
    //         }
    // };
    };


    componentDidUpdate(prevState,prevProps,snapshot){
           if(prevState !== this.state.value){
            if(this.state.value >5){
                this.setState({name:"Renuka"})
            }

           }
    }

    
   
        render()
        {
            return(
            <div>
                <NameChanB name={this.state.name} value={this.state.value} nameSet={this.nameSet}/>
            </div>
            )
        }
}

export default NameChanA