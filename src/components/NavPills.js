import React,{Component} from "react"

class NavPills extends Component{
 constructor(props){
     super(props)
     this.state={
           todo : "",
           note : "active"
     }
 }
 note =()=>{
    this.setState({note : "active",todo:""})
    this.props.note()
}
todo = ()=>{
    this.setState({todo:"active",note:""})
    this.props.todo()
}
    render(){
        return(
            
            <ul className="nav nav-tabs mt-3 justify-content-center" >
              <li className="nav-item">
                <a  className={"nav-link text-white"+this.state.todo} onClick={this.note} >Notes </a>
              </li>
              <li className="nav-item">
                <a   className={"nav-link text-white"+this.state.note} onClick={this.todo} >Tasks</a>
              </li>
              
            </ul>
        )
    }
}

export default NavPills