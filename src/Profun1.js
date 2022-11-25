import React from 'react'
import Profun from './Profun';


class Profun1 extends React.Component{
   constructor(){
      super();
      this.state={
              data:"Ram"
         }
      }
      
      render()
      {
         return(
            <div className='text-center'>
               <h1></h1>
               <Profun data={this.state.data}/>
               <button className='bg-blue-500 py-1 px-3 text-white font-semibold' onClick={()=>this.setState({data:"Rahul"})}>Update</button>

            </div>
         )
      }
   }



export default Profun1