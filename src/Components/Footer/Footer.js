import React from 'react'
import { animateScroll as scroll } from "react-scroll";

import './Footer.scss'
import UpArrowSVG from '../../assets/SVG/UpArrowSVG/UpArrowSVG'

export default function Footer() {
    return (
        <footer className='Footer__container'>
            <div 
                onClick={() => {scroll.scrollToTop()}}
                className='Footer__UpArrow-box' >
                <UpArrowSVG />
            </div>

            <div className='Footer__content-container'>
                <div style={{background: '#323232', padding: '10px', color: 'lightgrey'}}>
                    <h1>Thanks <br />For Visiting!</h1>
                    <p style={{maxWidth: '300px'}}>This site was created using React and and a firebase database.</p>
                </div>

                 <div>
                    <h2>NAVIGATION</h2>
                    <ul className="noStyle">
                        <li>WORK</li>
                        <li>SKILLS</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                        <li>BLOG</li>
                    </ul>
                </div>

                <div>
                    <h2>LOCATION</h2>
                    <p>San Diego, CA 92107</p>
                    </div>

                    <div>
                    <h2>Contact Info</h2>
                    <p>Email: TylorKolbeck@gmail.com</p>
                    <p>Cell: (904)955-4553</p>
                    </div>

                    <div>
                    <h2>GitHub</h2>
                    <p>https://github.com/tylorkolbeck</p>
                </div>
            </div>
        </footer>
    )
}
