import React, { Component } from "react";
import Time from "../components/Time/Time";
import Calendar from "../components/Calendar/Calendar";
import Greeting from "../components/Greeting/Greeting";
import Weather from "../components/Weather/Weather";
import Background from "../components/Background/Background";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentWeather: {
        temp: "",
        windSpeed: "",
        precipitation: "",
        weatherSymbol: ""
      }
    };
  }

  componentDidMount() {
    fetch(
      "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/15.598989/lat/58.412826/data.json"
    )
      .then(response => response.json())
      .then(weather =>
        this.setState({
          currentWeather: {
            temp: weather.timeSeries[0].parameters[11].values[0],
            windSpeed: weather.timeSeries[0].parameters[14].values[0],
            precipitation: weather.timeSeries[0].parameters[1].values[0],
            weatherSymbol: weather.timeSeries[0].parameters[18].values[0]
          }
        })
      );
  }

  render() {
    return (
      <div>
        <Background>
          <Weather weather={this.state.currentWeather} />
          <div className="tc middle">
            <Time />
            <Greeting />
          </div>
          <Calendar />
        </Background>
      </div>
    );
  }
}

export default App;
