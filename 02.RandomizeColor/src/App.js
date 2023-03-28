import "./App.css";
import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import RandomizeColor from "./RandomizeColor";

function App() {
  const [bgColor, setBgColor] = useState();
  const [Btncolor, setBtnColor] = useState();

  const changeColorHandler = (e) => {
    const body = document.querySelector("body");

    setBgColor(colorChanger);
    setBtnColor(colorChanger);

    body.style.background = bgColor;
    e.target.style.background = Btncolor;
  };

  const colorChanger = () => {
    let hex = "0123456789ABCDEF";
    let hash = "#";
    let bgcolor = "";

    for (let i = 0; i < 6; i++) {
      bgcolor += hex[Math.floor(Math.random() * 16)];
    }

    return hash + bgcolor;
  };

  return (
    <div className="App">
      <h1 className="text-center mt-5" style={{ color: bgColor }}>
        Randomize Color
      </h1>
      <RandomizeColor onClick={changeColorHandler} Change={bgColor} />
    </div>
  );
}

export default App;
