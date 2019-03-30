import React from "react";
import "./Greeting.css";

const currentTime = new Date();
const Greeting = ({ name }) => {
  const hour = currentTime.getHours();
  if (hour > 18 || hour < 4) {
    return <h1>Godkväll, {name}</h1>;
  } else if (hour < 10) {
    return <h1>Godmorgon, {name}</h1>;
  } else if (hour < 14) {
    return <h1>God dag, {name}</h1>;
  } else {
    return <h1>God middag, {name}</h1>;
  }
};

export default Greeting;
