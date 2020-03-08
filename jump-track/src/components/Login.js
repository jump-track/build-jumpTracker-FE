import React from "react";
import { FormGroup } from "reactstrap";
import { connect } from "react-redux";
import styled from "styled-components";
import { login } from "../actions";
import "./Register.css";
import { Link } from "react-router-dom";

const InInput = styled.input`
  width: 50%;
  height: 2em;
  text-align: center;
  border-radius: 10px;
  @media (max-width: 968px) {
    width: 50%;
    text-align: center;
  }
  @media (max-width: 668px) {
    width: 200px;
  }
`;

const IForm = styled.form`
  margin-top: 5%;
  text-align: center;
`;

const IButton = styled.button`
  width: 50%;
  height: 2em;
  border-radius: 10px;
  color: "#955251";
  background: #838487;
  color: white;
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

  isValid = () => {
    if (this.state.username === "" || this.state.password === "") {
      return false;
    }
    return true;
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
      <div className="loginDiv">
        <div>
          <i className="fas fa-user fa-5x"></i>
        </div>
        <IForm onSubmit={this.login} disabled={!this.isValid()}>
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
          <IButton size="lg" color="secondary">
            {" "}
            Log in
          </IButton>
        </IForm>
        <p className="regDiv">
          <Link
            style={{
              color: "#955251",
              textAlign: "center",
              background: "white",
              padding: "3%",
              border: "1px solid black",
              borderRadius: "10px",
              textDecoration: "none"
            }}
            to="/register"
          >
            Create account
          </Link>
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ loggingIn, error }) => ({
  error,
  loggingIn
});

export default connect(mapStateToProps, { login })(LogIn);
