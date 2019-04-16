import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import "./SignUp.css";

class SignUp extends React.Component {
  render() {
    const { username, password, height, jumpHeight } = this.props;
    const { handleChange, handleSubmit } = this.props;
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

export default SignUp;
