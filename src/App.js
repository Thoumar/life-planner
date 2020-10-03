import React from 'react';

import './App.css';
import firebase from "firebase";

import AppContainer from './Container/AppContainer';

var firebaseConfig = {
  apiKey: "AIzaSyBWPs71OtxnLLzcTp9ugbZq6-3SGuKA6KY",
  authDomain: "life-planner-5f07d.firebaseapp.com",
  databaseURL: "https://life-planner-5f07d.firebaseio.com",
  projectId: "life-planner-5f07d",
  storageBucket: "life-planner-5f07d.appspot.com",
  messagingSenderId: "509027518692",
  appId: "1:509027518692:web:fa202bdde3dde50fcb84f1"
};

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <AppContainer />
    </div>
  );
}

export default App;
