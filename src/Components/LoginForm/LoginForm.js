import React from 'react'
import './LoginForm.scss'
import Button from '../Button/Button'


export default function LoginForm({ loginFormInput, loginFormChangedHandler, submitHandler, openRegisterModal }) {

    function formSubmitHandler(event) {
        event.preventDefault()
        submitHandler()
    }

    return (
        <form>
            <input placeholder="Email" value={loginFormInput.email} name='email' onChange={loginFormChangedHandler}></input>
            <input placeholder="Password" value={loginFormInput.password} name='password' type='password' onChange={loginFormChangedHandler}></input>

            <Button text="Login" type='btn-dark' onClick={formSubmitHandler} />

            <div className="LoginDropdown__input-container">
                <div className="LoginDropdown__input-text">
                    <p onClick={openRegisterModal}>Register</p>
                    <p>Forgot Password</p>
                </div>
            </div>
        </form>


    )
}

