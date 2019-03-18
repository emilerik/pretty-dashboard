import React, { Component } from "react";
import Time from "../components/Time/Time";
import Greeting from "../components/Greeting/Greeting";
import Weather from "../components/Weather/Weather";
import Background from "../components/Background/Background";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentTemp: ""
    };
  }

  componentDidMount() {
    fetch(
      "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/15.598989/lat/58.412826/data.json"
    )
      .then(response => response.json())
      .then(weather =>
        this.setState({
          currentTemp: weather.timeSeries[3].parameters[1].values[0]
        })
      );
  }

  render() {
    return (
      <div>
        <Background>
          <Weather temp={this.state.currentTemp} />
          <div className="tc middle">
            <Time />
            <Greeting />
          </div>
        </Background>
      </div>
    );
  }
}

export default App;
