import React from 'react';
import Modal from '@material-ui/core/Modal';
class SimpleModalTodo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            newTodoContent: '',
            newTodoAdded : Date(),
            open : false
        }
    }
  
  
  componentWillReceiveProps(nextProps) {
   // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.open !== this.state.open) {
      this.setState({ open : nextProps.open });
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
    this.props.EditTodo(this.props.TodoId,this.state.newTodoContent,this.state.newTodoAdded);

    // Set newNoteContent back to an empty string.
    this.setState({
        newTodoContent: '',
        newTodoAdded : Date(),
    })
}
render(){
    
  return (
     <div> 
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.props.handleClose}
      >
      
          <div className="card  border-danger modall ">
          <div className="md-form form-sm w-25" >
          <label for="form1">TodoContent</label>
        <input type="text" 
    id="form1"
       className="form-control form-control-sm" 
       aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        value={this.state.newTodoContent}
        onChange={this.handleUserInput}
        name="newTodoContent"
        />   
         <input type="text" 
    id="form1"
       className="form-control form-control-sm" 
       aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        value={this.state.newTodoContent}
        onChange={this.handleUserInput}
        name="newTodoContent"
        />   
      

 <button type="submit" 
     className="btn btn-outline-danger"
     onClick={this.writeTodoItem}
     >Add TodoItem
     
     </button>
   </div>      
       
        </div>
       
        

   
        
      </Modal>
    </div>
    
  );
 }
  
}

export default SimpleModalTodo;
