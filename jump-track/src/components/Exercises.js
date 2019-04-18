import React from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { exercise, exerciseGet } from "../actions";
import "./Exercises.css";
import styled from "styled-components";

const InnerDiv = styled.div`
  background: red;
  padding: 2%;
  margin: 2%;
  width: 20%;
  opacity: 0.4;
  border-radius: 10px;
`;

const OuterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`;
const InInput = styled.input`
  width: 30%;
  height: 40px;
`;

const IForm = styled.form`
  margin-left: 2%;
`;
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

  componentDidMount() {
    this.props.exerciseGet(this.props.match.params.id);
  }

  handleSubmit = e => {
    e.preventDefault();
    const modifiedObj = {
      exercises: this.state.exercise
    };
    this.props.exercise(this.props.match.params.id, modifiedObj);
    this.setState({
      exercise: ""
    });
  };

  render() {
    // console.log("exercise", this.props.goals);
    const { exercise } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <OuterDiv>
          {this.props.goals.map(item => (
            <InnerDiv key={item.id} className="exerciseInner">
              <h3>{item.exercises}</h3> <h3>{item.date}</h3>
            </InnerDiv>
          ))}
        </OuterDiv>
        <IForm onSubmit={e => handleSubmit(e)}>
          <FormGroup>
            {/* <button className="btn">Back</button> */}
            <InInput
              size="lg"
              type="text"
              value={exercise}
              name="exercise"
              onChange={handleChange}
              placeholder="enter your exercise"
            />
          </FormGroup>

          <Button color="primary">Update</Button>
        </IForm>
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
  { exercise, exerciseGet }
)(Exercises);
