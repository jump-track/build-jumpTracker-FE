import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import "./Exercises.css";

class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: "",
      date: undefined
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  render() {
    const { exercise, date } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <h2>{this.props.phone}</h2>
        <h3>{this.props.website}</h3>
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
              value={date}
              name="date"
              onChange={handleChange}
              placeholder="enter date"
            />
          </FormGroup>
          <Button className="signBtn">Update</Button>
        </form>
      </div>
    );
  }
}

export default Exercises;
