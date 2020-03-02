export default function fireBaseErrors(error) {
    switch(error) {
        case 'auth/wrong-password':
            return 'User credentials do not match our records.'
        case 'auth/invalid-email':
            return 'Invalid email format'
        case 'auth/weak-password':
            return 'Weak password.'
        case 'auth/email-already-in-use':
            return 'The email is already in use.'
        default: 
            return 'There was an error creating the account.'
    }
}