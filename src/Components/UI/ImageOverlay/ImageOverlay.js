import React from 'react'
import './ImageOverlay.scss'

// Parent container must have position set to relative

function ImageOverlay({color, opacity, style}) {
    function makeOverlay(color, opacity) {
        if (color) {
            return `rgba(${color[0]},${color[1]},${color[2]}, ${opacity})`
        } else {
            return `rgba(0,0,0, ${opacity})`
        } 
    }


    return (
        <div className="ImageOverlay__container" style={{backgroundColor: makeOverlay(color,opacity), ...style}}>
        </div>
    )
}

export default ImageOverlay