import React from 'react'
import './Section.scss'
import ScrollAnimation from 'react-animate-on-scroll';

function Section({ theme, children, title, headerCaption, style }) {
    return (
        <div id={title} className={`Section__container Section__theme-${theme}`} style={{ ...style }}>
            <ScrollAnimation animateIn="fadeIn">
                <div className='Section__header-main'>
                    <h1>{title}</h1>

                    <p className='Section__container-header-caption'>{headerCaption}</p>
                </div>
            </ScrollAnimation>


            {children}
        </div>
    )
}

export default Section