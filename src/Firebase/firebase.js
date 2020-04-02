import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

/**
 *
 * @param {string} docId
 * @returns {obj | bool}
 * Gets a document from firebase by ID
 * if not found return false
 *
 */
export function getSingleDocById(docId) {
  db.collection("posts")
    .doc(docId)
    .get()
    .then(doc => {
      if (doc.exists) {
        return doc.data();
      } else {
        return false;
      }
    });
}

/**
 * @returns {array | bool}
 * If documents found return array of all docs
 * else returns false
 */
export async function getAllDocs() {
  let returnedDocs = [];

  await db
    .collection("posts")
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        returnedDocs.push(doc.data());
        // console.log(doc.data());
      });
    });

  if (returnedDocs.length > 0) {
    return returnedDocs;
  } else {
    return false;
  }
}

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
