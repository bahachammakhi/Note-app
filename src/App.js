import React , {Component}from 'react';
import './App.css';
import firebase from 'firebase';
import app from 'firebase/app'
import 'firebase/database';
import "./bootstrap-4.3.1-dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Note from './components/Note';
import NoteForm from './components/NoteForm';
var firebaseConfig = {
  apiKey: "AIzaSyC6OH3f6TD-y3XIcRk2zQWQ2J64DaZpU5I",
  authDomain: "my-note-app-8edfd.firebaseapp.com",
  databaseURL: "https://my-note-app-8edfd.firebaseio.com",
  projectId: "my-note-app-8edfd",
  storageBucket: "my-note-app-8edfd.appspot.com",
  messagingSenderId: "53078311775",
  appId: "1:53078311775:web:171a4d3d41ea3b46"
};
class App extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database().ref().child('notes');

    // We're going to setup the React state of our component
    this.state = {
      notes: [],
      loading : false,
    }
  }

  componentWillMount(){
   
    const previousNotes = this.state.notes;

    // DataSnapshot
    this.database.on('child_added', snap => {
      this.setState({loading: true})
      previousNotes.push({
        id: snap.key,
        noteTitle: snap.val().noteTitle,
        notePrag: snap.val().notePrag,
      })

      this.setState({
        notes: previousNotes,
        
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote(note,note1){
    this.database.push().set({ noteTitle: note, notePrag : note1});
  }

  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }

  render() {
    const noteitem = this.state.notes.map((note) => {
      return (
        <Note noteTitle={note.noteTitle} 
        notePrag={note.notePrag} 
        noteId={note.id} 
        key={note.id} 
        removeNote ={this.removeNote}/>
      )
    })
    const loading = <h1 className="text-danger">Loading</h1>
    const Affiche = this.state.loading ? noteitem : loading 
    return (
      <div>
         <NavBar />
        <div className="container">
         <div className="row " >
         <div className=" w-25 col align-self-center"> <NoteForm addNote={this.addNote} /> </div>
         </div>
         <div className="row">
         <div className=" mt-3 mb-3 col align-self-center" >
           {Affiche}
         </div>
         
           </div> 
           
        </div>
         
          <Footer />
      </div>
     
        
     
    );
  }
}

export default App;
