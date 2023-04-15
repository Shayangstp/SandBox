import React from "react";

const SliderComponent = ({ inputValue, handleInput, bgColor }) => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center gap-5 mt-5 ">
      <input type="range" value={inputValue} onInput={handleInput} />
      <div
        style={{
          color: "black",
          background: `${bgColor}`,
          borderRadius: "50%",
          width: `${inputValue * 3}px`,
          height: `${inputValue * 3}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>{inputValue}</span>
      </div>
    </div>
  );
};

export default SliderComponent;
