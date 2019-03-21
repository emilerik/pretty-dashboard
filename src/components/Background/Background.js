import React from "react";
// import background from "./test-background.jpg";
import "./Background.css";

const backgroundUrl = "https://source.unsplash.com/1600x900/?wallpaper";
// const backgroundUrl = "https://images.unsplash.com/photo-1552576318-bef61a9c9e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3032&q=80";

let styles = {
  height: "100vh",
  backgroundImage: "url(" + backgroundUrl + ")",
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
