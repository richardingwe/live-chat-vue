import firebase from './firebase/app';
import './firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCoQrdIgji8JEJf1XXkrmpA7UBZ_6WFd_0",
    authDomain: "vue-js-firebase-chat.firebaseapp.com",
    projectId: "vue-js-firebase-chat",
    storageBucket: "vue-js-firebase-chat.appspot.com",
    messagingSenderId: "16496595583",
    appId: "1:16496595583:web:1424143cc215d5bcbc254a"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };