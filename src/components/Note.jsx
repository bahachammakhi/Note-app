import React, { Component } from "react";
import PropTypes from "prop-types";
import SimpleModalNote from "./SimpleModalNote";
import { thisExpression } from "@babel/types";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.noteTitle = props.noteTitle;
    this.notePrag = props.notePrag;
    this.noteAdded = props.noteTimeAdded;
    this.noteId = props.noteId;
    this.handleRemoveNote = this.handleRemoveNote.bind(this);
  }

  handleRemoveNote(id) {
    this.props.removeNote(id);
  }
  handleCloseNoteedit = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div className="card cardbackground  wrapper mt-3 w-75  " id="content">
        <div className="card-body ">
          <div>
            <i
              class="fas fa-edit ml-3 edit"
              onClick={() => {
                this.setState({ open: true });
              }}
            />
            <button type="button" class="close text-dark " aria-label="Close">
              <span
                aria-hidden="true"
                className=" font-weight-bolder"
                onClick={() => this.handleRemoveNote(this.noteId)}
              >
                &times;
              </span>
            </button>
          </div>
          <p className="text-right font-weight-ligh text-dark" />
          <h5 className="card-title text-dark ">{this.noteTitle}</h5>
          <hr className="bg-info" />
          <p className="card-text text-dark ">{this.notePrag}</p>
          <SimpleModalNote
            open={this.state.open}
            handleClose={this.handleCloseNoteedit}
            NoteId={this.props.noteId}
            EditNote={this.props.EditNote}
          />
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  noteContent: PropTypes.string
};

export default Note;
