import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
apiKey: "AIzaSyBTVeRVh_sdU7fCMK7TfxDOiYZ0a-yjqJE",
authDomain: "ninja-smoothies-7287f.firebaseapp.com",
projectId: "ninja-smoothies-7287f",
storageBucket: "ninja-smoothies-7287f.appspot.com",
messagingSenderId: "763700589230",
appId: "1:763700589230:web:623da4b88ba5775bfe333f"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()