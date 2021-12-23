import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5L-d-G8DhvriFbiXxUhc_wqjo0v7Zl-E",
  authDomain: "g-blog-6cc88.firebaseapp.com",
  projectId: "g-blog-6cc88",
  storageBucket: "g-blog-6cc88.appspot.com",
  messagingSenderId: "304812319763",
  appId: "1:304812319763:web:512ccee9956e166075cbe6"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();