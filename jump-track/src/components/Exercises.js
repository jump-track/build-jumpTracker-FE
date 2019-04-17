import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import "./Exercises.css";

class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: "",
      target: undefined
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
    this.setState({
      exercise: this.state.exercise,
      target: parseInt(this.state.target, 10)
    });
  };

  render() {
    const { exercise, target } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h2>{this.state.exercise}</h2>
          <h3>{this.state.target}</h3>
        </div>
        <form onSubmit={handleSubmit}>
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
          <FormGroup>
            <Label for="exampleEmail">Target</Label>
            <Input
              type="number"
              value={target}
              name="target"
              onChange={handleChange}
              placeholder="enter target in weeks"
            />
          </FormGroup>
          <Button className="signBtn">Update</Button>
        </form>
      </div>
    );
  }
}

export default Exercises;
