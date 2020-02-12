import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore()

firestore
  .collection('users')
  .doc('GMUK1bH8cgtRYGBFW8yz')
  .collection('cartItems')
  .doc('zdVWcwPBzPNB2RDxsqfd')

  firestore
    .doc('/users/GMUK1bH8cgtRYGBFW8yz/cartItems/zdVWcwPBzPNB2RDxsqfd')
