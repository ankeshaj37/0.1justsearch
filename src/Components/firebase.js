import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyACfa9mHbTj-md7_7BND2zJ7hFH-aocr-s",
  authDomain: "justsearch-304ff.firebaseapp.com",
  projectId: "justsearch-304ff",
  storageBucket: "justsearch-304ff.appspot.com",
  messagingSenderId: "748555272212",
  appId: "1:748555272212:web:afec0ebec0ea27cae56701"
};
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

export {db,auth };