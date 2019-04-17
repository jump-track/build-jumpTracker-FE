import React from "react";
import "./Goals.css";
import { withRouter } from "react-router-dom";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { getData, post } from "../actions";
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
  handleClick = e => {
    e.preventDefault();
    this.props.history.push("/exercises");
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.post(this.state);
    this.setState({
      jumpHeight: "",
      target: ""
    });
  };
  render() {
    // console.log("goals", this.props.goals);
    return (
      <div>
        <h2>Set your Goals</h2>
        <div className="goals">
          {this.props.goals &&
            this.props.goals.map(goal => (
              <section
                key={goal.id}
                className="goalsh3"
                onClick={this.handleClick}
              >
                <h3>jump-height: {goal.jump_height} </h3>
                <button>update</button>
                <button>delete</button>
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
    { getData, post }
  )(Goals)
);
