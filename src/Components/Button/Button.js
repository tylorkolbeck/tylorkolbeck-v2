import React from 'react'
import './Button.scss'

/**
 * 
 * @param {string} text what is displayed on the button 
 * @param {function} onClick What to do when the button is clicked
 */

export default function Button({text, onClick, disabled, type}) {
    return (
        <div className={`Button ${type}`} data-text={text} onClick={onClick} >
            <button disabled={disabled}>{text}</button>
        </div>
    )
}
