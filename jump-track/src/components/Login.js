import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { login } from "../actions";
import "./Register.css";

class LogIn extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/protected");
    });
  };

  render() {
    const { username, password } = this.state.credentials;
    return (
      <div>
        <form onSubmit={this.login} className="form">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="text"
              value={username}
              name="username"
              onChange={this.handleChange}
              placeholder="enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Password</Label>
            <Input
              type="text"
              value={password}
              name="password"
              onChange={this.handleChange}
              placeholder="enter your password"
            />
          </FormGroup>
          <Button className="signBtn">
            {" "}
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )}
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ loggingIn, error }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(LogIn);
