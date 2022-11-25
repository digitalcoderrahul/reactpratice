import React from 'react';
import PracticeconA from './PracticeconA';
import PracticeconB from'./PracticeconB';

export const MyContext = React.createContext();

class Practicalcon extends React.Component{
// constructor(){
//    super();
   state={
      name: "Rahul" , 
      count:0
   }
// }

render()
{
return(
    <div>
         <MyContext.Provider value={this.state}>
            <PracticeconA/>
            <PracticeconB/>
         </MyContext.Provider > 
    </div>
)
}

}

export default Practicalcon