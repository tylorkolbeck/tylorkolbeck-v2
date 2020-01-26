import React, { createContext, useState, useEffect } from 'react'
import firebase from './firebase'
import firebaseErrors from './firebaseErrors'

export const FirebaseContext = createContext()

// firebase.firestore().collection('times').add({
//     title: 'Rubik Cube',
//     time: 45
// })

function onAuthStateChange(callback) {
    return firebase.auth().onAuthStateChanged(user => {
        if (user) {
            callback({ loggedIn: true })
        } else {
            callback({ loggedIn: false })
        }
    })
}

export default function FirebaseContextProvider(props) {
    const [user, setUser] = useState({ loggedIn: false })
    const [isLoading, setIsLoading] = useState(false)

    function loginHandler(email, password) {
        setIsLoading(true)
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            setIsLoading(false)
        })

        .catch(err => {
            setIsLoading(false)
            firebaseErrors(err.code)
        })
    }

    function userInfo() {
        return firebase.auth().currentUser
    }

    function logoutHandler() {
        firebase.auth().signOut()
    }

    function signUpHandler(email, password, displayName) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            return res.user.updateProfile({
                displayName: displayName
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    function updateUserDisplayNameHandler(value) {
        let user = firebase.auth().currentUser
        user.updateProfile({
            displayName: value
        })

    }

    React.useEffect(() => {
        const unsubscribe = onAuthStateChange(setUser)
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <FirebaseContext.Provider value={{
            loggedIn: user.loggedIn,
            loginHandler,
            logoutHandler,
            signUpHandler,
            isLoading,
            userInfo,
            updateUserDisplayNameHandler
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
