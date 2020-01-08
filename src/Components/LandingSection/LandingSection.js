import React from 'react'
import { Markup } from 'interweave'
import ScrollAnimation from 'react-animate-on-scroll';


import './LandingSection.scss'
import HeaderImage from '../../assets/images/LandingSectionImage1.jpg'
import ImageOverlay from '../UI/ImageOverlay/ImageOverlay'
import Button from '../Button/Button'

function LandingSection({introText}) {
    return (
        <div className="LandingSection__container" style={{backgroundImage: `url(${HeaderImage})`}}>
            <div>
                <ScrollAnimation animateIn="fadeInLeft" animateOnce>
                    <div className="LandingSection__content-header">
                        <Markup content={introText} />
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" animateOnce>
                    <div className="LandingSection__actionButtons">
                        <Button text='View Resume'></Button>
                    </div>
                </ScrollAnimation>
            </div>
            <ImageOverlay opacity={.5}/>

        </div>
    )
}

export default LandingSection