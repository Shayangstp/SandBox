import React, { Fragment } from "react";
import "../App.css";

const Title = ({ text }) => {
  return (
    <div className="d-flex justify-content-center">
      <h1 className="fw-bold mt-5">{text}</h1>
    </div>
  );
};

export default Title;
