import React from "react";
import "./Greeting.css";

const currentTime = new Date();
const Greeting = () => {
  const hour = currentTime.hours;
  if (hour < 10) {
    return <h1>Good morning, Emil</h1>;
  } else if (hour < 14) {
    return <h1>Good day, Emil</h1>;
  } else if (hour < 18) {
    return <h1>Good afternoon, Emil</h1>;
  } else {
    return <h1>Good evening, Emil</h1>;
  }
};

export default Greeting;
