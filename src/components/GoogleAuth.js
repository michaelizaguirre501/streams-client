import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      //load imports more functionality from googleapi
      window.gapi.client
        .init({
          //initializes client credentials from google api
          clientId:
            "374469376456-c8uu1si6oblmmpghppfes4c4jbfo9fle.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance(); //assign variable auth to the value from calling get auth instance this is a method from google api
          this.onAuthChange(this.auth.isSignedIn.get()); // calls on auth change helper func with our signed in status
          this.auth.isSignedIn.listen(this.onAuthChange); //listen is google api listens for changes to signed in state
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId()); // passes our users id into sign in for user related data storage later
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };
  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui blue google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui blue google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div className="item">{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }; //still magic
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
