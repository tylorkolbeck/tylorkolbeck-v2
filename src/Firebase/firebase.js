import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore' 
import firebaseConfig from './firebaseConfig'


firebase.initializeApp(firebaseConfig)




export default firebase;


// function signUpHandler(email, password) {
//   firebase.doCreateUserWithEmailAndPassword(email, password)
// }

// function signInHandler(email, password) {
//   firebase.doSignInWithEmailAndPassword(email, password)
//       .then((res) => {
//           setAuthData({
//               ...authData,
//               isLoggedIn: true
//           })
//       })

//       .catch((err) => setAuthData({
//           ...authData,
//           error: err.code
//       }))
// }
