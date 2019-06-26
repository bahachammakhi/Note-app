import React,{Component} from "react"
import { thisExpression } from "@babel/types";

class SideNavBar extends React.Component{
 constructor(){
     super()
     this.state={
         openNav: "",
     }
 }
 componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
     if (nextProps.open !== this.state.openNav) {
       this.setState({ openNav : nextProps.openNav });
     }
 }
 
    render(){
        return( <div>
            <div onClick={this.closeNav} > clickk heree</div>
            <div>
<nav className="sidenav"  className={this.state.openNav} >
<ul>
    <li className="nav-item"><a>Link</a></li>
</ul>
</nav>
</div>
            </div>
        )
    }
}
export default SideNavBar