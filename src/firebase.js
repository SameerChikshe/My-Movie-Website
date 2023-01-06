import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBd2Q0ZDUKFMf4PnxGLK6fWw4iG-oFXxmA",
  authDomain: "movie-app-17ffa.firebaseapp.com",
  projectId: "movie-app-17ffa",
  storageBucket: "movie-app-17ffa.appspot.com",
  messagingSenderId: "165569395641",
  appId: "1:165569395641:web:56d3d533dcf925615e1468",
  measurementId: "G-N74QH5MD38"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };