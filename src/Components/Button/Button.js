import React from 'react'
import './Button.scss'

/**
 * 
 * @param {string} text what is displayed on the button 
 */

export default function Button({text}) {
    return (
        <div className="Button" data-text={text}>
            <p>{text}</p>
        </div>
    )
}
