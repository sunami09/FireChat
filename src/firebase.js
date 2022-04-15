import firebase from "firebase/app";

import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCUPBDLt187BKSlZ2FRcq0wPEVr3LGQo48",
    authDomain: "unichat1-36fe8.firebaseapp.com",
    projectId: "unichat1-36fe8",
    storageBucket: "unichat1-36fe8.appspot.com",
    messagingSenderId: "24974363320",
    appId: "1:24974363320:web:1955e5e915ad36daa2024d"
}).auth();

