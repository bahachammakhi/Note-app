import React from "react";
import Modal from "@material-ui/core/Modal";
class SimpleModalTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newNoteTitle: "",
      newNotePrag: "",
      newNoteAdded: Date(),
      open: false
    };
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }
  handleUserInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value // the value of the text input
    });
  };

  writeTodoItem = () => {
    // call a method that sets the noteContent for a note to
    // the value of the input
    this.props.EditNote(
      this.props.NoteId,
      this.state.newNoteTitle,
      this.state.newNotePrag,
      this.state.newNoteAdded
    );

    // Set newNoteContent back to an empty string.
    this.setState({
      newNoteTitle: "",
      newNotePrag: "",
      newNoteAdded: Date()
    });
  };
  render() {
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.props.handleClose}
        >
          <div className="card modall mt-5 ">
            <div className="ml-3 mr-3 mb-5 form-group  mt-5">
              <input
                type="text"
                id="notetitle"
                className="form-control "
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Note Title"
                value={this.state.newTodoContent}
                onChange={this.handleUserInput}
                name="newNoteTitle"
              />
              <div className="form-group mt-3">
                <textarea
                  type="text"
                  id="noteprag"
                  className=" form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  value={this.state.newNotePrag}
                  placeholder="Note Pragraph"
                  onChange={this.handleUserInput}
                  name="newNotePrag"
                />
              </div>

              <div className="text-center mt-5">
                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={this.writeTodoItem}
                >
                  Edit Note
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SimpleModalTodo;
