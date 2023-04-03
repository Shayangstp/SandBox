import React, { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [temp, setTemp] = useState(0);

  const increaseTemp = () => {
    setTemp(temp + 1);
  };
  const decreaseTemp = () => {
    setTemp(temp - 1);
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div
        className="card shadow text-center position-relative"
        style={{ width: 400, height: 500 }}
      >
        <h1
          className={`card w-50 border border-dark rounded-circle position-absolute shadow d-flex align-items-center bg-${
            temp > 0 ? "danger" : "info"
          }`}
          style={{ height: "200px", top: "10%", left: " 25%" }}
        >
          <div className="position-absolute" style={{ top: "35%" }}>
            {temp}°c
          </div>
        </h1>
        <Button
          variant="outline-primary"
          style={{
            width: 100,
            position: "absolute",
            top: "350px",
            left: "50px",
          }}
          onClick={decreaseTemp}
        >
          -
        </Button>
        <Button
          variant="outline-danger"
          style={{
            width: 100,
            position: "absolute",
            top: "350px",
            left: "250px",
          }}
          onClick={increaseTemp}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default App;
