import React from "react";
// import background from "./test-background.jpg";
import "./Background.css";

// const backgroundUrl = "https://source.unsplash.com/1600x900/?wallpaper";

const Background = props => {
  const { backgroundUrl } = props;
  console.log(backgroundUrl);
  let styles = {
    height: "100vh",
    backgroundImage: "url(" + backgroundUrl + ")",
    // backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    overflow: "hidden"
  };
  return (
    <div className="background" style={styles}>
      {props.children}
    </div>
  );
};

export default Background;
