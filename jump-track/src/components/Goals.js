import React from "react";
import "./Goals.css";

const Goal = props => {
  // console.log("props", props.goals);
  return (
    <div>
      <h2>Goals Component</h2>
      <div className="goalsDiv">
        {props.goals &&
          props.goals.map(item => (
            <div className="innerGoalsDiv" key={item.id}>
              <h5>Jump-Height: {item.jumpHeight}</h5>
              <h5>Start-Date: {item.startDate}</h5>
              <h5>Target-Date: {item.targetDate}</h5>
              <button onClick={() => props.handleDelete(props.goals.id)}>
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Goal;
