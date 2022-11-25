import React from 'react'
import {Context} from './ContextlongA'

class ContextlongB extends React.Component{

render()
{
    return(
        <div>
        <Context.Consumer>
            {data=><h1>{data.name}</h1>}
        </Context.Consumer>
        </div>
    )
}
}

export default ContextlongB