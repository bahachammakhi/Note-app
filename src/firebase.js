import firebase from "firebase"
var config = {
    apiKey: "AIzaSyC6OH3f6TD-y3XIcRk2zQWQ2J64DaZpU5I",
    authDomain: "note-tasks.web.app",
    databaseURL: "https://my-note-app-8edfd.firebaseio.com",
    projectId: "my-note-app-8edfd",
    storageBucket: "my-note-app-8edfd.appspot.com",
    messagingSenderId: "53078311775",
    appId: "1:53078311775:web:171a4d3d41ea3b46"
  };
const Firebase = firebase.initializeApp(config);
export default Firebase