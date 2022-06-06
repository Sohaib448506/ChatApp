import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS5-S2IzsaD8q3o3ieCN5ZD10TshKqbl8",
  authDomain: "chat-2b75a.firebaseapp.com",
  databaseURL: "https://chat-2b75a-default-rtdb.firebaseio.com",
  projectId: "chat-2b75a",
  storageBucket: "chat-2b75a.appspot.com",
  messagingSenderId: "1080211250878",
  appId: "1:1080211250878:web:ed903e854dd19f916308ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
