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
import TodoList from "./components/TodoList"
import {UnmountClosed} from 'react-collapse';
import SimpleModal from "./components/SimpleModal"
import SideNav from './components/SideNavBar';
import TodoForm from "./components/TodoForm"
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
    this.databasenotes = this.app.database().ref().child('notes');
    this.databasetodolist = this.app.database().ref().child('todolist');

    // We're going to setup the React state of our component
    this.state = {
      notes: [],
      todolist :[],
      loadingnote : false,
      loadingtodo : false,
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
    const previousTodolist = this.state.todolist;

    // DataSnapshot
    this.databasenotes.on('child_added', snap => {
      this.setState({loadingnote: true})
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
    this.databasetodolist.on('child_added', snap => {
      this.setState({loadingtodo: true})
      previousTodolist.push({
        id: snap.key,
        todoContent : snap.val().todoContent,
        todoTimeAdded : snap.val().todoTimeAdded
      })
      this.setState({
        todolist : previousTodolist
      })
    })

    this.databasenotes.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      })
    })
    this.databasetodolist.on('child_removed', snap => {
      for(var i=0; i < previousTodolist.length; i++){
        if(previousTodolist[i].id === snap.key){
          previousTodolist.splice(i, 1);
        }
      }

      this.setState({
        todolist: previousTodolist
      })
    })
  }

  addNote(note,note1,note2){
    this.databasenotes.push().set({ noteTitle: note, notePrag : note1 , noteTimeAdded : note2});
  }
  addTodoItem=(content,time)=>{
    this.databasetodolist.push().set({ todoContent: content, todoTimeAdded : time});
  }
  removetodo=(TodoId)=>{
    console.log("from the parent: " + TodoId);
    this.databasetodolist.child(TodoId).remove();
  }
  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.databasenotes.child(noteId).remove();
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
        <div className="col ">

            <Note noteTitle={note.noteTitle} 
        notePrag={note.notePrag} 
        noteTimeAdded={note.noteTimeAdded}
        noteId={note.id} 
        key={note.id} 
        removeNote ={this.removeNote}/>
        </div>
      
      )
    })
    const todoItem = this.state.todolist.map((todo) => {
      return (
        <div className="lsit-group-item">

            <TodoList todoContent={todo.todoContent} 
       
        todoTimeAdded={todo.todoTimeAdded}
        todoId={todo.id} 
        key={todo.id} 
        removetodo ={this.removetodo}/>
        </div>
      
      )
    })
    const loading = <div className="spinner-border"></div>
    const AfficheNote = this.state.loadingnote ? <div className="card-columns" > {noteitem}</div>  : loading 
    const AfficheTodo = this.state.loadingtodo ? <div className="list-group list-group-flush" > {todoItem}</div>  : loading 
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
         <div  className=" margin mb-5 col  " >
          {AfficheNote}
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
        <div className='row' className={this.state.main} onClick={this.closeNav} >
 <div className="todolist"> <TodoForm addTodoItem={this.addTodoItem}  />  </div>       
<div className="todolist ">
 

  {AfficheTodo}
</div>
    
      
      
        </div>
        </UnmountClosed>
          <Footer /></div> 
    
     
        
     
    );
  }
}

export default App;
