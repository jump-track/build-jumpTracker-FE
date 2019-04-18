import React from "react";
import "./Goals.css";
import { withRouter, Link } from "react-router-dom";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import Graph from "./Graph";
import { getData, post, deleteGoal, completed } from "../actions";
import "./Goals.css";
import styled from "styled-components";

const GoalsMain = styled.div`
  display: flex;
  margin-top: 5%;
`;
const GoalsLower = styled.section`
  width: 100%;
  margin: 0 5% 5% 5%;
  background: white;
  padding: 5%;
  height: auto;
  opacity: 0.4;
  text-align: center;
`;
const TButton = styled.button`
  margin: 6% 0 0 6%;
`;
const GoalsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20%;
`;

const GoalsUpper = styled.div`
  margin-left: 2%;
`;
const InInput = styled.input`
  width: 50%;
  height: 40px;
  margin-top: 2%;
  background: lightblue;
  opacity: 0.4;
`;

const ISpan = styled.span`
  font-size: 16px;
  padding: 2% 5%;
  background: red;
`;

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
  // className = {`item${props.item.purchased ? " purchased" : ""}`

  render() {
    return (
      <GoalsMain>
        <GoalsUpper>
          <Graph />
          <form onSubmit={this.handleSubmit} className="form">
            <FormGroup>
              <InInput
                type="text"
                value={this.state.jumpHeight}
                name="jumpHeight"
                onChange={this.handleChange}
                placeholder="enter your jump height"
              />
            </FormGroup>
            <FormGroup>
              <InInput
                type="text"
                value={this.state.target}
                name="target"
                onChange={this.handleChange}
                placeholder="enter your target week"
              />
            </FormGroup>
            <Button className="signBtn">Set Goal</Button>
          </form>
        </GoalsUpper>
        <GoalsFlex>
          {this.props.goals &&
            this.props.goals.map(goal => (
              <GoalsLower>
                <h3>
                  {goal.jump_height} cm{" "}
                  <ISpan onClick={() => this.checked(goal)}>
                    {" "}
                    <i className="fas fa-check" />
                  </ISpan>
                </h3>

                <h3>{goal.target_date}</h3>
                <Link
                  to={{
                    pathname: `/exercises/${goal.id}`
                  }}
                >
                  <TButton size="lg" color="primary">
                    Exercise Log
                  </TButton>
                </Link>
                <TButton
                  size="lg"
                  color="primary"
                  onClick={() => this.delete(goal.id)}
                >
                  Delete
                </TButton>
              </GoalsLower>
            ))}
        </GoalsFlex>
      </GoalsMain>
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
