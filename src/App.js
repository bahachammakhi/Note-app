import React , {Component}from 'react';
import './App.css';
import firebase from 'firebase';
import "@material-ui/core"
import 'firebase/database';
import "firebase/auth";
import "./bootstrap-4.3.1-dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Note from './components/Note';
import TodoList from "./components/TodoList"
import {UnmountClosed} from 'react-collapse';
import SimpleModal from "./components/SimpleModal"
import SideNav from './components/SideNavBar';
import TodoForm from "./components/TodoForm"
import Firebase from "./firebase"
import SignIn from "./components/SignIn"
import NavPills from './components/NavPills';
// Configure FirebaseUI.
class App extends Component {
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
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
      isSignedIn: false,// Local signed-in state.
      user : "baha",
      userpic: "",
      username:''
   
    }

  }
  
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
 componentWillUpdate(){
  const previousTodolist = this.state.todolist
  const previousNotes = this.state.notes

  firebase.database().ref( 'users/'  + this.state.user).child('todolist').on('child_changed', snap => {
    for(var i=0; i < previousTodolist.length; i++){
      if(previousTodolist[i].id === snap.key){
        previousTodolist[i] = { 
          todoContent : snap.val().todoContent,
          todoTimeAdded : snap.val().todoTimeAdded
        }
      }
    }

    this.setState({
      todolist: previousTodolist
    })
  })
  firebase.database().ref( 'users/'  + this.state.user).child('notes').on('child_changed', snap => { 
    for(var i=0; i < previousNotes.length; i++){
      if(previousNotes[i].id === snap.key){
        previousNotes[i] = { 
          noteTitle: snap.val().noteTitle,
          notePrag: snap.val().notePrag,
          noteTimeAdded: snap.val().noteTimeAdded,
        }
      }
    }

    this.setState({
      notes: previousNotes
    })
  })
  
 }
 
 componentWillUnmount(){
  this.unregisterAuthObserver()
 }
 
  componentDidMount(){
   
  
    // DataSnapshot
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({isSignedIn: !!user,user:user.uid,userpic:user.photoURL,username:user.displayName})
  );
  
  firebase.auth().onAuthStateChanged(
    (user) =>{
      const previousNotes = this.state.notes;
      const previousTodolist = this.state.todolist;
    firebase.database().ref( 'users/'  + user.uid).child('notes').on('child_added', snap => {
      this.setState({loadingnote: true})

      previousNotes.push({
        id: snap.key,
        noteTitle: snap.val().noteTitle,
        notePrag: snap.val().notePrag,
        noteTimeAdded: snap.val().noteTimeAdded,
      })

      this.setState({
        notes: previousNotes
        
      })
    })
    firebase.database().ref( 'users/'  + user.uid).child('todolist').on('child_added', snap => {
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


    firebase.database().ref( 'users/'  + user.uid).child('notes').on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      })
    })

    firebase.database().ref( 'users/'  + user.uid).child('todolist').on('child_removed', snap => {
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
  
    
);
     
    
    
  }
  

  addNote(note,note1,note2){
    firebase.database().ref( 'users/'  + this.state.user).child('notes').push().set({ noteTitle: note, notePrag : note1 , noteTimeAdded : note2});
  }
  addTodoItem=(content,time)=>{
    firebase.database().ref( 'users/'  + this.state.user).child('todolist').push().set({ todoContent: content, todoTimeAdded : time});
  }
  removetodo=(TodoId)=>{
    console.log("from the parent: " + TodoId);
    firebase.database().ref( 'users/'  + this.state.user).child('todolist').child(TodoId).remove();
  }
  EditTodo = (TodoId,content,time)=>{
    firebase.database().ref( 'users/'  + this.state.user).child('todolist').child(TodoId).set({todoContent: content, todoTimeAdded : time})

  }
  EditNote = (NoteId,title,content,time)=>{
    firebase.database().ref( 'users/'  + this.state.user).child('notes').child(NoteId).set({noteTitle: title,notePrag : content ,noteTimeAdded : time})

  }
  removeNote(noteId){
    console.log("from the parent: " + noteId);
    firebase.database().ref( 'users/'  + this.state.user).child('notes').child(noteId).remove();
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
logout=()=>{
  firebase.auth().signOut()
  this.setState({notes:[],isSignedIn : false,todolist:[]})
}
  render() {
    const noteitem = this.state.notes.map((note) => {
      return (
        <div className="  ">

            <Note noteTitle={note.noteTitle} 
        notePrag={note.notePrag} 
        noteTimeAdded={note.noteTimeAdded}
        noteId={note.id} 
        key={note.id} 
        EditNote={this.EditNote}
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
        EditTodo={this.EditTodo}
        removetodo ={this.removetodo}/>
        </div>
      
      )
    })
    //signin page
   

    const loading = <div className="spinner-border"></div>

    const AfficheNote = this.state.loadingnote ? <div className="card-columns" > {noteitem}</div>  : loading 

    const AfficheTodo = this.state.loadingtodo ? <div className="list-group list-group-flush" > {todoItem}</div>  : loading 
    //main of the page
    const main =  <div className="body">
    <div className="sidenav" >  
 <SideNav openNav={this.state.openNav} />
   </div> 
    
   <NavBar username={this.state.username} profilepic={this.state.userpic} signout={this.logout} openNav={this.handleNav} closeNav={this.closeNav} open={this.state.openNav} />
   <div ><NavPills note={this.handleNoteComponent} todo={this.handleTodoComponent} /> </div>
  <UnmountClosed isOpened={this.state.noteO}>
   
   <div className="notePage"  className={this.state.main} onClick={this.closeNav} >
   <div className="container">
    <div className="row " >
    <div className=" w-25 col align-self-center"> <SimpleModal handleCloseNoteform={this.handleCloseNoteform} open={this.state.open} addNote={this.addNote} /></div>
    </div>
    <div  className=" margin mb-5 col  " >
       {AfficheNote }
    </div>
    </div>

    
     
<div className="stickybtn "> 
         <button
       className="btn peach-gradient mb-3" 
       onClick={()=>{this.setState({open:true})}} 
       ><i className="fas fa-plus"></i>
       </button>
   

      </div>
      
   
   </div>
   </UnmountClosed>
   <UnmountClosed isOpened={this.state.todoOpen} >
   <div className="row " className={this.state.main} onClick={this.closeNav} >
     <div className="" >
            
<div className="todolist margin-bottom ">


{AfficheTodo}
</div>
 <div className=" todoform"> <TodoForm addTodoItem={this.addTodoItem} />  </div> 
     </div>

 
 
   </div>
   </UnmountClosed>
  </div> 
    return (
      <div>
        {this.state.isSignedIn ? main : <div className="d-flex justify-content-center"> <SignIn /></div>}
        </div> 
    
     
        
     
    );
  }
}

export default App;
