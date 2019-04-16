import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import "./Register.css";
import { register } from "../actions";
import { connect } from "react-redux";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      height: undefined,
      jumpHeight: undefined
    };
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  register = e => {
    e.preventDefault();
    this.props.register(this.state).then(() => {
      this.props.history.push("/login");
    });
  };

  render() {
    const { username, password, height, jumpHeight } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <form onSubmit={handleSubmit} className="form">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="text"
              value={username}
              name="username"
              onChange={handleChange}
              placeholder="enter your email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Password</Label>
            <Input
              type="text"
              value={password}
              name="password"
              onChange={handleChange}
              placeholder="enter your password"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Height</Label>
            <Input
              type="number"
              value={height}
              name="height"
              onChange={handleChange}
              placeholder="enter your height"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Jump Height</Label>
            <Input
              type="number"
              value={jumpHeight}
              name="jumpHeight"
              onChange={handleChange}
              placeholder="enter your jump-height"
            />
          </FormGroup>
          <Button className="signBtn">Submit</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ signingUp, error }) => ({
  error,
  signingUp
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
