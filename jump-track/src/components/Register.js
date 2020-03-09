import React from "react";
import { FormGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Register.css";
import { register } from "../actions";
import { connect } from "react-redux";
import styled from "styled-components";

const InInput = styled.input`
  width: 30%;
  height: 2em;
  border-radius: 10px;
  text-align: center;
  @media (max-width: 888px) {
    width: 50%;
  }
  @media (max-width: 668px) {
    width: 70%;
  }
`;

const FormRegister = styled.form`
  margin: 5%;
  text-align: center;
`;

const TButton = styled.button`
  width: 30%;
  height: 2em;
  border-radius: 10px;
  background: #838487;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
  @media (max-width: 888px) {
    width: 50%;
  }
  @media (max-width: 668px) {
    width: 70%;
  }
`;

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      height: "",
      jumpHeight: ""
    };
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  isValid = () => {
    if (
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.height === "" ||
      NaN ||
      this.state.jumpHeight === "" ||
      NaN
    ) {
      return false;
    }
    return true;
  };

  register = e => {
    e.preventDefault();
    if (this.isValid) {
      let stateObj = this.state;
      stateObj.height = parseInt(this.state.height, 10);
      stateObj.jumpHeight = parseInt(this.state.jumpHeight, 10);
      this.props.register(stateObj).then(() => {
        this.props.history.push("/login");
      });
    }
  };

  // logOut = () => {
  //   localStorage.removeItem("token");
  // };

  render() {
    const { username, password, height, jumpHeight } = this.state;
    const { handleChange } = this;
    return (
      <div className="regDiv">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "auto"
          }}
        >
          <NavLink
            style={{ textDecoration: "none", marginLeft: "3%", color: "black" }}
            exact
            to="/"
          >
            {" "}
            <div>
              <i class="fas fa-home fa-2x"></i>{" "}
            </div>
          </NavLink>
          <div>
            <p>Create Account</p>
            <p>
              Already have an account?{" "}
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/logIn"
              >
                login
              </NavLink>
            </p>
          </div>

          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/logIn"
          >
            <i className="fas fa-sign-in-alt fa-2x"></i>
          </NavLink>
        </div>
        <FormRegister onSubmit={this.register}>
          <FormGroup>
            <InInput
              size="lg"
              type="text"
              required={true}
              value={username}
              name="username"
              onChange={handleChange}
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
              onChange={handleChange}
              placeholder="enter your password"
            />
          </FormGroup>
          <FormGroup>
            <InInput
              size="lg"
              type="text"
              required={true}
              value={height}
              name="height"
              onChange={handleChange}
              placeholder="enter your height"
            />
          </FormGroup>
          <FormGroup>
            <InInput
              size="lg"
              type="text"
              required={true}
              value={jumpHeight}
              name="jumpHeight"
              onChange={handleChange}
              placeholder="enter your jump-height"
            />
          </FormGroup>
          <TButton disabled={!this.isValid()} size="lg" color="secondary">
            Create Account
          </TButton>
        </FormRegister>
      </div>
    );
  }
}

const mapStateToProps = ({ signingUp, error }) => ({
  error,
  signingUp
});

export default connect(mapStateToProps, { register })(Register);
