import React from "react";
import { FormGroup } from "reactstrap";
import { connect } from "react-redux";
import { exercise, exerciseGet } from "../actions";
import "./Exercises.css";
import styled from "styled-components";

const InnerDiv = styled.div`
  background: #9896a4;
  color: #034f84;
  padding: 2%;
  margin: 2%;
  width: 20%;
  opacity: 0.8;
  border-radius: 10px;
  @media (max-width: 968px) {
    width: 100%;
  }
  @media (max-width: 668px) {
    width: 400px;
  }
`;

const OuterDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  color: red;
`;
const InInput = styled.input`
  width: 80%;
  height: 40px;
  opacity: 0.5;
  text-align: center;
  @media (max-width: 968px) {
    width: 90%;
    text-align: center;
  }
  @media (max-width: 668px) {
    width: 90%;
  }
`;

const IButton = styled.button`
  width: 40%;
  background: #838487;
  border-radius: 5%;
  height: 35px;
  color: white;
  @media (max-width: 968px) {
    width: 90%;
    margin-bottom: 25%;
    height: 50px;
    // color: "#955251";
  }
  @media (max-width: 668px) {
    width: 90%;
    margin-bottom: 25%;
    height: 50px;
    color: gray;
  }
`;
const IForm = styled.form`
  margin: 0 0 0.5% 1%;
  padding: 10px;
  position: fixed;
  left: 15px;
  bottom: 10px;
  width: 400px;
  @media (max-width: 968px) {
    margin-left: 2%;
  }
  @media (max-width: 668px) {
    margin-left: 2%;
  }
`;
class Exercises extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: "",
      loaded: false
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
      exercises: this.state.exercise,
      loaded: !this.state.loaded
    };
    this.props.exercise(this.props.match.params.id, modifiedObj);
    this.setState({
      exercise: "",
      loaded: !this.state.loaded
    });
  };

  render() {
    const { exercise } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="exerciseDiv">
        <OuterDiv>
          {this.props.goals.map(item => (
            <InnerDiv key={item.id} className="exerciseInner">
              <p>{item.exercises}</p> <p>{item.date}</p>
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

          <IButton>Update</IButton>
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
