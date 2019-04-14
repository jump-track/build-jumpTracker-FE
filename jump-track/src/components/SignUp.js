import React from "react";
import "./SignUp.css";

const SignUp = props => {
  const { username, password, height, jumpHeight } = props;
  const { handleChange } = props;
  return (
    <div>
      <form>
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
          placeHolder="Username"
        />{" "}
        <br />
        <input
          type="text"
          value={password}
          name="password"
          onChange={handleChange}
          placeHolder="Password"
        />
        <br />
        <input
          type="number"
          value={height}
          name="height"
          onChange={handleChange}
          placeHolder="Height"
        />
        <br />
        <input
          type="text"
          value={jumpHeight}
          name="jumpHeight"
          onChange={handleChange}
          placeHolder="Jump Height"
        />
        <br />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
