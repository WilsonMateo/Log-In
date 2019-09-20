import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";



firebase.initializeApp({
  apiKey: "AIzaSyD7nNA-PsY5REBTn3aVgW8pA46RJl1ulRA",
  authDomain: "completo-d00a7.firebaseapp.com",
})

class Botton extends Component {
  state = { isSignedIn: false }
  state2 = { isSignedIn2: false }


  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  uiConfig2 = {
    signInFlow2: "popup",
    signInOptions: [

      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }


  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    );
  }

  render() {
    return (
      <div className="App">

        {this.state.isSignedIn ? (
          <span>

            {this.state2.isSignedIn2 ? (
              <span>
                
                <button onClick={() => firebase.auth().signOut()}>Sign out!</button>

                <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              </span>


              ) : (
                <span>
                  {this.state2.isSignedIn2=true}
                  <h1>verification</h1>
                  <StyledFirebaseAuth
                    uiConfig={this.uiConfig2}
                    firebaseAuth={firebase.auth()}
                  />
                   <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                   <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                  

                </span>
            )}
          </span>
        ) : (
          <span>
             <h2>Log In</h2>
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </span>
          )}

      </div>
    )
  }
}

export default Botton