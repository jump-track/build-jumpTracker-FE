import React from "react";
import "./Goals.css";
import { withRouter, Link } from "react-router-dom";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { getData, post, deleteGoal, completed } from "../actions";
import Graph from './Graph';
import "./Goals.css";

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jumpHeight: undefined,
      target: undefined
    };
  }
  // console.log("props", props.goals);
  componentDidMount() {
    this.props.getData();
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: parseInt(e.target.value, 10)
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.post(this.state);
    this.setState({
      jumpHeight: "",
      target: ""
    });
  };

  checked = goal => {
    const goalBool = goal.completed === "false" ? false : true;

    console.log("goal1", goal);
    goal.completed = !goalBool;
    // goal.completed = !goal.completed;
    console.log("goal2", goal);
    this.props.completed(goal);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  delete = id => {
    this.props.deleteGoal(id);
  };

  render() {
    console.log("goals", this.props.goals);
    return (
      <div>
        <h2>Set your Goals</h2>
        <Graph />
        <div className="goals">
          {this.props.goals &&
            this.props.goals.map(goal => (
              <section
                key={goal.id}
                className={`${
                  goal.completed
                } ? goalCompleted : goalsInProgress`}
              >
                <i
                  className="fa fa-check"
                  style={{
                    fontSize: "24px",
                    color: "darkGray",
                    marginLeft: "3%",
                    background: "red",
                    padding: "1.3%",
                    borderRadius: "10px"
                  }}
                  onClick={() => this.checked(goal)}
                />
                <i
                  className="fa fa-close"
                  style={{
                    fontSize: "24px",
                    color: "darkGray",
                    marginLeft: "70%",
                    background: "red",
                    padding: "1% 2.5%",
                    borderRadius: "10px"
                  }}
                  onClick={() => this.delete(goal.id)}
                />

                <h3>{goal.jump_height} cm </h3>
                <h3>{goal.target_date}</h3>
                <Link
                  to={{
                    pathname: `/exercises/${goal.id}`
                  }}
                >
                  <Button style={{ marginLeft: "30%" }}>Exercise Log</Button>
                </Link>
              </section>
            ))}
        </div>
        <form onSubmit={this.handleSubmit} className="form">
          <FormGroup>
            <Label for="exampleEmail">Jump Height</Label>
            <Input
              type="text"
              value={this.state.jumpHeight}
              name="jumpHeight"
              onChange={this.handleChange}
              placeholder="enter your jump height"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Target</Label>
            <Input
              type="text"
              value={this.state.target}
              name="target"
              onChange={this.handleChange}
              placeholder="enter your target week"
            />
          </FormGroup>
          <Button className="signBtn">Set Goal</Button>
        </form>
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
    { getData, post, deleteGoal, completed }
  )(Goals)
);
