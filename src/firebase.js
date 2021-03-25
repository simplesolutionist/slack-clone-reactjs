import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCm6MePlcmpw8DxvGtvEQUg7oJZhDptikA",
    authDomain: "slack-clone-challenge-6207b.firebaseapp.com",
    projectId: "slack-clone-challenge-6207b",
    storageBucket: "slack-clone-challenge-6207b.appspot.com",
    messagingSenderId: "447929653171",
    appId: "1:447929653171:web:003410749af879c87f9dc6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db;
