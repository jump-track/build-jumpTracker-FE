import React from "react";
import { FormGroup } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { exercise, exerciseGet } from "../actions";
import "./Exercises.css";
import styled from "styled-components";

const InnerDiv = styled.div`
  background: #9896a4;
  color: #034f84;
  padding: 2%;
  margin: 2%;
  width: 35%;
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
  padding-left: 5%;
  @media (max-width: 968px) {
    width: 100%;
    margin-top: 5%;
    text-align: center;
  }
  @media (max-width: 668px) {
    width: 100%;
    margin-top: 5%;
  }
`;
const InInput = styled.input`
  width: 80%;
  height: 40px;
  opacity: 0.5;
  border-radius: 10px;
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
  border-radius: 10px;
  height: 35px;
  color: white;
  @media (max-width: 968px) {
    width: 90%;
    margin-bottom: 25%;
    height: 50px;
    color: white;
  }
  @media (max-width: 668px) {
    width: 90%;
    margin-bottom: 25%;
    height: 50px;
    color: white;
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
    text-align: center;
  }
  @media (max-width: 668px) {
    // margin-left: 2%;
    text-align: center;
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
            to="/protected"
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
      </div>
    );
  }
}

const mapStateToProps = ({ updatingExercise, error, goals }) => ({
  error,
  updatingExercise,
  goals
});

export default connect(mapStateToProps, { exercise, exerciseGet })(Exercises);
