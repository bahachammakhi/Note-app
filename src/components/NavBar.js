import React from "react"
import bahapic from './img/baha.jpg'
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
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src={bahapic} width="30" height="30" alt="" />  Welcome Back {this.props.name}
  </a>

</nav>
    
</div>
        )
    }
}
export default NavBar