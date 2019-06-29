import React,{Component} from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import "firebase/auth";
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
            <div  className=" mt-5   card ">
                <div className="">
                    <div className="">
                      <h6 className=" text-center text-dark mt-5" >Please sign-in:</h6>  
                      <hr/>
                    </div>
                  <div className="mt-5">
                       <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                      </div>  
    
                </div>
   
  </div>
        )
    }
}
export default SignIn