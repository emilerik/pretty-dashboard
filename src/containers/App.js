import React, { Component } from "react";
import Time from "../components/Time/Time";
import GenerateBG from "../components/GenerateBG/GenerateBG";
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
      },
      backgroundUrl: "https://source.unsplash.com/1600x900/?wallpaper",
      urlCounter: 1
    };
  }

  onGenerateBG = () => {
    this.state.urlCounter === 1
      ? this.setState({
          backgroundUrl: "https://source.unsplash.com/1600x900/?wallpaper",
          urlCounter: 2
        })
      : this.setState({
          backgroundUrl: "https://source.unsplash.com/1600x900/?hdwallpaper",
          urlCounter: 1
        });
  };

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
        <Background backgroundUrl={this.state.backgroundUrl}>
          <Weather weather={this.state.currentWeather} />
          <div className="tc middle">
            <Time />
            <Greeting />
          </div>
          <GenerateBG onGenerateBG={this.onGenerateBG} />
        </Background>
      </div>
    );
  }
}

export default App;
