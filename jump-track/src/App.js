import React, { Component } from "react";
import "./App.css";
import Register from "./components/Register";
import LogIn from "./components/Login";
import Home from "./components/Home";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import Goals from "./components/Goals";
import PrivateRoute from "./components/PrivateRoute";
import Exercises from "./components/Exercises";

class App extends Component {
  handleClick = () => {
    localStorage.removeItem("token");
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navLinks">
            <NavLink style={{ textDecoration: "none" }} exact to="/">
              {" "}
              Home
            </NavLink>
            <NavLink style={{ textDecoration: "none" }} to="/protected">
              Goals
            </NavLink>
            {/* <NavLink to="/register">Register</NavLink> */}
            <NavLink
              onClick={() =>
                alert(
                  "You can register and login or you can use username is test and password is test to login"
                )
              }
              style={{ textDecoration: "none" }}
              to="/logIn"
            >
              Log In
            </NavLink>
            <NavLink to="/">
              <div className="appDiv" onClick={this.handleClick}>
                Log out
              </div>
            </NavLink>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/logIn" component={LogIn} />
          <Route path="/register" component={Register} />
          <Route path="/exercises/:id" component={Exercises} />
          <PrivateRoute exact path="/protected" component={Goals} />
        </div>
      </Router>
    );
  }
}

export default App;
