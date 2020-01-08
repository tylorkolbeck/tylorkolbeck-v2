import React from 'react'
import './About.scss'
import ScrollAnimation from 'react-animate-on-scroll';


export default function About() {
    return (
        <ScrollAnimation animateIn="fadeInUp">
        <div className='About__container'>
                <div className='About__image-container'>
                    <div className='About-img'></div>
                </div>

                <div className='About__text-container'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusantium et ipsa adipisci tempora iure ab quisquam aliquid! Voluptates perspiciatis provident excepturi maxime expedita minima asperiores, dignissimos aliquid aliquam corporis itaque fuga aperiam! Illum, quod obcaecati! Itaque veritatis odio dolor, beatae ex magnam voluptas exercitationem voluptates fugiat quasi sit praesentium.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Harum, rem. Consequatur atque, ea illum soluta natus molestiae alias labore iure cupiditate nostrum, expedita laboriosam assumenda facilis, temporibus eius voluptates a!</p>
                </div>
        </div>
        </ScrollAnimation>
    )
}
