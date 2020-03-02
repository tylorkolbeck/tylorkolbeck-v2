import React, { useState, useContext } from 'react'
import './RegisterForm.scss'
import Button from '../Button/Button'
import Spinner from '../../Components/Spinner/Spinner'

import { FirebaseContext } from '../../Firebase/FirebaseContext'


const INITIAL_STATE = {
    username: 'tylor',
    email: 'tylor.kolbeck@gmail.com',
    passwordOne: '12345678',
    passwordTwo: '12345678',
    error: null,
    errors: {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: ''
    }
}

export default function RegisterForm(props) {
    const [inputState, setInputState] = useState({
        ...INITIAL_STATE
    })

    const { 
        signUpHandler, 
        registrationError, 
        registrationLoading, 
    } = useContext(FirebaseContext)

    function onSubmit(event) {
        event.preventDefault()
        const { email, passwordOne, username } = inputState
        signUpHandler(email, passwordOne, username, props.toggleModal)  
    }

    function onChange(event) {
        event.preventDefault()
        const { name, value } = event.target
        let errors = { ...inputState.errors }
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

        switch (name) {
            case 'username':
                if (value.length < 3 || value.length > 20) errors[name] = 'User Name must be between 2 and 20 characters.'
                else errors[name] = ''
                break
            case 'passwordOne':
                if (value.length < 8) errors[name] = 'Password must be atleast 8 characters long.'
                else errors[name] = ''
                break
            case 'email':
                if (!validEmailRegex.test(value)) errors[name] = 'Please enter a valid email.'
                else errors[name] = ''
                break

            default:
                console.log('UNHANDLED ERROR')
        }

        setInputState({
            ...inputState,
            [name]: value,
            errors: {
                ...errors
            }
        })
    }

    function validateForm() {
        let errors = []
        for (let key in inputState.errors) {
            if (inputState.errors[key]) {
                errors.push(<p key={key} className='input-error'>{inputState.errors[key]}</p>)
            }
        }
        return errors
    }

    function buildRegistrationUI() {
        if (registrationLoading) return (<div className='RegisterForm_spinner-container'><Spinner /></div>)
        if (!registrationLoading) return (
            <div>
                {validateForm()}
                {registrationError ? <p className='input-error'>{registrationError}</p> : null}

                <form onSubmit={onSubmit}>
                    <input
                        name='username'
                        value={inputState.username}
                        onChange={onChange}
                        type='text'
                        placeholder='Display Name' />

                    <input
                        name='email'
                        value={inputState.email}
                        onChange={onChange}
                        type='text'
                        placeholder='Email' />

                    <input
                        name='passwordOne'
                        value={inputState.passwordOne}
                        onChange={onChange}
                        type='password'
                        placeholder='Password' />


                    <input
                        name='passwordTwo'
                        value={inputState.passwordTwo}
                        onChange={onChange}
                        type='password'
                        placeholder='Confirm Password' />

                    {inputState.error && <p>{inputState.error.message}</p>}
                    <Button disabled={isInvalid} type='btn-dark' text='Register' />
                </form>
            </div>
        )
    }

    const isInvalid =
        inputState.passwordOne !== inputState.passwordTwo ||
        inputState.passwordOne === '' ||
        inputState.email === '' ||
        inputState.username === '';

    return (
        <div className='RegisterForm__container'>
            {buildRegistrationUI()}

        </div>
    )
}
