import React from "react"
import bahapic from './img/baha.jpg'
import logo from "./img/logo.png"
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
  <a className="navbar-brand cursor" href="#"  >
  <i className="fas fa-grip-lines mr-3 cursor "  onClick={this.props.open =="push" ? this.props.closeNav : this.props.openNav} ></i>
    <img src={logo} width="50" height="50" alt="" />  ChammakhiNotes
  </a>
  <form class="form-inline d-none d-lg-block">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
  </form>
  <img src={bahapic} width="40" height="40" alt="Me" className="rounded-circle"  /> 
</nav>
</div>
        )
    }
}
export default NavBar