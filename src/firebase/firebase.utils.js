import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBQ-r9yCX1Rq0alu4PF6lnzlsJkIzr_mxc",
  authDomain: "duds-db.firebaseapp.com",
  databaseURL: "https://duds-db.firebaseio.com",
  projectId: "duds-db",
  storageBucket: "duds-db.appspot.com",
  messagingSenderId: "337059489022",
  appId: "1:337059489022:web:beb59bdb3b06dc8bf371af"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  if(!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(e) {
      console.log('error creating user', e.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase