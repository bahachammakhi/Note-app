import React,{Component} from "react"

class WelcomeHeader extends Component{
    render(){
        return(
            <div className="card text-center w-50" >
        <h4 className="mt-3 mb-3 mobile" >Welcome Back!</h4>
        <h4 className="mt-1 mb-3 mobile">{this.props.username}</h4>
        <h6 className=" mb-3 mobiletext">Happy to see you again</h6>
            </div>
        )
    }
}
export default WelcomeHeader