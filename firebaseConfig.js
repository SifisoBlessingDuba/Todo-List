import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2FvHpxOJotUzSDcV2lbfqddqEPNowX2Q",
    authDomain: "todo-list-c1bbe.firebaseapp.com",
    projectId: "todo-list-c1bbe",
    storageBucket: "todo-list-c1bbe.appspot.com",
    messagingSenderId: "1048262405965",
    appId: "1:1048262405965:web:b204cd35dbaf3f509f9204",
    measurementId: "G-5PX5T13Z79"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };
