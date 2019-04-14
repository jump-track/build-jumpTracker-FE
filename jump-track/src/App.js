import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import { Route, NavLink } from "react-router-dom";

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
        <div className="navLinks">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/signIn">Sign In</NavLink>
          <NavLink to="/signUp">Sign Up</NavLink>
        </div>

        <Route exact path="/" component={Home} />

        <Route
          path="/signUp"
          render={() => (
            <SignUp
              username={username}
              password={password}
              height={height}
              jumpHeight={jumpHeight}
              handleChange={this.handleChange}
            />
          )}
        />
        <Route
          path="/signIn"
          render={() => <SignIn username={username} password={password} />}
        />
      </div>
    );
  }
}

export default App;
