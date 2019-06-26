import React,{Component} from "react"
class TodoForm extends Component{
    constructor(props){
        super(props)
        this.state={
            newTodoContent: '',
            newTodoAdded : Date()
        }
    }
    handleUserInput=(e)=>{
        const {name, value} = e.target
        this.setState({
            [name]: value, // the value of the text input
        })
    }

    writeTodoItem=()=>{
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addTodoItem(this.state.newTodoContent,this.state.newTodoAdded);

        // Set newNoteContent back to an empty string.
        this.setState({
            newTodoContent: '',
            newTodoAdded : Date(),
        })
    }

    render(){
        return(
         
 <div className="border-danger rounded">

                <input type="text" 
       className="border-danger rounded" 
       aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        value={this.state.newTodoContent}
        onChange={this.handleUserInput}
        name="newTodoContent"
        /> 
        <button type="submit" 
     className="btn btn-outline-danger ml-3 "
     onClick={this.writeTodoItem}
     >Add TodoItem
     
     </button>
         </div>
        
  )
    }
}
export default TodoForm