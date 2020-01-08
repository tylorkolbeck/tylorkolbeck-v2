import React from 'react'
import './LogoSVG.scss'

function LogoSVG({style}) {
    return (
        <svg 
            className="LogoSVG"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"      
            x="0px" y="0px" 
            width="40.35px"
            height="33.78px" viewBox="0 0 30.35 23.78"
            style={{...style}}>

            <path 
                d="M30.35,23.78h-6.42l-7.61-9.34l-3.19,3.33v6.01h-0.01H7.66H7.61V4.48H0V0h7.66h5.47v4.48v6.63l6.28-6.63l1.32-1.39L23.66,0
                h6.11l-9.85,10.6L30.35,23.78z"/>
          </svg>
    )
}

export default LogoSVG