import React, { Component } from "react";
import SimpleModalTodo from "./SimpleModalTodo";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handleCloseTodoedit = () => {
    this.setState({
      open: false
    });
  };
  render() {
    return (
      <div>
        <div>
          {" "}
          <SimpleModalTodo
            open={this.state.open}
            handleClose={this.handleCloseTodoedit}
            TodoId={this.props.todoId}
            EditTodo={this.props.EditTodo}
          />
        </div>
        <div className=" w-75 ">
          <div className="row ml-5">
            {" "}
            <i
              class="far fa-circle  mr-3 text-white"
              onClick={() => this.props.removetodo(this.props.todoId)}
            />
            <h6 className="text-white">{this.props.todoContent}</h6>{" "}
            <i
              class="fas fa-edit ml-3 edit text-white"
              onClick={() => {
                this.setState({ open: true });
              }}
            />
          </div>
          <hr className="bg-white w-100" />
        </div>
      </div>
    );
  }
}
export default TodoList;
