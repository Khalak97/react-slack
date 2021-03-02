import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjZgNopBIoUHNTBKltaPZsZkw3EejFdlg",
  authDomain: "react-slack-6181f.firebaseapp.com",
  projectId: "react-slack-6181f",
  storageBucket: "react-slack-6181f.appspot.com",
  messagingSenderId: "721266895722",
  appId: "1:721266895722:web:52ec49221285b52f71d313",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
