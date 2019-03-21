import React from "react";
import "./GenerateBG.css";

const GenerateBG = ({ onGenerateBG }) => {
  return (
    <button
      className="generateBGBtn pa2 ma2 dim pointer"
      onClick={onGenerateBG}
    >
      Generate New Background
    </button>
  );
};

export default GenerateBG;
