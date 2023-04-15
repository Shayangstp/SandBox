import "./App.css";
import { useState } from "react";
import SliderComponent from "./SliderComponent";

function App() {
  const [value, setValue] = useState(0);

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  let bgColor;

  if (value < 25) {
    bgColor = "green";
  }
  if (25 < value && value >= 50) {
    bgColor = "yellow";
  }
  if (50 < value && value >= 75) {
    bgColor = "orange";
  }
  if (75 < value && value >= 100) {
    bgColor = "red";
  }

  return (
    <div className="App">
      <SliderComponent
        handleInput={inputHandler}
        inputValue={value}
        bgColor={bgColor}
      />
    </div>
  );
}

export default App;
