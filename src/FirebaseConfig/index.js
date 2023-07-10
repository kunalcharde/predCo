import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCqjZdN2U-FSCUwDd-jT_QNk2HjQ7sZ1TE",
    authDomain: "predco-142f2.firebaseapp.com",
    projectId: "predco-142f2",
    storageBucket: "predco-142f2.appspot.com",
    messagingSenderId: "1072519904341",
    appId: "1:1072519904341:web:080c963c528fbb815368dc",
    measurementId: "G-VT43YHLCKW"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);