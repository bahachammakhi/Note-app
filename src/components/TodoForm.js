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
         
 
<div className="md-form form-sm w-75" >
    <input type="text" 
    id="form1"
       className="form-control form-control-sm" 
       aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        value={this.state.newTodoContent}
        onChange={this.handleUserInput}
        name="newTodoContent"
        />   
<label for="form1" className="text-white" >TodoContent</label>
<div className="text-center">
    <button type="submit" 
     className="btn peach-gradient mb-3"
     onClick={this.writeTodoItem}
     >Add TodoItem
     
     </button>
</div>
 
   </div>      
        
  )
    }
}
export default TodoForm