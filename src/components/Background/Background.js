import React from "react";
import background from "./test-background.jpg";
import "./Background.css";

console.log(background);
let styles = {
  height: "100vh",
  backgroundImage: "url(" + background + ")",
  backgroundSize: "cover",
  overflow: "hidden"
};

const Background = props => {
  return (
    <div className="background" style={styles}>
      {props.children}
    </div>
  );
};

export default Background;
