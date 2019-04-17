import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import "./Exercises.css";
import { connect } from "react-redux";
import { exercise } from "../actions";

class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: ""
    };
  }
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("goalsID", this.props.match.params.id);
    const modifiedObj = {
      exercises: this.state.exercise
    };
    this.props.exercise(this.props.match.params.id, modifiedObj);
  };

  render() {
    const { exercise } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <form onSubmit={e => handleSubmit(e)} className="form">
          <FormGroup>
            <Label for="exampleEmail">Exercise</Label>
            <Input
              type="text"
              value={exercise}
              name="exercise"
              onChange={handleChange}
              placeholder="enter exercise"
            />
          </FormGroup>

          <Button className="signBtn">Update</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ updatingExercise, error, goals }) => ({
  error,
  updatingExercise,
  goals
});

export default connect(
  mapStateToProps,
  { exercise }
)(Exercises);
