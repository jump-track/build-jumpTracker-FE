import React from "react";
import "./Goals.css";
import { Link } from "react-router-dom";
import { Button, FormGroup } from "reactstrap";
import { connect } from "react-redux";
// import Graph from "./Graph";
import { getData, post, deleteGoal, completed } from "../actions";
import "./Goals.css";
import styled from "styled-components";
import myImage1 from "./image/correct-symbol.png";
import myImage2 from "./image/delete-button.png";
import myImage3 from "./image/send.png";

const GoalsMain = styled.div`
  height: 760px;
  @media (max-width: 968px) {
    // flex-wrap: wrap;
    width: 100%;
  }

  @media (max-width: 668px) {
    flex-direction: column;
  }
`;
const GoalsFlex = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const GoalsLower = styled.section`
  background: #9896a4;
  opacity: 0.8;
  position: relative;
  color: white;
  width: 15%;
  text-align: center;
  padding: 1% 0;
  border-radius: 5%;
  height: auto;
  margin: 2%;
  @media (max-width: 968px) {
    width: 50%;
  }
  @media (max-width: 868px) {
    width: 100%;
  }
`;

const GoalsUpper = styled.div`
  width: 100%;
`;
const InInput = styled.input`
  width: 80%;
  text-align: center;
  height: 40px;
  @media (max-width: 968px) {
    width: 100%;
  }
  @media (max-width: 668px) {
    width: 200px;
  }
`;

class Goals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jumpHeight: "",
      target: "",
      refresh: false
    };
  }

  componentDidMount() {
    this.props.getData();
  }

  componentDidUpdate(prevState) {
    if (this.state.refresh !== prevState.refresh) {
      this.props.getData();
    }
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
    goal.completed = !goal.completed;
    this.props.completed(goal);
  };

  delete = id => {
    this.setState({
      refresh: !this.state.refresh
    });
    this.props.deleteGoal(id);
  };

  render() {
    return (
      <GoalsMain>
        <GoalsUpper>
          {/* <Graph className="graph" /> */}
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
              <GoalsLower key={goal.id}>
                {goal.completed ? (
                  <p style={{ textDecoration: "line-through" }}>
                    Target Height: {goal.jump_height}cm
                  </p>
                ) : (
                  <p style={{ textDecoration: "none" }}>
                    Target Height: {goal.jump_height}cm
                  </p>
                )}

                {goal.completed ? (
                  <p style={{ textDecoration: "line-through" }}>
                    {goal.target_date}
                  </p>
                ) : (
                  <p style={{ textDecoration: "none" }}>{goal.target_date}</p>
                )}

                <div className="pngs">
                  <img
                    onClick={() => this.checked(goal)}
                    src={myImage1}
                    alt="drawing"
                    width="30"
                    height="30"
                  />
                  <img
                    onClick={() => this.delete(goal.id)}
                    src={myImage2}
                    alt="drawing"
                    width="30"
                    height="30"
                  />
                  <Link
                    to={{
                      pathname: `/exercises/${goal.id}`
                    }}
                  >
                    <img src={myImage3} alt="drawing" width="30" height="30" />
                  </Link>
                </div>
              </GoalsLower>
            ))}
        </GoalsFlex>
      </GoalsMain>
    );
  }
}

const mapStateToProps = state => {
  return {
    goals: state.goals
  };
};

export default connect(
  mapStateToProps,
  { getData, post, deleteGoal, completed }
)(Goals);
