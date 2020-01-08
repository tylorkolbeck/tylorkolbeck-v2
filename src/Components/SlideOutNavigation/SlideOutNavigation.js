import React from 'react'
import './SlideOutNavigation.scss'
import { Link, animateScroll as scroll } from "react-scroll";


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
