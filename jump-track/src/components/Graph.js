import React from 'react';
import { connect } from "react-redux";
import c3 from 'c3';

class Graph extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      c3.generate({
        bindto: '#chart',
        data: {
          columns: [
            ['Jump Height Progression', ...this.props.goals],
          ]
        }
      });
    }, 500);
  }
  render() {
    return (
      <div id="chart" style={{
        heigth: "200px",
        width: "600px",
        background: "white",
      }}></div>
    )
  }
}

const mapStateToProps = ({ goals }) => ({
  goals: goals.map(goal => goal.jump_height)
});

export default connect(mapStateToProps)(Graph);