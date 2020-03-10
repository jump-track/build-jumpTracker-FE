import React from "react";
import { FormGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { login } from "../actions";
import "./Register.css";
import { Link } from "react-router-dom";

const InInput = styled.input`
  width: 30%;
  height: 2em;
  text-align: center;
  outline: none;
  border-radius: 10px;
  @media (max-width: 888px) {
    width: 50%;
    outline: none;
    text-align: center;
  }
  @media (max-width: 668px) {
    width: 70%;
    outline: none;
  }
`;

const IForm = styled.form`
  margin-top: 5%;
  text-align: center;
`;

const IButton = styled.button`
  width: 30%;
  height: 2em;
  outline: none;
  border-radius: 10px;
  color: "#955251";
  background: #838487;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
  @media (max-width: 888px) {
    width: 50%;
    outline: none;
  }
  @media (max-width: 668px) {
    width: 70%;
    outline: none;
  }
`;
const IButton1 = styled.button`
  margin-top: 3%;
  width: 20%;
  height: 2em;
  outline: none;
  border-radius: 10px;
  color: "#955251";
  color: white;
  &:hover {
    background-color: #088a29;
    color: white;
    cursor: pointer;
  }
  @media (max-width: 888px) {
    width: 50%;
    outline: none;
  }
  @media (max-width: 668px) {
    width: 70%;
    outline: none;
  }
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
    if (this.isValid) {
      this.props.login(this.state.credentials).then(() => {
        this.props.history.push("/protected");
      });
    }
  };

  render() {
    const { username, password } = this.state.credentials;
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "auto",
            paddingTop: "1.5%",
            paddingBottom: "1.6%",
            backgroundColor: "red",
            textAlign: "center"
          }}
        >
          <NavLink
            style={{ textDecoration: "none", marginLeft: "3%", color: "black" }}
            exact
            to="/"
          >
            {" "}
            <div>
              <i className="fas fa-home fa-2x"></i>{" "}
            </div>
          </NavLink>
          <div style={{ display: "flex" }}>
            <h4>Jump</h4>
            <img
              className="homeImg"
              src="https://image.flaticon.com/icons/png/512/1419/1419343.png"
              alt="drawing"
              width="50"
              height="50"
            />{" "}
            <h4>Tracker</h4>
          </div>

          <NavLink
            className="register-icon"
            style={{ textDecoration: "none", color: "black" }}
            to="/register"
          >
            <i className="fas fa-user-plus fa-2x"></i>
          </NavLink>
        </div>
        <div className="loginDiv">
          <div>
            <i
              className="fas fa-user fa-4x"
              style={{ textAlign: "center" }}
            ></i>
          </div>
          <div>
            <p>Log into Jump-Track</p>
            <p>
              Don't have an account?{" "}
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/register"
              >
                register
              </NavLink>
            </p>
          </div>
          <IForm onSubmit={this.login} disabled={!this.isValid()}>
            <FormGroup>
              <InInput
                size="lg"
                type="text"
                required={true}
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
                required={true}
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
          <IButton1>
            <Link
              className="create-account-login"
              style={{
                textDecoration: "none",
                color: "black"
              }}
              to="/register"
            >
              Create account
            </Link>
          </IButton1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ loggingIn, error }) => ({
  error,
  loggingIn
});

export default connect(mapStateToProps, { login })(LogIn);
