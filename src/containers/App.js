import React, { Component } from "react";
import Time from "../components/Time/Time";
import GenerateBG from "../components/GenerateBG/GenerateBG";
import Greeting from "../components/Greeting/Greeting";
import Weather from "../components/Weather/Weather";
import Background from "../components/Background/Background";
import GearBtn from "../components/GearBtn/GearBtn";
import { API_key } from "../API.js";
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
      // backgroundUrl: "",
      backgroundUrl: "https://source.unsplash.com/1600x900/?wallpaper",
      lat: "58.412826",
      long: "15.598989",
      positionErr: false
    };
  }

  onGenerateBG = () => {
    fetch(
      "https://api.unsplash.com/photos/random/?query=wallpaper&orientation=landscape&featured",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Client-ID " + API_key
        }
      }
    )
      .then(response => response.json())
      .then(data => this.setState({ backgroundUrl: data.urls.regular }))
      .catch(err => console.log(err));
  };

  onPositionChange = (lat, long) => {
    this.setState({ lat: lat, long: long });
    this.updateWeatherData();
  };

  updateWeatherData = () => {
    const { lat, long } = this.state;
    fetch(
      `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`
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
      )
      .catch(err => this.setState({ positionErr: true }));
    console.log(this.state);
  };

  componentDidMount() {
    this.updateWeatherData();
    this.onGenerateBG();
  }

  render() {
    return (
      <div>
        <Background backgroundUrl={this.state.backgroundUrl}>
          <div className="w-25 tl left">
            <Weather weather={this.state.currentWeather} />
          </div>
          <div className="w-50 tc middle">
            <Time />
            <Greeting />
          </div>
          <div className="w-25 tr right">
            <GearBtn
              positionErr={this.state.positionErr}
              onPositionChange={this.onPositionChange}
            />
            <GenerateBG onGenerateBG={this.onGenerateBG} />
          </div>
        </Background>
      </div>
    );
  }
}

export default App;
