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
            
            <div>
            <div className="card wrapper mt-3 " id="content">
<div className="card-body ">
 <button type="button" class="close" aria-label="Close">
  <span aria-hidden="true"
    onClick={() => this.handleRemoveNote(this.noteId)}>
  &times;</span>
</button>
<p className="text-right font-weight-light" >{this.noteAdded}</p>
<h5 className="card-title">{this.noteTitle}</h5>
<p className="card-text">{this.notePrag}</p>
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
