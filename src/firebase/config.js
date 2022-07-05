import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAYNJam2yb3MoFhJSlO0oBRaSNDfJBRM0Q",

//   authDomain: "sratatatata-4fe97.firebaseapp.com",

//   projectId: "sratatatata-4fe97",

//   storageBucket: "sratatatata-4fe97.appspot.com",

//   messagingSenderId: "457032622684",

//   appId: "1:457032622684:web:df72f9fd650ffe6413bc99",
// };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTJ_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

initializeApp(firebaseConfig);
const db = getFirestore();

export {db};
