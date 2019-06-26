import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Note extends Component{

    constructor(props){
        super(props);
        this.noteTitle = props.noteTitle; 
        this.notePrag = props.notePrag
        this.noteAdded = props.noteTimeAdded
        this.noteId = props.noteId; 
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }

    handleRemoveNote(id){
        this.props.removeNote(id);
    }

    render(){
        return(
            
            <div className="col">
            <div className="card bg-dark border-danger wrapper mt-3 " id="content">
<div className="card-body ">
 <button type="button" class="close text-white" aria-label="Close">
  <span aria-hidden="true" className="text-danger font-weight-bolder"
    onClick={() => this.handleRemoveNote(this.noteId)}>
  &times;</span>
</button>
<p className="text-right font-weight-ligh text-white" >{this.noteAdded}</p>
<h5 className="card-title text-white  ">{this.noteTitle}</h5>
<hr className="bg-danger" />
<p className="card-text text-white ">{this.notePrag}</p>
</div>
</div>
        </div>
        )
    }
}

Note.propTypes = {
    noteContent: PropTypes.string
}

export default Note;
