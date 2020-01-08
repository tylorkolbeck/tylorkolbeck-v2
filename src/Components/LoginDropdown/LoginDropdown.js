import React from 'react'
import './LoginDropdown.scss'
import Button from '../Button/Button'

export default function LoginDropdown() {
    return (
        <div className="LoginDropdown__container" >
            <div className="LoginDropdown__shown">

                <div className="LoginDropDown__btn-open"><p>LOGIN</p></div>

                <div className="LoginDropdown__content" >
                    <div className="LoginDropdown__input-container">
                        <input placeholder="Email"></input>
                        <input placeholder="Password"></input>
                        <Button text="Login" />
                        <div className="LoginDropdown__input-text">
                            <p>Register</p>
                            <p>Reset Password</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
