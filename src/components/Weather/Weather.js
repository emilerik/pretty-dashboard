import React from "react";
import "./Weather.css";

const getWeatherSymbol = WSNum => {
  const weatherSymbols = ["☼", "🌤", "⛅", "🌥", "☁", "☁", "🌫", "🌦", "🌦"];
  return weatherSymbols[WSNum];
};

// const Weather = ({ temp, windSpeed, precipitation, weatherSymbol }) => {
const Weather = ({ weather }) => {
  console.log(weather);
  const { temp, windSpeed, precipitation, weatherSymbol } = weather;
  let rainStatus = "";
  switch (precipitation) {
    case 1:
      rainStatus = "Snow";
      break;
    case 2:
      rainStatus = "Snow & rain";
      break;
    case 3:
      rainStatus = "Rain";
      break;
    case 4:
      rainStatus = "Drizzle";
      break;
    case 5:
      rainStatus = "Freezing rain";
      break;
    case 6:
      rainStatus = "Freezing drizzle";
      break;
    default:
      break;
  }
  return (
    <div className="helvetica tc ba br4 temp pa1 ma3 f3 white">
      <p className="b pa2 ma0">
        {temp}°C | {windSpeed} m/s
      </p>
      {/* <p className="b pa2 ma0">{windSpeed} m/s</p> */}
      {rainStatus ? <p className="pa2 ma0">{rainStatus}</p> : null}
      {/* <h3>weatherSymbol: {weatherSymbol}</h3> */}
      <p className="f3 pa2 ma0">{getWeatherSymbol(weatherSymbol)}</p>
    </div>
  );
};

export default Weather;
