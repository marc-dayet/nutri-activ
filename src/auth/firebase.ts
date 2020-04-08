import firebase from "firebase/app"
import "firebase/auth"

import {decodeStep} from "../modules/context"
import {auth$} from "./context"

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
})

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    auth$.next({
      type: "authenticated",
      email: user.email || "",
      name: user.displayName || "",
      lastStep: decodeStep(user.photoURL || "0.1.1"),
    })
  } else {
    auth$.next({type: "not-authenticated"})
  }
})

export default firebase.auth()
