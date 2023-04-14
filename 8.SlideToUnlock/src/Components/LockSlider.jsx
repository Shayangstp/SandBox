import React from "react";
import "./LockSlider.css";

const LockSlider = ({ inputHandler, inputValue, width }) => {
  let sliderStyle = {
    appearance: "none",
    width: width ? width : "200px",
    height: "30px",
    background: "rgba(188 , 190 , 188 , 0.5)",
    borderRadius: "25px",
    outline: "none",
    marginTop: "100px",
  };

  return (
    <input
      type="range"
      style={sliderStyle}
      className="slider mb-2 border-2"
      onInput={inputHandler}
      value={inputValue}
    />
  );
};

export default LockSlider;
