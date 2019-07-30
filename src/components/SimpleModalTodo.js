import React from "react";
import Modal from "@material-ui/core/Modal";
class SimpleModalTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoContent: "",
      newTodoAdded: Date(),
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
    this.props.EditTodo(
      this.props.TodoId,
      this.state.newTodoContent,
      this.state.newTodoAdded
    );

    // Set newNoteContent back to an empty string.
    this.setState({
      newTodoContent: "",
      newTodoAdded: Date()
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
          <div className="card   modall mt-5 ">
            <div className="md-form form  ml-3 mr-3 mb-5 mt-5">
              <label for="form1" className="text-dark">
                Aaaa
              </label>
              <input
                type="text"
                id="form1"
                className="form-control form-control-sm "
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={this.state.newTodoContent}
                onChange={this.handleUserInput}
                name="newTodoContent"
              />

              <div className="text-center mt-5">
                <button
                  type="submit"
                  className="btn btn-dark "
                  onClick={this.writeTodoItem}
                >
                  Edit
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
