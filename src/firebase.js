import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD9h0MrsMZxT7iKFU-lV2DiuXOSpJd8wHA",
    authDomain: "linkedin-clone-react-firebase.firebaseapp.com",
    projectId: "linkedin-clone-react-firebase",
    storageBucket: "linkedin-clone-react-firebase.appspot.com",
    messagingSenderId: "36823873930",
    appId: "1:36823873930:web:038daf772099d7245cf073"
};

const firebaseApp  = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth ,provider,storage };
export default db;


