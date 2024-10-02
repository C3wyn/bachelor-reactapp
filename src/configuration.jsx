// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your Firebase config here
const firebaseConfig = {
    apiKey: "AIzaSyASNydrjCG1rUw-xRh6OsH1a0ZIf6Olnuo",
    authDomain: "test-282c1.firebaseapp.com",
    projectId: "test-282c1",
    storageBucket: "test-282c1.appspot.com",
    messagingSenderId: "365848357392",
    appId: "1:365848357392:web:073b8f01b4410359227895",
    measurementId: "G-S68HNG1N72"
  };

// Initialize Firebase
 const cong = initializeApp(firebaseConfig);
 const database = getFirestore(cong);
 const storage = getStorage(cong);

export {
  database,
  cong,
  storage
}