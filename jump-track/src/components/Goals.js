import React from "react";
import "./Goals.css";
import { Link, NavLink } from "react-router-dom";
import { Button, FormGroup } from "reactstrap";
import { connect } from "react-redux";
import MyGraph from "./MyGraph";
import { getData, post, deleteGoal, completed } from "../actions";
import "./Goals.css";
import styled from "styled-components";
import myImage1 from "./image/correct-symbol.png";
import myImage2 from "./image/delete-button.png";
import myImage3 from "./image/send.png";

const GoalsMain = styled.div`
  position: relative;
  @media (max-width: 888px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 668px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;
const GoalsFlex = styled.div`
  width: 100%;
  margin-left: 5%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 888px) {
    margin-top: 5%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  @media (max-width: 668px) {
    margin-top: 5%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
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
  @media (max-width: 888px) {
    width: 40%;
  }
  @media (max-width: 668px) {
    width: 40%;
  }
`;

const GoalsUpper = styled.div`
  width: 100%;
  @media (max-width: 888px) {
    width: 70%;
  }
  @media (max-width: 668px) {
    width: 70%;
  }
`;
const InInput = styled.input`
  width: 80%;
  border-radius: 10px;
  text-align: center;
  height: 40px;
  @media (max-width: 888px) {
    width: 70%;
  }
  @media (max-width: 668px) {
    width: 70%;
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
      <div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "auto",
              paddingTop: "1.5%",
              paddingBottom: "1.6%",
              textAlign: "center",
              backgroundColor: "#888281"
            }}
          >
            <NavLink
              style={{
                textDecoration: "none",
                marginLeft: "3%",
                color: "black"
              }}
              exact
              to="/"
            >
              {" "}
              <div>
                <i className="fas fa-home fa-2x"></i>{" "}
              </div>
            </NavLink>
            <div style={{ display: "flex" }}>
              <h4>Jump</h4>
              <img
                className="homeImg"
                src="https://image.flaticon.com/icons/png/512/1419/1419343.png"
                alt="drawing"
                width="50"
                height="50"
              />{" "}
              <h4>Tracker</h4>
            </div>
            <NavLink
              className="margin-right"
              style={{ textDecoration: "none", color: "black" }}
              to="/register"
            >
              <i class="fas fa-sign-out-alt fa-2x"></i>
            </NavLink>
          </div>
        </div>
        <GoalsMain>
          <GoalsUpper style={{ position: "relative" }}>
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
                    <div>
                      <p style={{ textDecoration: "line-through" }}>
                        Target Height: {goal.jump_height}cm
                      </p>
                      <p>{goal.target_date}</p>
                    </div>
                  ) : (
                    <div>
                      <p style={{ textDecoration: "none" }}>
                        Target Height: {goal.jump_height}cm
                      </p>
                      <p>{goal.target_date}</p>
                    </div>
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
                      <img
                        src={myImage3}
                        alt="drawing"
                        width="30"
                        height="30"
                      />
                    </Link>
                  </div>
                </GoalsLower>
              ))}
          </GoalsFlex>
          <div
            style={{
              position: "fixed",
              width: "600px",
              height: "300px",
              bottom: 0,
              right: 0
            }}
          >
            <div class="graph">
              <MyGraph />
            </div>
          </div>
        </GoalsMain>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    goals: state.goals
  };
};

export default connect(mapStateToProps, {
  getData,
  post,
  deleteGoal,
  completed
})(Goals);
