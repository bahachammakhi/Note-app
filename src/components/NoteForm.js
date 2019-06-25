import React, { Component } from 'react';

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNoteTitle: '',
            newNotePrag : '',
            newNoteAdded : Date()
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserInput(e){
        const {name, value} = e.target
        this.setState({
            [name]: value, // the value of the text input
        })
    }

    writeNote(){
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addNote(this.state.newNoteTitle,this.state.newNotePrag,this.state.newNoteAdded);

        // Set newNoteContent back to an empty string.
        this.setState({
            newNoteTitle: '',
            newNotePrag : '',
            newNoteAdded : Date(),
        })
    }

    render(){
        return(
            <div className="form-group  ">
            <div className="container ">
         <div className="row col mt-3">
         <label for="textInput">Note title</label>
       <input type="text" 
       className="form-control-lg" 
       aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        value={this.state.newNoteTitle}
        onChange={this.handleUserInput}
        name="newNoteTitle"
        />
        
         </div>
         <div className="row col mt-3">
         <label for="textarea">Note body</label>
         <textarea type="text"
        className="form-control-lg " 
        aria-label="Sizing example input" 
        aria-describedby="inputGroup-sizing-default"
        name="newNotePrag"
        onChange= {this.handleUserInput}
        value={this.state.newNotePrag}
        />
        
       
         </div>
       <div className="row col mt-3 "> 
        <button type="submit" 
     className="btn btn-outline-dark"
     onClick={this.writeNote}
     >Add Note
     
     </button>
        </div>
     </div>
     </div>
          
   
    
     
        
        )
    }
}

export default NoteForm;