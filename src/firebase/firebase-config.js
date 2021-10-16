import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCQV1OefHul2HsFUn1k3zkc8KxmqRsJd8Y",
    authDomain: "curso-udemy-login-redux.firebaseapp.com",
    projectId: "curso-udemy-login-redux",
    storageBucket: "curso-udemy-login-redux.appspot.com",
    messagingSenderId: "306023806319",
    appId: "1:306023806319:web:ac994bbeee3a5fe9c5e49a"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
}