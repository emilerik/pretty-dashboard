import React from "react";
import "./Time.css";

const currentTime = new Date();
const Time = () => {
  return (
    <h1 className="time">{`${currentTime.getHours()}:${currentTime.getMinutes()}`}</h1>
  );
};
export default Time;
