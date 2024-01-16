

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_d6U6w5baLBLfJFdDLPn1k-FhY2tppgY",
  authDomain: "mira-dekor.firebaseapp.com",
  projectId: "mira-dekor",
  storageBucket: "mira-dekor.appspot.com",
  messagingSenderId: "525125481590",
  appId: "1:525125481590:web:486bf761086e6637cc1b57",
  measurementId: "G-202CV5JP8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const imgDB = getStorage(app);
const txtDB = getFirestore(app);

export {imgDB,txtDB};
export { app };






