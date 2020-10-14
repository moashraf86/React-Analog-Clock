import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.Timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.Timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    let seconds = this.state.date.getSeconds();
    let seconds_degree = (seconds / 60) * 360;
    let minutes = this.state.date.getMinutes();
    let minutes_degree = (minutes / 60) * 360 + seconds / 60;
    let hours = this.state.date.getHours();
    let hours_degree = ((hours / 12) * 360) + (minutes / 60);

    return (
      <div className="clock">
        <div
          className="hours"
          style={{
            transform: `rotate(${hours_degree}deg)`
          }}
        ></div>
        <div
          className="minutes"
          style={{
            transform: `rotate(${minutes_degree}deg)`
          }}
        ></div>
        <div
          className="seconds"
          style={{
            transform: `rotate(${seconds_degree}deg)`
          }}
        ></div>
        <div className="clock_circle"></div>
      </div>
    );
  }
}
