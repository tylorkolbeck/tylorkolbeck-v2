import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import './HeaderNavigation.scss'
import Error from '../Error/Error'
import LogoSVG from '../../assets/SVG/LogoSVG/LogoSVG'
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon'
import LoginDropdown from '../LoginDropdown/LoginDropdown'

function HeaderNavigation({links, toggleNavigation}) {
    function generateLinksFromProps(links) {
        return links.map(link => {
            return <li 
                    key={link.text}
                    className="HeaderNavigation__link"
                    ><Link 
                        to={link.to}
                        activeClass="Link__active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration= {500}>
                            {link.text}
                    </Link></li>
        })
    }

    return (
        <div className="HeaderNavigation__container">
            <div onClick={() => scroll.scrollToTop()}>
                <LogoSVG style={{marginLeft: '40px'}} />

            </div>
            <HamburgerIcon style={{marginRight: '40px'}} onClick={toggleNavigation}/>
            <ul>
                {links ? generateLinksFromProps(links) : <Error>No links to map</Error>}
            </ul>
            {/* <LoginDropdown /> */}
        </div>
    )
}

export default HeaderNavigation