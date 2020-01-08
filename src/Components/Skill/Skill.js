import React, { useState, useEffect } from 'react'
import './Skill.scss'
import ScrollAnimation from 'react-animate-on-scroll';

export default function Skill({ percent, name, delay }) {
    const [counter, setCounter] = useState(0)
    const [startAnimation, setStartAnimation] = useState(false)


    useEffect(() => {
        if (startAnimation) {
            setTimeout(() => {
                if (counter < percent) {
                    setCounter(counter + 2)
                }
            }, 20);
        }



        // return () => window.clearInterval(countUp)

    }, [counter, startAnimation])

    return (
        <div className='Skill__container'>
            <div className='Skill__content'>
                <ScrollAnimation delay={delay} animateIn="fadeInUp" animateOnce duration={.5} afterAnimatedIn={() => setStartAnimation(true)}>
                    <h1 className='Skill__content-percent'>{`${counter}%`}</h1>
                </ScrollAnimation>
                <p className='Skill__content-name'>{name}</p>
            </div>
        </div>



    )
}
