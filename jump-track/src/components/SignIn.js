import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import "./SignUp.css";

const SignIn = props => {
  const { username, password } = props;
  const { handleChange, handleLogInSubmit } = props;

  return (
    <div>
      <form onSubmit={handleLogInSubmit} className="form">
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
        <Button className="signBtn">Sign In</Button>
      </form>
    </div>
  );
};
export default SignIn;
