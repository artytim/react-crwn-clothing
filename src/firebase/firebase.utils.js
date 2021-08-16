import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDMSxexGbGMhkQYgoHnpPbhHl6GJlDdRdA',
  authDomain: 'arty-crwn-db.firebaseapp.com',
  projectId: 'arty-crwn-db',
  storageBucket: 'arty-crwn-db.appspot.com',
  messagingSenderId: '838799923290',
  appId: '1:838799923290:web:6926a1139a7f9e8de5a063',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
