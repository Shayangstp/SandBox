import "./App.css";
import React, { Fragment, useState } from "react";
import Title from "./Components/Title";

function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setName("");
    setDate("");
  };

  return (
    <Fragment>
      <Title text={name ? name : "Name"} />
      <Title text={date ? date : "Date"} />
      <p className="text-center mt-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet in
        voluptates laudantium quis officia dolor magni quia harum deleniti,
        cupiditate debitis expedita excepturi eaque accusantium reprehenderit
        tempore ipsa! Iure, perspiciatis.
      </p>
      <form className="d-flex justify-content-between" onSubmit={submitHandler}>
        <input className="ms-5" onChange={nameChangeHandler} type="text" />
        <input type="date" className="me-5 p-1" onChange={dateChangeHandler} />
      </form>
    </Fragment>
  );
}

export default App;
