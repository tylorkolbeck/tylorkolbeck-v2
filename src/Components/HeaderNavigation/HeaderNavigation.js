import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { withRouter, Link as RouterLink, useHistory } from 'react-router-dom'

import './HeaderNavigation.scss'
import Error from '../Error/Error'
import LogoSVG from '../../assets/SVG/LogoSVG/LogoSVG'
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon'
import BackArrowSVG from '../../assets/SVG/BackArrowSVG/BackArrowSVG'

function HeaderNavigation({ links, toggleNavigation }) {
    let history = useHistory()

    function generateLinksFromProps(links) {
        if (history.location.pathname === '/' || history.location.pathname === '') {
            return links.map(link => {
                return <li
                    key={link.text}
                    className="HeaderNavigation__link"
                >
                    <Link
                        to={link.to}
                        activeClass="Link__active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        {link.text}
                    </Link>
                </li>
            })
        } else {
            // If not on the home page the only place to go is back
            return <li className="HeaderNavigation__link" style={{display: 'flex'}} onClick={() => history.goBack()}><BackArrowSVG height='20px' />Back</li>
        }
    }

    return (
        <div className="HeaderNavigation__container">
            <div onClick={() => scroll.scrollToTop()}>
                <RouterLink to='/'><LogoSVG style={{ marginLeft: '40px' }} /></RouterLink>
            </div>
            {history.location.pathname === '/' || '' ? 
                <HamburgerIcon style={{ marginRight: '40px' }} onClick={toggleNavigation} /> 
                : <div className="mobileBackButton" onClick={() => history.goBack()}><BackArrowSVG height='20px' />Back</div>}
            
            <ul>
                {links ? generateLinksFromProps(links) : <Error>No links to map</Error>}
            </ul>
            {/* <LoginDropdown /> */}
        </div>
    )
}

export default withRouter(HeaderNavigation)