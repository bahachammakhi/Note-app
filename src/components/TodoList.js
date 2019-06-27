import React,{Component} from "react"
import SimpleModalTodo from "./SimpleModalTodo";
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state={
    open:false
        }
    }
    handleCloseTodoedit=() =>{
        this.setState({
          open: false
        })
    }    
    render(){
        return(
            <div>
                <div> <SimpleModalTodo   open={this.state.open}  handleClose={this.handleCloseTodoedit} TodoId={this.props.todoId} EditTodo={this.props.EditTodo}/></div>
                          <div className=" w-25 " >
                <span aria-hidden="true" className="text-danger font-weight-ligth"
    onClick={() => this.props.removetodo(this.props.todoId)}>
  &times;</span>
                <div className="row" ><h6 className="text-white" >{this.props.todoContent}</h6>  <i class="fas fa-edit ml-3 edit" onClick={()=>{this.setState({open:true})}}  ></i></div>
                <hr className="bg-white" />
               
            </div>  
            </div>

        )
    }
}
export default TodoList