import React from 'react'
import './About.scss'
import reactHtmlParser from 'react-html-parser'
import ScrollAnimation from 'react-animate-on-scroll';


export default function About() {
    return (
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <div className='About__container'>
                <div className='About__image-container'>
                    <div className='About-img'></div>
                </div>

                <div className='About__text-container'>
                    {reactHtmlParser(`Hello, my name Is Tylor. I live in San Diego with my wife Kaila, two dogs Reuger and Willow, and Nanday Conure, Pitrie. I am a 12 year Navy veteran that has changed careers to pursue my dream of being a web developer.  I currently work remote at Jack Henry And Assosciates as a Senior UI/UX Developer. `)}
                </div>
            </div>
        </ScrollAnimation>
    )
}
