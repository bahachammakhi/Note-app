import React , {Component}from 'react';
import './App.css';
import firebase from 'firebase';
import "@material-ui/core"
import app from 'firebase/app'
import 'firebase/database';
import "./bootstrap-4.3.1-dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Note from './components/Note';
import NoteForm from './components/NoteForm';
import {UnmountClosed} from 'react-collapse';
import SimpleModal from "./components/SimpleModal"
import SideNav from './components/SideNavBar';
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
    this.permission = this.permission.bind(this)
    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database().ref().child('notes');

    // We're going to setup the React state of our component
    this.state = {
      notes: [],
      loading : false,
      permission : true,
      open : false,
      openNav : "",
      main : "",
      noteO : true,
      todoOpen : false,
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
        noteTimeAdded: snap.val().noteTimeAdded,
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

  addNote(note,note1,note2){
    this.database.push().set({ noteTitle: note, notePrag : note1 , noteTimeAdded : note2});
  }

  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.database.child(noteId).remove();
  }
  permission(){
    let name = prompt('give me your name')
    let password = prompt('give me your password')
     name == "owner" && password == "baha" ? this.setState({permission : true , name : name}) : this.setState({permission : false, name : name})
    
   

  }
  handleCloseNoteform=() =>{
    this.setState({
      open: false
    })
    
  }
handleNav=()=>{
  this.setState({openNav : "push",main :"pushmain"})
}
closeNav=()=>{
  this.setState({openNav:"",main:""})
}
handleTodoComponent = () =>{
  this.setState({
    noteO : false,
    todoOpen : true
  })
}
handleNoteComponent = () =>{
  this.setState({
    noteO : true,
    todoOpen :false
  })
}
  render() {
    const noteitem = this.state.notes.map((note) => {
      return (
        <div className="col">

            <Note noteTitle={note.noteTitle} 
        notePrag={note.notePrag} 
        noteTimeAdded={note.noteTimeAdded}
        noteId={note.id} 
        key={note.id} 
        removeNote ={this.removeNote}/>
        </div>
      
      )
    })
    const loading = <div className="spinner-border"></div>
    const Affiche = this.state.loading ? <div className="card-columns" > {noteitem}</div>  : loading 
    return (
      <div className="body">
         <div className="sidenav" >  
      <SideNav openNav={this.state.openNav} note={this.handleNoteComponent} todo={this.handleTodoComponent} />
        </div> 
        <NavBar openNav={this.handleNav} closeNav={this.closeNav} open={this.state.openNav} />
       <UnmountClosed isOpened={this.state.noteO}>
        <div className="notePage"  className={this.state.main} onClick={this.closeNav} >
        <div className="container">
         <div className="row " >
         <div className=" w-25 col align-self-center"> <SimpleModal handleCloseNoteform={this.handleCloseNoteform} open={this.state.open} addNote={this.addNote} /></div>
         </div>
         <div  className=" margin mb-3 col  " >
          {Affiche}
         </div>
         </div>

         
          
<div className="stickybtn "> 
              <button
            className="btn btn-danger mb-3" 
            onClick={()=>{this.setState({open:true})}} 
            ><i class="fas fa-plus"></i>
            </button>
        

           </div>
           
        
        </div>
        </UnmountClosed>
        <UnmountClosed isOpened={this.state.todoOpen} >
        <div className="todolist" className={this.state.main} onClick={this.closeNav} >
    <h1 className="text-white" >Todo</h1>
        </div>
        </UnmountClosed>
          <Footer /></div> 
    
     
        
     
    );
  }
}

export default App;
