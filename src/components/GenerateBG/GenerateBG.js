import React from "react";
import Button from "@material-ui/core/Button";
import "./GenerateBG.css";

const GenerateBG = ({ onGenerateBG }) => {
  return (
    <div className="generateBGBtn pa2 ma2">
      <Button
        variant="outlined"
        color="inherit"
        onClick={onGenerateBG}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
      >
        Generate new background
      </Button>
    </div>
  );
};

export default GenerateBG;
