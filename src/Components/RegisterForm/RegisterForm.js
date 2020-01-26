import React, { useState, useContext } from 'react'
import './RegisterForm.scss'
import Button from '../Button/Button'

import { FirebaseContext } from '../../Firebase/FirebaseContext'


const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
}

export default function RegisterForm(props) {
    const [inputState, setInputState] = useState({
        ...INITIAL_STATE    
    })

    const { isLoggedIn, signUpHandler } = useContext(FirebaseContext)

    function onSubmit(event) {
        event.preventDefault()
        const { email, passwordOne } = inputState
        signUpHandler(email, passwordOne)
    }

    function onChange(event) {
        setInputState({
            ...inputState,
            [event.target.name]: event.target.value
        })
    }

    const isInvalid = 
        inputState.passwordOne !== inputState.passwordTwo || 
        inputState.passwordOne === '' ||
        inputState.email === '' ||
        inputState.username === '';

    return (
        <div className='RegisterForm__container'>
            <form onSubmit={onSubmit}>
                <input
                    name='username'
                    value={inputState.username}
                    onChange={onChange}
                    type='text'
                    placeholder='Name' />

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
{/* 
                <button disabled={isInvalid} type="submit">
                    Register
                </button> */}

                <Button disabled={isInvalid} text='Register'>

                </Button>
            </form>
        </div>
    )
}
