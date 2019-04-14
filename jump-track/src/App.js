import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/SignUp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      height: null,
      jumpHeight: null
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { username, password, height, jumpHeight } = this.state;
    return (
      <div className="App">
        <h1>Jump Starter</h1>
        <SignUp
          username={username}
          password={password}
          height={height}
          jumpHeight={jumpHeight}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
