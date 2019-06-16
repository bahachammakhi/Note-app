import React, { Component } from 'react';

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNoteTitle: '',
            newNotePrag : '',
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
        this.props.addNote(this.state.newNoteTitle,this.state.newNotePrag);

        // Set newNoteContent back to an empty string.
        this.setState({
            newNoteTitle: '',
            newNotePrag : '',
        })
    }

    render(){
        return(
            
            <nav id="sidebar">
            <div className="input-group mb-3">
       <div className="input-group-prepend mt-3 ml-3">
         <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
       </div>
       <input type="text" 
       className="form-control mt-3" 
       aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        placeholder="write note title"
        value={this.state.newNoteTitle}
        onChange={this.handleUserInput}
        name="newNoteTitle"
        />
     </div>
     <div className="input-group mb-3">
       <div className="input-group-prepend mt-3 ml-3 ">
         <span className="input-group-text" id="inputGroup-sizing-default">Text</span>
       </div>
       <textarea type="text"
        className="form-control mt-3" 
        aria-label="Sizing example input" 
        aria-describedby="inputGroup-sizing-default"
        placeholder="Write note pragraph"
        name="newNotePrag"
        onChange= {this.handleUserInput}
        value={this.state.newNotePrag}
        />
     </div>
     <button type="button" 
     className="btn btn-secondary ml-5"
     onClick={this.writeNote}
     >Add Note</button>
         </nav>
        )
    }
}

export default NoteForm;