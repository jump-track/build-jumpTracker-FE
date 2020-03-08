import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeDiv">
      <section className="homeFlex">
        <div>
          <img
            className="homeImg"
            src="https://image.flaticon.com/icons/png/512/1419/1419343.png"
            alt="drawing"
            width="50"
            height="50"
          />{" "}
        </div>
        <div>
          <h1>Jump Tracker</h1>
        </div>
      </section>
      <p className="homeP">
        Welcome to the Jump Tracker application. Jumping is one athletic
        movement that can greatly effect your game, for better or worse. With a
        specialized training regiment YOU can improve your jumping height and or
        distance. This requires sheer force of will combined with 100%
        commitment. There are going to be alot of obstacles in your way. We all
        want to have some type of gratification when we truly apply ourselves to
        a goal. Documenting the information for jumping can be frustrating. You
        find a great jumping exercise regime here and there, but not at the same
        place and time. What about documenting the benchmark you started your
        exercise program at? Recording the data can not only be difficult, but
        also unrewarding. This can cause us mentally to feel ungratified with
        our efforts.
      </p>
      <p className="homeP">
        Enter the world of technology. Have you ever noticed how your life is
        streamlined by technology. It can encompass your life, both leading you
        in the direction you intended, or leave you lost in the wilderness. This
        is a fine line. With our application, we give you access to enhancing
        your life's endeavors to jump higher. We want you to "JUMP" past your
        goals, and help you along the whole way. The foreshadowed issues above
        are easily handled with this application. Please...
      </p>
      <div className="buttonFlex">
        <button className="buttonHover">
          <Link
            style={{
              color: "#672E3B",
              textDecoration: "none",
              textShadow: "1px 1px #5a7a80"
            }}
            to="/logIn"
          >
            Log In{" "}
          </Link>
        </button>
        <button className="buttonHover">
          <Link
            style={{
              color: "#672E3B",
              textDecoration: "none",
              textShadow: "1px 1px #5a7a80"
            }}
            to="/register"
          >
            Register today!
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Home;
