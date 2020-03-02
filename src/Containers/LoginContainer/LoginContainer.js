import React, { useContext, useState, useEffect } from 'react'
import './LoginContainer.scss'
import LoginForm from '../../Components/LoginForm/LoginForm'
import useClickOutside from '../../hooks/clickOutside'
import Spinner from '../../Components/Spinner/Spinner'
import CloseSVG from '../../assets/SVG/CloseSVG/CloseSVG'
import UserToolsContainer from '../UserToolsContainer/UserToolsContainer'


import { FirebaseContext } from '../../Firebase/FirebaseContext'

export default function LoginContainer({ openRegisterModal }) {
    const [formInput, setFormInput] = useState({
        email: '',
        password: ''
    })
    
    const { loggedIn, loginHandler, isLoading, userInfo } = useContext(FirebaseContext)

    const { ref, isVisible, setIsVisible } = useClickOutside(false)

    function fieldInputChangeHandler(event) {
        setFormInput({
            ...formInput,
            [event.target.name]: event.target.value
        })
    }
    

    function buildUi() {
        if (isLoading) { return <div style={{ textAlign: 'center' }}><Spinner /><p>Loggin in...</p></div> }
        if (loggedIn) { return <UserToolsContainer /> }
        if (!loggedIn && !isLoading) {
            return <LoginForm
                loginFormInput={formInput}
                loginFormChangedHandler={fieldInputChangeHandler}
                submitHandler={() => loginHandler(formInput.email, formInput.password)}
                openRegisterModal={openRegisterModal} />
        }
    }

    // function buildLoginButtonUI() {
    //     if (isLoading) { return <div style={{ textAlign: 'center' }}><Spinner /></div> }
    //     if (loggedIn) { return <p>{userInfo().displayName}</p> }
    //     if (!loggedIn && !isLoading) { return <p>Login</p> }
    // }

    return (
        <div className={`LoginDropdown__container ${isVisible ? `LoginDropdown__content-shown` : ``}`} ref={ref}>
            <div className="LoginDropdown__shown">
                <div className={`LoginDropDown__btn-open ${isVisible ? `LoginDropdown__btn-hide` : ``}`} onClick={() => setIsVisible(!isVisible)}>{userInfo() ? userInfo().displayName : 'Login'}</div>
                <div className="LoginDropdown__content" >
                    <div className="LoginDropdown__close-btn" onClick={() => setIsVisible(false)}>
                        <CloseSVG ></CloseSVG>
                    </div>

                    {buildUi()}
                </div>
            </div>
        </div>
    )
}
