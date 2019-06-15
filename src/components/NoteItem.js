import React, {Component} from "react"
class NoteItem extends Component{
    constructor(props){
        super(props)
        this.state = {
              noteTitle: props.noteTitle,
              notePrag: props.notePrag,
              noteId : props.noteId
        }
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }
    handleRemoveNote(id){
        this.props.removeNote(id);
    }
    render(){
        return(
            <div>
                <div className="card wrapper" id="content">
  <div className="card-body">
  <span className="closebtn" 
                      onClick={() => this.handleRemoveNote(this.noteId)}>
                      &times;
                </span>
    <h5 className="card-title">{this.state.noteTitle}</h5>
    <p className="card-text">{this.state.notePrag}</p>
  </div>
</div>
            </div>
        )
    }
}
export default NoteItem