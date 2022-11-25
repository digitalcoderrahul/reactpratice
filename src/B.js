import React from 'react'

class B extends React.Component{
    constructor(){
        super()
    }

    //     componentDidUpdate(prevProps,prevState,snapshot){
       
    //         if(prevProps.value  !== this.props.value){
    //             if(this.props.value>5){
    //                 if(this.state.value>5){
    //                                     this.setState({ name: 'Rahul' });
    //                             };
    //                             };

    //         };
    //         };
    // };

    render()
    {
        return(
        <div>
       <h1>My name is : {this.props.name}</h1>
       <h1>{this.props.value}</h1>
       <button className='bg-black text-white px-3 py-1' onClick={()=>{this.props.nameSet()}}> Click</button>
        </div>
        )
    }

}

export default B