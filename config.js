const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDa24owDWaACCbg4-pqjSkWvvam9KWp5bQ",
  authDomain: "todo-list-9ba5e.firebaseapp.com",
  projectId: "todo-list-9ba5e",
  storageBucket: "todo-list-9ba5e.appspot.com",
  messagingSenderId: "69471139735",
  appId: "1:69471139735:web:253c6a405a70dabe1676d2"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Todo = db.collection("todos");
module.exports = Todo;
