import React from "react";

const Title = ({ text }) => {
  return <h2>{!text ? "Title" : text}</h2>;
};

export default Title;
