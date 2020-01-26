import React, { useContext } from 'react'
import Logout from '../../Components/Logout/Logout'
import { FirebaseContext } from '../../Firebase/FirebaseContext'

export default function UserTools() {
    // const authContext = useContext(FirebaseContext)
    const {userInfo, updateUserDisplayNameHandler} = useContext(FirebaseContext)

    const {displayName, emailVerified, phoneNumber, email} = userInfo()

    return (
        <div>
            <p>{displayName ? displayName : 'Set displayname'}</p>
            <p>{email ? email : null}</p>
            <p>{phoneNumber ? phoneNumber : 'Set Phone Number'}</p>
            <p>{emailVerified ? 'Verified Account' : 'Please verify your account'}</p>
            <Logout />
        </div>
    )
}
