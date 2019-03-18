import React from "react";
import "./Weather.css";

const Weather = ({ temp }) => {
  console.log(temp);
  return <div>{temp}</div>;
};

export default Weather;
