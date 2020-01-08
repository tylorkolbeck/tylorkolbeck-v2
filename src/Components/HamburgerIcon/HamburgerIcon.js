import React from 'react'
import './HamburgerIcon.scss'

function HamburgerIcon({style, onClick}) {
    return (
        <div className="HamburgerIcon__container" style={{...style}} onClick={onClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default HamburgerIcon