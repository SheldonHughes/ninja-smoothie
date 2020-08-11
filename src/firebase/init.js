import * as firebase from 'firebase/app'
import firestore from 'firebase/firestore'

//Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB6kvXlc1CE41gurzzuY73lmUqDMvOELoU",
    authDomain: "ninja-smoothie-97289.firebaseapp.com",
    databaseURL: "https://ninja-smoothie-97289.firebaseio.com",
    projectId: "ninja-smoothie-97289",
    storageBucket: "ninja-smoothie-97289.appspot.com",
    messagingSenderId: "790941564078",
    appId: "1:790941564078:web:fbdadea9acfe2f8e5c013f",
    measurementId: "G-38ZH56FZWV"
  };

 //Initialize Firebase 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  //Export firestore database
  export default firebaseApp.firestore()