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
     if (nextProps.openNav !== this.state.openNav) {
       this.setState({ openNav : nextProps.openNav });
     }
 }
 
    render(){
        return( <div>
            <div onClick={this.closeNav} > clickk heree</div>
            <div>
<nav className="sidenav"  className={this.state.openNav} >

<a onClick={this.props.note} ><i class="fas fa-clipboard mr-2"></i>Notes</a>
 <a  onClick={this.props.todo} ><i class="fas fa-list mr-2"></i>TodoList</a>
<hr />
</nav>
</div>
            </div>
        )
    }
}
export default SideNavBar