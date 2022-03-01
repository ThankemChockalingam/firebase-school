    import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7cTe13Z92Nehcxy1QxRK6UXLLoOwtxro",
    authDomain: "schools-directory-be3e8.firebaseapp.com",
    projectId: "schools-directory-be3e8",
    storageBucket: "schools-directory-be3e8.appspot.com",
    messagingSenderId: "1071632013030",
    appId: "1:1071632013030:web:de27abfea62f38211c0d27"
  };

  firebase.initializeApp(firebaseConfig);
  

  export default firebase;