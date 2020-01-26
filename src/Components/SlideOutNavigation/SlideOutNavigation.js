import React from 'react'
import './SlideOutNavigation.scss'
import { Link } from 'react-scroll'


export default function SlideOutNavigation({ links, closeMenu, menuIsOpen}) {  

    return (
        <div className={`SlideOutNavigation__container ${menuIsOpen ? `SlideOutNavigation__container-open`: `SlideOutNavigation__container-closed `}`}>
            <div className="SlideOutNavigation__close-container">
                <div className="SlideOutNavigation__close-btn" onClick={closeMenu}></div>
            </div>
            <ul>
                {
                    links.map((link, index) => {
                        return (
                            <li key={link.text}>
                                <div>0{index + 1}</div>
                                <Link to={link.to}
                                    activeClass="Link__active"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration= {800}>
                                        <div className="SlideOutNavigation__menu-link" onClick={closeMenu}>{link.text}</div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
