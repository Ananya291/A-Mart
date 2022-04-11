import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClFlORNiqV-TRke7R31eGGIVZMXBaS1Ms",
  authDomain: "a-mart1.firebaseapp.com",
  projectId: "a-mart1",
  storageBucket: "a-mart1.appspot.com",
  messagingSenderId: "87606616582",
  appId: "1:87606616582:web:22664f38a73d958a4b1987",
  measurementId: "G-1S2LDTK7JY"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };