import React from "react";

class Profun extends React.Component
{
    render()
    {
        return(
            <div className="text-center">
                <button>My Name is : {this.props.data} </button>
            </div>
        )
    }
}

export default Profun