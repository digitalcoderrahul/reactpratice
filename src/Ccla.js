import React from 'react'

class Ccla extends React.Component{
    

    render(){
        return(
            <div>

               

                <button className='bg-black text-white px-3 py-1 m-4' onClick={()=>{this.props.decreseSet()}}> Click</button>

            </div>
        )
    }
}

export default Ccla