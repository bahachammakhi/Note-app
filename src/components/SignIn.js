import React,{Component} from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import "firebase/auth";
import logo from "./img/logo.png"
class SignIn extends Component{
    
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [                                              
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
    render(){
        return(
          
             <div  className=" mt-5   card container   ">
                   <div className="row ">
                      <div className="signinrigth w-50"> 
                        <div className="col-sm mt-5 mb-5 ml-2 mr-5" > 
                       <div className="text-center"> 
                       <h3 className="text-white" >Welcome Back!</h3>
                       <h6 className="text-white" > Note Tasks APP</h6>
                       <img className="w-50" src={logo} />
                       </div>
                      </div>
                      </div>
                <div  className="singinleft w-50 " >
                       <div className="mt-3  col-sm mt-5 ">
                       <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                      </div>  
                     </div>
                      
                    </div>
                    <div className="row" >
                    <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                    </div>
  </div>
                   

                     
                  
         
           
        )
    }
}
export default SignIn