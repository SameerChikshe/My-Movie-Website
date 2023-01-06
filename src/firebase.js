import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBYuKHbg21HJAT31fVUtnlBit1Etmd69l8",
  authDomain: "movie-clone-d1ce9.firebaseapp.com",
  projectId: "movie-clone-d1ce9",
  storageBucket: "movie-clone-d1ce9.appspot.com",
  messagingSenderId: "205617919368",
  appId: "1:205617919368:web:2afbb94121483247d3763d",
  measurementId: "G-V5K402VZNT"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };