import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnk-UU63cZVC1obfj8u72B0EqqMbzfb6Q",
  authDomain: "invitacion-digital-promnight.firebaseapp.com",
  projectId: "invitacion-digital-promnight",
  storageBucket: "invitacion-digital-promnight.appspot.com",
  messagingSenderId: "91083072314",
  appId: "1:91083072314:web:20dcd915af3c53b503a603"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
