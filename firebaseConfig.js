import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "*******************************",
    authDomain: "todo-list-c1bbe.firebaseapp.com",
    projectId: "todo-list-c1bbe",
    storageBucket: "todo-list-c1bbe.appspot.com",
    messagingSenderId: "**************",
    appId: "***********************",
    measurementId: "***********"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };
