import React from "react"
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
    <div className="text-center">
<img src={this.props.profilepic} width="100" height="100" alt="Me" className="rounded-circle "  />
<h6 className="text-white mt-3" >{this.props.username}</h6>
<a onClick={this.props.note} className="text-white mt-5" ><i className="fas fa-clipboard mr-2"></i>Notes</a>
<hr />
 <a  onClick={this.props.todo}  className="text-white"><i className="fas fa-list mr-2"></i>Tasks</a>

<hr />
 <a  onClick={this.props.signout}  className="text-white"><i className="fas mr-2 fa-sign-out-alt"></i>Signout</a>


    </div>


</nav>
</div>
            </div>
        )
    }
}
export default SideNavBar