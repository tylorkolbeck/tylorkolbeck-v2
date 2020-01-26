import React, { useContext } from 'react'
import { FirebaseContext } from '../../Firebase/FirebaseContext'
import Button from '../../Components/Button/Button'

export default function Logout() {
    const {logoutHandler} = useContext(FirebaseContext)

    return (
        <div>
            <Button type="btn-dark" text='Logout' onClick={logoutHandler} />
        </div>
    )
}
