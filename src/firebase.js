import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDzN6AQZ_VC41A-DEJ4yvL2MXsB9_GECmQ",
    authDomain: "netflix-clone-4fcd2.firebaseapp.com",
    projectId: "netflix-clone-4fcd2",
    storageBucket: "netflix-clone-4fcd2.appspot.com",
    messagingSenderId: "780895081108",
    appId: "1:780895081108:web:781d1eda09f7cb017d9a81",
    measurementId: "G-6YM88GN5SC"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };