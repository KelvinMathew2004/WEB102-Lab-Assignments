import React from "react";

const Event = (props) => {
    return (
        <td className={'Event ' + props.color}>
            <h5 style={{ margin: '5px 0 10px 0' }}>{props.event}</h5>
            <h6 style={{ margin: '0 0 10px 0' }}>{props.location}</h6>
        </td>
    )
}

export default Event;