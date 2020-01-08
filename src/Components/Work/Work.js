import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import './Work.scss'


export default function Work({ index, title, text, img }) {

    // CREATE IMAGE CONTEXT TO SET IMAGE TO BACKGROUND

    return (
        <ScrollAnimation animateIn="fadeInRight" animateOnce>
            <div className="Work__container">
                <div className="Work__header">
                    <div><h1>0{index}</h1></div>
                    <div className="Work__header-line"></div>
                </div>

                <div className="Work__content_container">
                    <div></div>

                    <div className="Work__content">
                        <div className="Work__content-text">
                            <h1>{title}</h1>
                            <p>{text}</p>
                        </div>

                        <div className="Work__content-img">

                        </div>


                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}
