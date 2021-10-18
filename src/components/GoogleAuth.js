import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "374469376456-c8uu1si6oblmmpghppfes4c4jbfo9fle.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div className="item">I Don't Know if we are signed in</div>;
    } else if (this.state.isSignedIn) {
      return <div className="item">I am signed In</div>;
    } else {
      return <div className="item">I am not signed in</div>;
    }
  }

  render() {
    console.log(this.state);
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
