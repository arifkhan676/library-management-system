import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyCRgCosooY1-KWn8Zu8SAjwDPsGg_eeNZs",
    authDomain: "iphone-store-test-8343a.firebaseapp.com",
    projectId: "iphone-store-test-8343a",
    storageBucket: "iphone-store-test-8343a.appspot.com",
    messagingSenderId: "643407879586",
    appId: "1:643407879586:web:cad0ebe11762c0acd626fb"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider }