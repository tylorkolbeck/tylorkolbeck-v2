import React from 'react'

function Error(props) {
    return ( 
    <div style={{color: 'red'}}><p>{props.children}</p></div>
    )
}

export default Error