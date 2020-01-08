import React from 'react'
import './Card.scss'
import ScrollAnimation from 'react-animate-on-scroll';


export default function Card({ index, title, text, delay }) {
    return (
        <ScrollAnimation animateIn="fadeInRight" animateOnce delay={delay}>
            <div className='Card__container'>
                <div className='Card__index-container'>
                    <h1>{`0${index}`}</h1>
                </div>

                <div className='Card__content-container'>
                    <div className='Card__image-container' ></div>
                    <div className='Card__text'>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </ScrollAnimation>

    )
}
