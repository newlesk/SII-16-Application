import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCypcN_3IetULS6V8-BQ9FzjLazZAIDuSQ",
  authDomain: "mywebsite-7ab79.firebaseapp.com",
  projectId: "mywebsite-7ab79",
  storageBucket: "mywebsite-7ab79.appspot.com",
  messagingSenderId: "17995190475",
  appId: "1:17995190475:web:ec92d56e81c0792f69cb4e"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
