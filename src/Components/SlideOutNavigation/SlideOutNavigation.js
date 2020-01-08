import React from 'react'
import './SlideOutNavigation.scss'

export default function SlideOutNavigation({ links, closeMenu }) {
    return (
        <div className="SlideOutNavigation__container">
            <div className="SlideOutNavigation__close-container" onClick={closeMenu}>
                <div className="SlideOutNavigation__close-btn"></div>
            </div>
            <ul>
                {
                    links.map((link, index) => {
                        return (
                            <li key={link.text}>
                                <div>0{index + 1}</div>
                                <div>{link.text}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
