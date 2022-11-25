import React from 'react'


class NameChanB extends React.Component{
   
    

    render(){
        return(
            <div>

               <h1>{this.props.name}</h1>
                <h1>{this.props.value}</h1>

                <button className='bg-black text-white px-3 py-1' onClick={()=>{this.props.nameSet()}}> Click</button>

            </div>
        )
    }
}

export default NameChanB