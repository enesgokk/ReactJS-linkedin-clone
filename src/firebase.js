import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAefQrygfVfJGm_aKvxoG8IcwcJfeoIl5k",
  authDomain: "linkedin-clone-c14ae.firebaseapp.com",
  projectId: "linkedin-clone-c14ae",
  storageBucket: "linkedin-clone-c14ae.appspot.com",
  messagingSenderId: "82014258743",
  appId: "1:82014258743:web:3824c269757338abd6a1b2"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};