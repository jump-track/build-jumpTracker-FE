import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import { login } from "../actions";
import "./Register.css";

const InInput = styled.input`
  width: 20%;
  height: 40px;
  background: lightblue;
  opacity: 0.5;
`;

const IForm = styled.form`
  margin: 5% 0 0 5%;
  text-align: center;
`;
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
        <IForm onSubmit={this.login}>
          <FormGroup>
            <InInput
              size="lg"
              type="text"
              value={username}
              name="username"
              onChange={this.handleChange}
              placeholder="enter your email"
            />
          </FormGroup>
          <FormGroup>
            <InInput
              size="lg"
              type="text"
              value={password}
              name="password"
              onChange={this.handleChange}
              placeholder="enter your password"
            />
          </FormGroup>
          <Button size="lg" color="primary">
            {" "}
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )}
          </Button>
        </IForm>
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
