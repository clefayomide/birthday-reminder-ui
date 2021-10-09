import React from 'react'

const ClearBtn = (props) => {
    return (
        <>
         <button className="clear-btn" onClick={props.onClick}>Clear All</button>   
        </>
    )
}

export default ClearBtn
