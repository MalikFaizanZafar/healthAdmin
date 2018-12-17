import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

// Add your Firebase configuration here
var config = {
  apiKey: "AIzaSyAZod50Hf73QnxMiNiKKrPmK3FQarxDxXk",
  authDomain: "healthfyp-4812c.firebaseapp.com",
  databaseURL: "https://healthfyp-4812c.firebaseio.com",
  projectId: "healthfyp-4812c",
  storageBucket: "healthfyp-4812c.appspot.com",
  messagingSenderId: "282009205775"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export const Storage = firebase.storage()
StoreDB.settings({ timestampsInSnapshots: true });
export default firebase
