import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg-JLADXFfI-Ujp2AIu_JovSSfEuF6OFA",
  authDomain: "linkedin-clone-d4aaf.firebaseapp.com",
  projectId: "linkedin-clone-d4aaf",
  storageBucket: "linkedin-clone-d4aaf.appspot.com",
  messagingSenderId: "716743425857",
  appId: "1:716743425857:web:12b44823b37066922aebc0",
  measurementId: "G-2PV5CC4E7Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
