import firebase, { initializeApp } from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBdOSTPVz6mM2hVwc17vLF-MN-ZPjF5r_o",
    authDomain: "crown-db-e7f18.firebaseapp.com",
    databaseURL: "https://crown-db-e7f18.firebaseio.com",
    projectId: "crown-db-e7f18",
    storageBucket: "crown-db-e7f18.appspot.com",
    messagingSenderId: "376282255868",
    appId: "1:376282255868:web:e4e9a63bc8cfb418072279"
  }


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

