import React,{Component} from "react"
class TodoList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className=" w-25" >
                <span aria-hidden="true" className="text-danger font-weight-bolder"
    onClick={() => this.props.removetodo(this.props.todoId)}>
  &times;</span>
                <h1>{this.props.todoContent}</h1>
                <hr className="bg-white" />

            </div>
        )
    }
}
export default TodoList