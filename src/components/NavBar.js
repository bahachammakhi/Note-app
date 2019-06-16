import React from "react"
import bahapic from './img/baha.jpg'
class NavBar extends React.Component{
constructor(){
    super()
    this.state = {
        name : "Owner",
    }
}
handleName = () =>{
    let  person = prompt("Please enter your name", "Owner");
    this.setState({
        name : person
    })
}
componentDidMount(){
    this.handleName()
}
    render(){
        return(
<div>
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src={bahapic} width="30" height="30" alt="" />  Welcome Back {this.state.name}
  </a>

</nav>
    
</div>
        )
    }
}
export default NavBar