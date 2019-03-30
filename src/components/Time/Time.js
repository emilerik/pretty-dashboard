import React from "react";
import "./Time.css";
class Time extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: new Date() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { time } = this.state;
    const minutes = time.getMinutes();
    const hours = time.getHours();
    return (
      <h1 className="time">
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}{" "}
        {/* Adds a zero in front of single minutes */}
      </h1>
    );
  }
}
export default Time;
