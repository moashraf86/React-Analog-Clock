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
    return (
      <div className="clock">
        <div
          className="hours"
          style={{
            transform: `rotate(${
              ((this.state.date.getHours() - 12) / 12) * 360
            }deg)`
          }}
        ></div>
        <div
          className="minutes"
          style={{
            transform: `rotate(${(this.state.date.getMinutes() / 60) * 360}deg)`
          }}
        ></div>
        <div
          className="seconds"
          style={{
            transform: `rotate(${(this.state.date.getSeconds() / 60) * 360}deg)`
          }}
        ></div>
        <div className="clock_circle"></div>
      </div>
    );
  }
}
