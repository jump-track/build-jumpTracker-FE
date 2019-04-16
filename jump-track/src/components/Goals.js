import React from "react";
import "./Goals.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getData } from "../actions";

class Goals extends React.Component {
  // console.log("props", props.goals);
  componentDidMount() {
    this.props.getData();
  }

  handleClick = () => {
    this.props.history.push("/exercises");
  };
  render() {
    return (
      <div>
        <h2>Goals Component</h2>
        <div className="goalsDiv">
          {this.props.goals &&
            this.props.goals.map(item => (
              <div
                className="innerGoalsDiv"
                key={item.id}
                onClick={this.handleClick}
              >
                <h5>Name: {item.username}</h5>
                <h5>City: {item.address.city}</h5>
                <button>Delete</button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ goals }) => ({
  goals
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(Goals)
);
