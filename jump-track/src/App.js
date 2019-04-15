import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import { Route, NavLink } from "react-router-dom";
import Goals from "./components/Goals";

const obj = [
  {
    id: 1,
    jumpHeight: 14,
    targetDate: "11 - 11 - 2019",
    startDate: "10 - 10 - 2019",
    completed: "11 - 02 - 2019"
  },
  {
    id: 2,
    jumpHeight: 14,
    targetDate: "12 - 12 - 2019",
    startDate: "09 - 09 - 2019",
    completed: "11 - 12 - 2019"
  },
  {
    id: 3,
    jumpHeight: 14,
    targetDate: "10 - 09 - 2019",
    startDate: "09 - 08 - 2019",
    completed: "10 - 01 - 2019"
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      goals: [],
      username: "",
      password: "",
      height: undefined,
      jumpHeight: undefined
    };
  }

  componentDidMount() {
    this.setState({
      goals: obj
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log("submit handled");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { username, password, height, jumpHeight, goals } = this.state;
    return (
      <div className="App">
        <div className="navLinks">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/goals">Goals</NavLink>
          <NavLink to="/signIn">Sign In</NavLink>
          <NavLink to="/signUp">Sign Up</NavLink>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/goals" render={() => <Goals goals={goals} />} />

        <Route
          path="/signUp"
          render={() => (
            <SignUp
              username={username}
              password={password}
              height={height}
              jumpHeight={jumpHeight}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
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
