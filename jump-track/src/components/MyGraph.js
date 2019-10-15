import React from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";

class MyGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
        datasets: [
          {
            label: "heights",
            backgroundColor: "rgba(122, 96, 72, 1)",
            data: [...this.props.goals]
          }
        ]
      }
    };
  }
  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 600, 550);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "gray");
    return gradient;
  };
  getChartData = canvas => {
    const data = this.state.data;
    if (data.datasets) {
      let colors = ["green", "red"];
      data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor = "white";
        set.borderWidth = 2;
      });
    }
    return data;
  };

  render() {
    return (
      <div style={{ width: 500, height: 600 }}>
        <Line
          options={{
            responsive: true
          }}
          data={this.getChartData}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ goals }) => ({
  goals: goals.map(goal => goal.jump_height)
});

export default connect(mapStateToProps)(MyGraph);
