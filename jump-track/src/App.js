import React, { Component } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import Goals from "./components/Goals";
import axios from "axios";
import PrivateRoute from "./components/PrivateRoute";

const obj = [
  {
    id: 1,
    jumpHeight: "150cm",
    targetDate: "11 - 11 - 2019",
    startDate: "10 - 10 - 2019",
    completed: "11 - 02 - 2019"
  },
  {
    id: 2,
    jumpHeight: "140cm",
    targetDate: "12 - 12 - 2019",
    startDate: "09 - 09 - 2019",
    completed: "11 - 12 - 2019"
  },
  {
    id: 3,
    jumpHeight: "130cm",
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
    axios
      .post("https://jump-tracker.herokuapp.com/users/register", {
        username: this.state.username,
        password: this.state.password,
        height: parseInt(this.state.height, 10),
        jumpHeight: parseInt(this.state.jumpHeight, 10)
      })
      .then(res => {
        localStorage.setItem("token", res.data);
      })
      .catch(err => console.log(err));
    this.setState({
      username: "",
      password: "",
      height: undefined,
      jumpHeight: undefined
    });
  };

  handleLogInSubmit = e => {
    e.preventDefault();
    axios
      .post("https://jump-tracker.herokuapp.com/users/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        localStorage.setItem("token", res.data);
      })
      .catch(err => console.log(err));
    this.setState({
      username: "",
      password: ""
    });
  };

  // handleDelete = id => {
  //   let goals = this.state.goals.filter(goal => {
  //     if (goal.id !== id) {
  //       return goal;
  //     }
  //   });
  //   this.setState({ goals });
  // };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { username, password, height, jumpHeight, goals } = this.state;
    return (
      <Router>
        <div className="App">
          <div className="navLinks">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/protected">Goals</NavLink>
            <NavLink to="/signUp">Sign Up</NavLink>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/signIn" component={SignIn} />
          <PrivateRoute exact path="/protected" component={Goals} />
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
                handleDelete={this.handleDelete}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
