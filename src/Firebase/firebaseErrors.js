export default function fireBaseErrors(error) {
    switch(error) {
        case 'auth/wrong-password':
            console.log('WRONG PASSWORD')
            break
        case 'auth/email-already-in-use':
            console.log('Email already in use')
            break
        case 'auth/invalid-email':
            console.log('Email already in use')
            break
        case 'auth/weak-password':
            console.log('Weak Password')
            break
        default: 
            console.log('UNCAUGHT FIREBASE ERROR')
    }
}