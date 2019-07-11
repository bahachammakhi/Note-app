import React from "react"
import Firebase from "../firebase"
import firebase from "firebase"
import logo from "./img/logo.png"
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { FirebaseAuth } from "react-firebaseui";
class NavBar extends React.Component{
constructor(props){
    super(props)
    this.state = {
        name : "Owner",
    }
}


    render(){
        return(
<div>
<nav className="navbar sticky-top  navbar-light bg-white">
  <a className="navbar-brand cursor text-mobile" href="#"  >
     <img src={logo} width="50" height="50" alt="" />
  </a>
  <a className="" onClick={this.props.todo}>Tasks</a>
  <a className="" onClick={this.props.note}>Notes</a>
    <h6 className="navbar-brand d-none d-sm-block">Welcome Back {this.props.username}</h6>
   <div className="mr-5" >
     <a className=" mr-3" onClick={this.props.signout} >Signout</a>
       <img className="mr-3" src={this.props.profilepic} width="40" height="40" alt="Me" className="rounded-circle"  />
      
     </div> 

  
</nav>
</div>
        )
    }
}
export default NavBar