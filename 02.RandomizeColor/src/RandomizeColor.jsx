import React from "react";
import { Button } from "react-bootstrap";

const RandomizeColor = ({ onClick, Change }) => {
  return (
    <div className="d-flex justify-content-around mt-5 p-5  ">
      <Button
        className="py-3 px-5 border-0"
        style={{ color: Change }}
        onClick={onClick}
      >
        Change Color
      </Button>
    </div>
  );
};

export default RandomizeColor;
