import React from 'react'
import './ContactForm.scss'
import Button from '../Button/Button'

export default function ContactForm() {
    return (
        <div className='Form__container'>
            <form>
                <div>
                    <input placeholder="Name"></input>
                </div>
                <div>
                    <input placeholder="Email"></input>
                </div>
                <div>
                    <textarea placeholder="Message"></textarea>
                </div>
            </form>

        <div className="Form__button-container">
            <Button text='send' type='btn-primary'/>
        </div>
      </div>

    )
}
