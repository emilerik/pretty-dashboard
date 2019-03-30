import React from "react";
import "./Weather.css";

const getWeatherSymbol = WSNum => {
  const weatherSymbols = ["☼", "🌤", "⛅", "🌥", "☁", "☁", "🌫", "🌦", "🌦"];
  return weatherSymbols[WSNum];
};

// const Weather = ({ temp, windSpeed, precipitation, weatherSymbol }) => {
const Weather = ({ weather }) => {
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
    <div
      className="dib helvetica tc br4 temp pa1 ma3 f3 white"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <p className="b pa2 ma0">
        {temp}°C &nbsp; {getWeatherSymbol(weatherSymbol)} &nbsp; {windSpeed} m/s
      </p>
      {/* <p className="b pa2 ma0">{windSpeed} m/s</p> */}
      {/* {rainStatus ? <p className="pa2 ma0">{rainStatus}</p> : null} */}
      {/* <h3>weatherSymbol: {weatherSymbol}</h3> */}
    </div>
  );
};

export default Weather;
