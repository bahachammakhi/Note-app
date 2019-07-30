import React, { Component } from "react";
import { UnmountClosed } from "react-collapse";
class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoContent: "",
      newTodoAdded: Date(),
      open: false,
      isopened: true
    };
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
    this.props.addTodoItem(this.state.newTodoContent, this.state.newTodoAdded);

    // Set newNoteContent back to an empty string.
    this.setState({
      newTodoContent: "",
      newTodoAdded: Date()
    });
  };

  render() {
    return (
      <div>
        <UnmountClosed isOpened={this.state.isopened}>
          <p
            className=" mb-5 text-white "
            onClick={() => {
              this.setState({ isopened: false, open: true });
            }}
          >
            <i class="fas fa-plus  mr-3" />Add task
          </p>
        </UnmountClosed>
        <UnmountClosed isOpened={this.state.open}>
          <div className="md-form form-sm w-50">
            <input
              type="text"
              id="form1"
              className="form-control form-control-sm"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={this.state.newTodoContent}
              onChange={this.handleUserInput}
              name="newTodoContent"
            />
            <label for="form1" className="text-white">
              Add task
            </label>
            <div className="ml-3 row">
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-dark btn-sm"
                  onClick={this.writeTodoItem}
                >
                  Add Task
                </button>
              </div>
              <div className="col">
                <button
                  type="submit"
                  className="btn btn-dark btn-sm "
                  onClick={() => {
                    this.setState({ isopened: true, open: false });
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </UnmountClosed>
      </div>
    );
  }
}
export default TodoForm;
