import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyASfed17Q8oVEP0ZIVQxlPyZZZvFBv03AM",
  authDomain: "pegobank-336af.firebaseapp.com",
  projectId: "pegobank-336af",
  storageBucket: "pegobank-336af.appspot.com",
  messagingSenderId: "837314440990",
  appId: "1:837314440990:web:4341fe6edf6bd1fecfa30f"
  }


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth (app);
  export const db = getFirestore (app);
  export const storage = getStorage(app)