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
            }, 20)
        }
    }, [counter, startAnimation])

    return (
            <div className='Skill__container'>
                <ScrollAnimation animateIn='fadeIn' afterAnimatedIn={() => setStartAnimation(true)}>
                    <div className='Skill__content'>
                        <h1 className='Skill__content-percent'>{`${counter}%`}</h1>
                        <p className='Skill__content-name'>{name}</p>
                    </div>
                </ScrollAnimation>
            </div>



    )
}
