import React from "react";

const SignIn = props => {
  const { username, password } = props;
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
        <button>Sign In</button>
      </form>
    </div>
  );
};
export default SignIn;
