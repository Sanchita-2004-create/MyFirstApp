import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2srmlvIRpAv1uuGjx6dcJAhgbVK2dQ2w",
  authDomain: "myap-a9436.firebaseapp.com",
  projectId: "myap-a9436",
  storageBucket: "myap-a9436.firebasestorage.app",
  messagingSenderId: "585866047607",
  appId: "1:585866047607:web:340241c95814250de2d672",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut };
