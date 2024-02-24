import React from "react";

const Event = (props) =>{
    return(
        <>
        <td className={'Event ' + props.color}>
            <p>{props.event}</p>
         
        </td>
        </>
    )
  
}

export default Event;