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
            <div  className=" mt-5   card container w-50">
                <div className="container">
                    <div className="text-center"> 
                       <img src={logo} />
                     
                      <hr/>
                    </div>
                    <div className="row">
                     
                      <div className="mt-3 mb-5 col-sm">
                       <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                      </div>  
                    </div>
                  
    
                </div>
   
  </div>
        )
    }
}
export default SignIn