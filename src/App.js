import React from 'react';
import './App.css';
import firebase from 'firebase';
import 'firebase/database';
import "./bootstrap-4.3.1-dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import NoteForm from "./components/NoteForm"
import NoteItem from "./components/NoteItem"
var firebaseConfig = {
  apiKey: "AIzaSyC6OH3f6TD-y3XIcRk2zQWQ2J64DaZpU5I",
  authDomain: "my-note-app-8edfd.firebaseapp.com",
  databaseURL: "https://my-note-app-8edfd.firebaseio.com",
  projectId: "my-note-app-8edfd",
  storageBucket: "my-note-app-8edfd.appspot.com",
  messagingSenderId: "53078311775",
  appId: "1:53078311775:web:171a4d3d41ea3b46"
};
class App extends React.Component {
  constructor(props){
    super(props)
    this.app = firebase.initializeApp(firebaseConfig)
  this.database = this.app.database().ref().child('notes')
     // We're going to setup the React state of our component
  this.state ={
    notes : []
  }
  
  }
  componentDidMount(){
  const previousNotes = this.state.notes
  // DataSnapshot
  this.database.on('child_added', snap => {
    previousNotes.push({
      id: snap.key,
      noteTitle: snap.val().noteTitle,
      notePrag: snap.val().notePrag,
    })
    this.setState({
      notes : previousNotes
    })
  })

  this.database.on('child_removed', snap =>{
    for(var i=0;i < previousNotes.length; i++){
      previousNotes.splice(i,1);
    }
    this.setState({
      notes : previousNotes
    })
  })
}
addNote(newNoteTitle , newNotePrag){
  this.database.push().set({ noteTitle: newNoteTitle,  notePrag : newNotePrag})
 
}
removeNote(noteId){
  this.database.child(noteId).remove()
}
  render(){
    return(
      <div>
        <NavBar />
        <NoteForm addNote={this.addNote} />
        <div>
        {
            this.state.notes.map((note) => {
              return (
                <NoteItem noteTitle={note.noteTitle} 
                notePrag = {note.notePrag}
                noteId={note.id} 
                key={note.id} 
                removeNote ={this.removeNote}/>
              )
            })
          }
          </div>      
        <Footer />
      </div>
    )
  }
}

export default App;
