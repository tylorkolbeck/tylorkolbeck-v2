import React from 'react'
import './Section.scss'
import ScrollAnimation from 'react-animate-on-scroll'
import { Markup } from 'interweave'
import ReactHtmlParser from 'react-html-parser'
import {Link} from 'react-router-dom'

function Section({ theme, children, title, headerCaption, style }) {
    return (
        <div id={title} className={`Section__container Section__theme-${theme}`} style={{ ...style }}>
            <ScrollAnimation animateIn="fadeIn">
                <div className='Section__header-main'>
                    <h1 className='Section__header-title'>{title}</h1>
                    <div className='Section__container-header-caption'>
                        {headerCaption}
                    </div>
                </div>
            </ScrollAnimation>


            {children}
        </div>
    )
}

export default Section