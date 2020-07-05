import 'firebase/firestore';
import 'firebase/auth';

import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyCAToSY9m99Ehqlo7B0k3bHvU19-aSUiLk",
    authDomain: "crown-db-6d150.firebaseapp.com",
    databaseURL: "https://crown-db-6d150.firebaseio.com",
    projectId: "crown-db-6d150",
    storageBucket: "crown-db-6d150.appspot.com",
    messagingSenderId: "133787751983",
    appId: "1:133787751983:web:b48cca5858c851cd0758da"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
