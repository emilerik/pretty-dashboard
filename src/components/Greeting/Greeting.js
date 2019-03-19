import React from "react";
import "./Greeting.css";

const currentTime = new Date();
const Greeting = () => {
  const hour = currentTime.hours;
  if (hour < 10) {
    return <h1>Godmorgon, Emil</h1>;
  } else if (hour < 14) {
    return <h1>God dag, Emil</h1>;
  } else if (hour < 18) {
    return <h1>God middag, Emil</h1>;
  } else {
    return <h1>God kväll, Emil</h1>;
  }
};

export default Greeting;
