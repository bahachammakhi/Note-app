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
<nav className="navbar navbar-light bg-white">
  <a className="navbar-brand cursor text-mobile" href="#"  >
  <i className="fas fa-grip-lines mr-3 cursor "  onClick={this.props.open =="push" ? this.props.closeNav : this.props.openNav} ></i>
     <img src={logo} width="50" height="50" alt="" />
  </a>
    <h6 className="navbar-brand d-none d-sm-block">Welcome Back {this.props.username}</h6>
   <div >
       <MDBDropdown dropleft>
    <div className="mr-5">
       <MDBDropdownToggle  color="ligth">
         <img src={this.props.profilepic} width="40" height="40" alt="Me" className="rounded-circle"  />
      </MDBDropdownToggle>
    </div>
   <div className="mr-5">
      <MDBDropdownMenu left basic>
        <MDBDropdownItem>Username: {this.props.username}</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem  onClick={this.props.signout} >Signout</MDBDropdownItem>
      </MDBDropdownMenu>
   </div>
   
  </MDBDropdown>
     </div> 

  
</nav>
</div>
        )
    }
}
export default NavBar