import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_I2SpvkNle5gVh37Rj0NKc_W9atmfon0",
    authDomain: "crwn-db-99ae4.firebaseapp.com",
    projectId: "crwn-db-99ae4",
    storageBucket: "crwn-db-99ae4.appspot.com",
    messagingSenderId: "209364789550",
    appId: "1:209364789550:web:1f288afadb44ff7f1bb2bf"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;